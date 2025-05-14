'use client'; // Add this directive at the top

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Next Image
import { Experience, ExperienceCategory } from '../../types/experiences'; // Assuming types are in this path
import Link from 'next/link';

interface ExperienceMenuProps {
  experiences: ExperienceCategory;
}

type CategoryKey = keyof ExperienceCategory;

// Define types for wizard state
type WizardStep = null | 'mainCourseSelected' | 'addonsSelection' | 'infoForm' | 'review' | 'submitted';

interface EventDetailsForm {
  eventDate: string;
  headCount: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  notes: string;
}

// Define WizardStepWrapper outside of the ExperienceMenu component
const WizardStepWrapper: React.FC<{children: React.ReactNode, isTransitioning: boolean}> = ({ children, isTransitioning }) => (
  <div className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
    {children}
  </div>
);

const ExperienceMenu: React.FC<ExperienceMenuProps> = ({ experiences }) => {
  // Log the received experiences prop on component mount and when it changes
  useEffect(() => {
    console.log("ExperienceMenu received experiences prop:", JSON.stringify(experiences, null, 2));
  }, [experiences]);

  const [activeCategory, setActiveCategory] = useState<CategoryKey>('mainCourses');
  
  // Wizard State
  const [currentWizardStep, setCurrentWizardStep] = useState<WizardStep>(null);
  const [selectedMainCourse, setSelectedMainCourse] = useState<Experience | null>(null);
  const [selectedAppetizers, setSelectedAppetizers] = useState<Experience[]>([]);
  const [selectedDesserts, setSelectedDesserts] = useState<Experience[]>([]);
  const [eventFormData, setEventFormData] = useState<EventDetailsForm>({
    eventDate: '',
    headCount: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    notes: ''
  });
  // To manage transition states for wizard steps
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    console.log("[ExperienceMenu Notes Debug] useEffect triggered. Selections:", {
      mainCourse: selectedMainCourse,
      appetizers: selectedAppetizers,
      desserts: selectedDesserts,
    });

    const generateNotes = (): string => {
      const allSelections: Experience[] = [];
      if (selectedMainCourse) {
        allSelections.push(selectedMainCourse);
      }
      if (Array.isArray(selectedAppetizers)) {
        allSelections.push(...selectedAppetizers);
      }
      if (Array.isArray(selectedDesserts)) {
        allSelections.push(...selectedDesserts);
      }

      console.log("[ExperienceMenu Notes Debug] All selections for notes before filtering:", allSelections);

      const validSelections = allSelections.filter(item => item && typeof item.title !== 'undefined');

      if (validSelections.length === 0) {
        console.log("[ExperienceMenu Notes Debug] No valid selections, returning empty notes.");
        return "";
      }

      let message = "I'm interested in the following experiences:\n";
      validSelections.forEach((item) => {
        // Ensure item.title is not undefined again, though filter should handle it
        if (item.title) {
            message += `- ${item.title}\n`;
        }
      });
      
      console.log("[ExperienceMenu Notes Debug] Generated notes string:", message);
      return message.trim(); // Trim any trailing newline
    };

    const newNotes = generateNotes();
    setEventFormData(prevFormData => {
      console.log("[ExperienceMenu Notes Debug] Updating eventFormData.notes from:", prevFormData.notes, "to:", newNotes);
      if (prevFormData.notes !== newNotes) {
        return { ...prevFormData, notes: newNotes };
      }
      return prevFormData; // Return previous state if no change
    });

  }, [selectedMainCourse, selectedAppetizers, selectedDesserts]);

  const categoryTitles: Record<CategoryKey, string> = {
    mainCourses: 'Main Courses',
    appetizers: 'Appetizers',
    desserts: 'Desserts (Initiatives)',
  };

  const switchWizardStep = (step: WizardStep) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentWizardStep(step);
      setIsTransitioning(false);
      // Scroll to top of wizard section when step changes
      document.getElementById('experience-wizard-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300); // Duration of fade-out transition
  };

  const handleSelectMainCourse = (item: Experience) => {
    setSelectedMainCourse(item);
    switchWizardStep('mainCourseSelected');
  };

  const handleToggleAppetizer = (item: Experience) => {
    setSelectedAppetizers(prev => 
      prev.find(app => app.id === item.id)
        ? prev.filter(app => app.id !== item.id)
        : [...prev, item]
    );
  };

  const handleToggleDessert = (item: Experience) => {
    setSelectedDesserts(prev => 
      prev.find(des => des.id === item.id)
        ? prev.filter(des => des.id !== item.id)
        : [...prev, item]
    );
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitEventPlan = async () => {
    setIsTransitioning(true);
    const eventPlanData = {
      mainCourse: selectedMainCourse,
      appetizers: selectedAppetizers,
      desserts: selectedDesserts,
      formData: eventFormData,
    };

    console.log("Event Plan Submitted:", eventPlanData);

    // Send data to webhook
    const webhookUrl = 'https://services.leadconnectorhq.com/hooks/d2BYZGOF7ecSj21A0t4N/webhook-trigger/b660e4ca-124b-49e4-b26d-24c0426abe8e';
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventPlanData),
      });
      if (response.ok) {
        console.log('Webhook call successful:', await response.json());
      } else {
        console.error('Webhook call failed:', response.status, response.statusText, await response.text());
        // Optionally, inform the user that submission to the webhook failed but their request is still processed locally.
      }
    } catch (error) {
      console.error('Error sending data to webhook:', error);
      // Optionally, inform the user about the network error.
    }

    setTimeout(() => {
        setCurrentWizardStep('submitted');
        setIsTransitioning(false);
        document.getElementById('experience-wizard-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const handleResetWizard = () => {
    setIsTransitioning(true);
    setTimeout(() => {
        setSelectedMainCourse(null);
        setSelectedAppetizers([]);
        setSelectedDesserts([]);
        setEventFormData({
            eventDate: '',
            headCount: '',
            contactName: '',
            contactEmail: '',
            contactPhone: '',
            notes: ''
        });
        setActiveCategory('mainCourses');
        setCurrentWizardStep(null);
        setIsTransitioning(false);
        // Scroll to the top of the experience menu section (initial view)
        document.getElementById('experience-menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const renderCards = (items: Experience[], category: CategoryKey, inWizard: boolean = false) => {
    if (!items || items.length === 0) {
      return <p className="text-gray-500 italic">No items available in this category.</p>;
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => {
          const isSelected = 
            (category === 'appetizers' && selectedAppetizers.find(app => app.id === item.id)) ||
            (category === 'desserts' && selectedDesserts.find(des => des.id === item.id));
          
          return (
            <div 
              key={item.id} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex flex-col ${isSelected ? 'ring-4 ring-emerald-500' : ''}`}
            >
              <div className="relative w-full h-56">
                <Image 
                  src={item.visual || '/images/placeholder.jpg'} 
                  alt={item.title}
                  fill // Changed from layout="fill"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow"> 
                <h4 className="text-2xl font-semibold text-emerald-700 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-4 min-h-[40px] flex-grow">{item.hook}</p> 
                {category === 'mainCourses' && !inWizard && (
                  <button 
                    className="mt-auto w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-opacity-50 text-lg shadow-md hover:shadow-lg"
                    onClick={() => handleSelectMainCourse(item)}
                  >
                    Select This Main Course
                  </button>
                )}
                {category === 'appetizers' && inWizard && (
                  <button 
                    className={`mt-auto w-full font-medium py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 text-lg shadow-md hover:shadow-lg 
                      ${isSelected 
                        ? 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-400' 
                        : 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400'}`}
                    onClick={() => handleToggleAppetizer(item)}
                  >
                    {isSelected ? 'Remove Appetizer' : 'Add Appetizer'}
                  </button>
                )}
                {category === 'desserts' && inWizard && (
                   <button 
                    className={`mt-auto w-full font-medium py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 text-lg shadow-md hover:shadow-lg 
                      ${isSelected 
                        ? 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-400' 
                        : 'bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-400'}`}
                    onClick={() => handleToggleDessert(item)}
                  >
                    {isSelected ? 'Remove Initiative' : 'Add Initiative'}
                  </button>
                )}
              </div>
            </div>
          )}
        )}
      </div>
    );
  };

  // ----- WIZARD STEP RENDER FUNCTIONS -----
  const renderMainCourseSelectedStep = () => {
    if (!selectedMainCourse) return null;
    return (
      <WizardStepWrapper isTransitioning={isTransitioning}>
        <div className="text-center py-12 bg-emerald-50 rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold text-emerald-700 mb-1">Main Course Selected!</h3>
          <p className="text-lg text-gray-600 mb-6">You're off to a great start.</p>
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="relative w-full h-56 rounded-md overflow-hidden mb-4">
                <Image 
                    src={selectedMainCourse.visual || '/images/placeholder.jpg'} 
                    alt={selectedMainCourse.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 400px"
                />
              </div>
              <h4 className="text-2xl font-semibold mb-2 text-emerald-600">{selectedMainCourse.title}</h4>
              <p className="text-gray-600 text-sm">{selectedMainCourse.hook}</p>
          </div>
          <div className="mt-8 space-y-3 md:space-y-0 md:space-x-4">
              <button 
                  onClick={() => switchWizardStep('addonsSelection')}
                  className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-md hover:shadow-lg"
              >
                  Next: Choose Add-ons
              </button>
              <button 
                  onClick={() => switchWizardStep(null)} // Reset wizard to initial selection
                  className="w-full md:w-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                  Change Main Course
              </button>
          </div>
        </div>
      </WizardStepWrapper>
    );
  };

 const renderAddonsSelectionStep = () => {
    if (!selectedMainCourse) return null;
    return (
      <WizardStepWrapper isTransitioning={isTransitioning}>
        <div className="py-12">
          <div className="text-center mb-10 p-6 bg-emerald-700 text-white rounded-xl shadow-2xl">
            <h3 className="text-4xl font-extrabold mb-2">Customize Your Event</h3>
            <p className="text-xl font-semibold opacity-90">Main Course: <span className="text-emerald-300">{selectedMainCourse.title}</span></p>
          </div>

          <div className="mb-16">
            <h4 className="text-3xl font-bold text-emerald-800 mb-8 text-center">
              <span className="pb-2 border-b-4 border-emerald-300">Appetizers <span className="text-lg font-normal text-gray-500">(Optional)</span></span>
            </h4>
            {renderCards(experiences.appetizers, 'appetizers', true)}
          </div>

          <div className="mb-12">
            <h4 className="text-3xl font-bold text-sky-800 mb-8 text-center">
              <span className="pb-2 border-b-4 border-sky-300">Support Our Initiatives <span className="text-lg font-normal text-gray-500">(Optional)</span></span>
            </h4>
            {renderCards(experiences.desserts, 'desserts', true)}
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center sticky bottom-0 bg-white/95 backdrop-blur-md p-6 rounded-t-2xl shadow-2xl border-t border-gray-200">
              <button 
                  onClick={() => switchWizardStep('mainCourseSelected')}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mb-3 md:mb-0 w-full md:w-auto"
              >
                  &larr; Back to Main Course
              </button>
              <div className="text-center md:text-right mb-3 md:mb-0">
                  <p className="text-md text-gray-700">Appetizers: <span className="font-bold text-emerald-600">{selectedAppetizers.length}</span></p>
                  <p className="text-md text-gray-700">Initiatives: <span className="font-bold text-sky-600">{selectedDesserts.length}</span></p>
              </div>
              <button 
                  onClick={() => switchWizardStep('infoForm')}
                  className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-md hover:shadow-lg"
              >
                  Next: Your Event Details &rarr;
              </button>
          </div>
        </div>
      </WizardStepWrapper>
    );
  };

  const renderInfoFormStep = () => {
    return (
      <WizardStepWrapper isTransitioning={isTransitioning}>
        <div className="py-12">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-extrabold text-white mb-2">Tell Us About Your Event</h3>
            <p className="text-lg text-emerald-200">Almost there! Just a few more details.</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">Event Date*</label>
                  <input type="date" id="eventDate" name="eventDate" value={eventFormData.eventDate} onChange={handleFormInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm text-slate-900 placeholder:text-slate-400" required />
                </div>
                <div>
                  <label htmlFor="headCount" className="block text-sm font-medium text-gray-700 mb-1">Estimated Headcount*</label>
                  <input type="number" id="headCount" name="headCount" min="1" value={eventFormData.headCount} onChange={handleFormInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm text-slate-900 placeholder:text-slate-400" required />
                </div>
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">Your Full Name*</label>
                <input type="text" id="contactName" name="contactName" value={eventFormData.contactName} onChange={handleFormInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm text-slate-900 placeholder:text-slate-400" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                  <input type="email" id="contactEmail" name="contactEmail" value={eventFormData.contactEmail} onChange={handleFormInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm text-slate-900 placeholder:text-slate-400" required />
                </div>
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="contactPhone" name="contactPhone" value={eventFormData.contactPhone} onChange={handleFormInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm text-slate-900 placeholder:text-slate-400" />
                </div>
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes / Questions</label>
                <textarea id="notes" name="notes" rows={4} value={eventFormData.notes} onChange={handleFormInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm text-slate-900 placeholder:text-slate-400"></textarea>
              </div>
            </form>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center sticky bottom-0 bg-white/95 backdrop-blur-md p-6 rounded-t-2xl shadow-2xl border-t border-gray-200">
              <button 
                  onClick={() => switchWizardStep('addonsSelection')}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mb-3 md:mb-0 w-full md:w-auto"
              >
                  &larr; Back to Add-ons
              </button>
              <button 
                  onClick={() => {
                      if (eventFormData.eventDate && eventFormData.headCount && eventFormData.contactName && eventFormData.contactEmail) {
                          switchWizardStep('review');
                      } else {
                          alert('Please fill in all required fields (*).');
                      }
                  }}
                  className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-md hover:shadow-lg"
              >
                  Next: Review Your Plan &rarr;
              </button>
          </div>
        </div>
      </WizardStepWrapper>
    );
  };

  const renderReviewStep = () => {
    if (!selectedMainCourse) return null; 
    const renderExperienceListItem = (exp: Experience, type: 'appetizer' | 'dessert') => (
      <li key={exp.id} className="flex items-center py-3 border-b border-gray-200 last:border-b-0">
        <div className="relative w-16 h-12 rounded-md overflow-hidden mr-4 shadow-sm">
            <Image src={exp.visual || '/images/placeholder.jpg'} alt={exp.title} fill className="object-cover" sizes="64px" />
        </div>
        <div>
            <p className={`font-semibold ${type === 'appetizer' ? 'text-emerald-700' : 'text-sky-700'}`}>{exp.title}</p>
            <p className="text-xs text-gray-500">{exp.hook}</p>
        </div>
      </li>
    );

    return (
      <WizardStepWrapper isTransitioning={isTransitioning}>
        <div className="py-12">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-extrabold text-emerald-700 mb-2">Review Your Event Plan</h3>
            <p className="text-lg text-gray-600">One final look! Please confirm the details below.</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-2xl space-y-8 border border-gray-200">
            <div>
              <h4 className="text-2xl font-bold text-emerald-800 mb-4 border-b-2 border-emerald-200 pb-3">Your Main Course</h4>
              <div className="flex items-center p-4 bg-emerald-50 rounded-lg shadow-sm">
                <div className="relative w-24 h-20 md:w-32 md:h-24 rounded-lg overflow-hidden mr-6 shadow-md">
                    <Image src={selectedMainCourse.visual || '/images/placeholder.jpg'} alt={selectedMainCourse.title} fill className="object-cover" sizes="(max-width: 768px) 96px, 128px"/>
                </div>
                <div>
                    <h5 className="text-xl md:text-2xl font-bold text-emerald-700">{selectedMainCourse.title}</h5>
                    <p className="text-gray-600 text-sm">{selectedMainCourse.hook}</p>
                </div>
              </div>
            </div>

            {selectedAppetizers.length > 0 && (
              <div>
                <h4 className="text-2xl font-bold text-emerald-800 mb-4 border-b-2 border-emerald-200 pb-3">Selected Appetizers</h4>
                <ul className="space-y-1 bg-gray-50 p-4 rounded-lg shadow-sm">
                  {selectedAppetizers.map(exp => renderExperienceListItem(exp, 'appetizer'))}
                </ul>
              </div>
            )}

            {selectedDesserts.length > 0 && (
              <div>
                <h4 className="text-2xl font-bold text-sky-800 mb-4 border-b-2 border-sky-200 pb-3">Initiatives Supported</h4>
                <ul className="space-y-1 bg-gray-50 p-4 rounded-lg shadow-sm">
                  {selectedDesserts.map(exp => renderExperienceListItem(exp, 'dessert'))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-3">Event & Contact Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 text-md bg-gray-50 p-6 rounded-lg shadow-sm">
                <div><strong className="text-gray-500 block mb-1">Event Date:</strong> <span className="text-gray-800 font-medium">{eventFormData.eventDate ? new Date(eventFormData.eventDate + 'T00:00:00').toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : 'Not set'}</span></div>
                <div><strong className="text-gray-500 block mb-1">Headcount:</strong> <span className="text-gray-800 font-medium">{eventFormData.headCount || 'Not set'}</span></div>
                <div><strong className="text-gray-500 block mb-1">Full Name:</strong> <span className="text-gray-800 font-medium">{eventFormData.contactName || 'Not set'}</span></div>
                <div><strong className="text-gray-500 block mb-1">Email:</strong> <span className="text-gray-800 font-medium">{eventFormData.contactEmail || 'Not set'}</span></div>
                <div><strong className="text-gray-500 block mb-1">Phone:</strong> <span className="text-gray-800 font-medium">{eventFormData.contactPhone || 'Not provided'}</span></div>
                {eventFormData.notes && (
                    <div className="md:col-span-2"><strong className="text-gray-500 block mb-1">Notes:</strong> <p className="text-gray-800 font-medium bg-white p-3 rounded whitespace-pre-wrap border border-gray-200">{eventFormData.notes}</p></div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center sticky bottom-0 bg-white/95 backdrop-blur-md p-6 rounded-t-2xl shadow-2xl border-t border-gray-200">
              <button 
                  onClick={() => switchWizardStep('infoForm')}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mb-3 md:mb-0 w-full md:w-auto"
              >
                  &larr; Edit Details
              </button>
              <button 
                  onClick={handleSubmitEventPlan}
                  className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 text-xl shadow-lg hover:shadow-xl"
              >
                  Confirm & Submit Plan!
              </button>
          </div>
        </div>
      </WizardStepWrapper>
    );
  };

  const renderSubmittedStep = () => {
    return (
      <WizardStepWrapper isTransitioning={isTransitioning}>
        <div className="py-12 text-center">
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-2xl border border-gray-200">
              <svg className="w-28 h-28 text-green-500 mx-auto mb-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-4xl font-extrabold text-emerald-700 mb-5">Thank You!</h3>
              <p className="text-xl text-gray-700 mb-8">
                  Your event plan has been successfully submitted. Our team will review your selections and contact you shortly to discuss the next steps and provide a personalized quote.
              </p>
              <p className="text-md text-gray-600 mb-10">If you have any immediate questions, feel free to <Link href="/contact-us" className="text-emerald-600 hover:text-emerald-800 font-semibold underline">contact us</Link>.</p>
              
              <div className="mt-10 space-y-4 md:space-y-0 md:flex md:justify-center md:space-x-4">
                  <button 
                      onClick={handleResetWizard} // Uses the reset with transition
                      className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-md hover:shadow-lg"
                  >
                      Plan Another Event
                  </button>
                  <Link href="/" 
                      className="inline-block w-full md:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg border border-gray-300 shadow-sm hover:shadow-md"
                  >
                      Return to Homepage
                  </Link>
              </div>
          </div>
        </div>
      </WizardStepWrapper>
    );
  };

  // ----- MAIN RENDER LOGIC -----
  const renderWizardContent = () => {
    switch (currentWizardStep) {
      case 'mainCourseSelected':
        return renderMainCourseSelectedStep();
      case 'addonsSelection':
        return renderAddonsSelectionStep();
      case 'infoForm':
        return renderInfoFormStep();
      case 'review':
        return renderReviewStep();
      case 'submitted':
        return renderSubmittedStep();
      default:
        return null;
    }
  };

  return (
    <section id="experience-menu" className="py-20 md:py-28 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {currentWizardStep === null ? (
          <div className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <header className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Plan Your <span className="text-emerald-300">Unforgettable Event</span>
              </h2>
              <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto font-light">
                Craft your perfect experience with Emerald Owl. Select a stunning main course, add exciting appetizers, and choose to support our community initiatives.
              </p>
            </header>
            
            <div className="flex justify-center mb-12 space-x-1 md:space-x-2 bg-black/20 backdrop-blur-sm p-2 rounded-full shadow-xl max-w-lg mx-auto border border-emerald-600">
              {(Object.keys(experiences) as CategoryKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex-1 px-3 py-3 md:px-6 md:py-4 text-sm md:text-lg font-bold rounded-full transition-all duration-300 ease-in-out 
                    ${activeCategory === key 
                      ? 'bg-emerald-500 text-white shadow-lg ring-2 ring-emerald-300' 
                      : 'bg-transparent text-emerald-200 hover:bg-emerald-600/60 hover:text-white'}
                    focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-opacity-60`}
                >
                  {categoryTitles[key]}
                </button>
              ))}
            </div>
            <div>
              {renderCards(experiences[activeCategory], activeCategory)}
            </div>
          </div>
        ) : (
          <div id="experience-wizard-content">
            {renderWizardContent()}
          </div>
        )}
      </div>
      {/* Decorative shapes for background */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-3xl animate-pulse opacity-50"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-sky-500/20 rounded-full blur-3xl animate-pulse opacity-50 animation-delay-2000"></div>
        <div className="absolute top-1/3 -right-1/4 w-1/3 h-1/3 bg-pink-500/10 rounded-tl-full rounded-br-full blur-2xl animate-pulse opacity-40 animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default ExperienceMenu; 