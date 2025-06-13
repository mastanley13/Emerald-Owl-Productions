"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SurveyModal({ isOpen, onClose }: SurveyModalProps) {
  const [formData, setFormData] = useState({
    // Contact Info
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    organization: '',
    
    // Section 1: Event Information
    eventType: '',
    eventEstablished: '',
    yearsHeld: '',
    primaryDates: '',
    rainDates: '',
    showingsPerNight: '',
    estimatedAttendance: '',
    
    // Section 2: Venue Requirements
    venueName: '',
    venueAddress: '',
    venueType: '',
    venueDescription: '',
    powerAvailable: '',
    coverageArea: '',
    
    // Section 3: Budget & Financial Goals
    financialGoals: '',
    financialGoalsOther: '',
    budgetRange: [] as string[],
    
    // Music
    musicTheme: '',
    prerogrammedContent: '',
    specificSongs: '',
    
    // Profit Sharing
    profitSharing: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name === 'budgetRange') {
        setFormData(prev => ({
          ...prev,
          budgetRange: checkbox.checked 
            ? [...prev.budgetRange, value]
            : prev.budgetRange.filter(item => item !== value)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checkbox.checked ? value : '' }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Survey submitted:', formData);
    
    // For now, we'll show an alert and close the modal
    alert('Thank you for your interest! We will contact you within 24 hours to discuss your laser show event.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-emerald-600">Laser Show Event Survey</h2>
            <p className="text-gray-600 text-sm">Help us create the perfect laser show experience for your event</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Contact Information */}
          <div className="bg-emerald-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization/Company
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Section 1: Event Information */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Section 1: Event Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  1. Will your laser show be:
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="eventType"
                      value="standalone"
                      checked={formData.eventType === 'standalone'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    Stand-Alone (Laser Show Only)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="eventType"
                      value="part-of-larger"
                      checked={formData.eventType === 'part-of-larger'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    Part of a Larger Event (e.g., Festival, Celebration)
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  2. How established is your event?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="eventEstablished"
                      value="new"
                      checked={formData.eventEstablished === 'new'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    New Event
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="eventEstablished"
                      value="established"
                      checked={formData.eventEstablished === 'established'}
                      onChange={handleInputChange}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>Number of years it has been held:</span>
                    <input
                      type="number"
                      name="yearsHeld"
                      value={formData.yearsHeld}
                      onChange={handleInputChange}
                      className="w-20 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      min="1"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Date(s)
                  </label>
                  <input
                    type="text"
                    name="primaryDates"
                    value={formData.primaryDates}
                    onChange={handleInputChange}
                    placeholder="Enter your event dates"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rain Date(s)
                  </label>
                  <input
                    type="text"
                    name="rainDates"
                    value={formData.rainDates}
                    onChange={handleInputChange}
                    placeholder="Enter backup dates if applicable"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Showings Per Night
                  </label>
                  <input
                    type="text"
                    name="showingsPerNight"
                    value={formData.showingsPerNight}
                    onChange={handleInputChange}
                    placeholder="Up to 3 showings included"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Up to 3 showings per night are included in all quotes</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Attendance
                  </label>
                  <input
                    type="text"
                    name="estimatedAttendance"
                    value={formData.estimatedAttendance}
                    onChange={handleInputChange}
                    placeholder="Expected number of attendees"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Venue Requirements */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Section 2: Venue Requirements</h3>
            <p className="text-sm text-gray-600 mb-4">
              Laser shows project horizontally over the audience. This means we must establish a clear viewing area.
              Wider venue = more lasers needed • Longer venue = brighter lasers needed (higher wattage)
            </p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Venue Name
                  </label>
                  <input
                    type="text"
                    name="venueName"
                    value={formData.venueName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address
                  </label>
                  <input
                    type="text"
                    name="venueAddress"
                    value={formData.venueAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Venue Type
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="venueType"
                      value="indoor"
                      checked={formData.venueType === 'indoor'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    Indoor
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="venueType"
                      value="outdoor"
                      checked={formData.venueType === 'outdoor'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    Outdoor
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What is the venue? (Stadium, Field, Park, Parking lot, Downtown Street, etc.)
                </label>
                <input
                  type="text"
                  name="venueDescription"
                  value={formData.venueDescription}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What power is available and amperage if known? (If no power, write "NONE AVAILABLE")
                </label>
                <input
                  type="text"
                  name="powerAvailable"
                  value={formData.powerAvailable}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coverage Area: Does your entire venue require laser coverage, or can we consider reducing costs by creating a designated viewing area?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="coverageArea"
                      value="full-venue"
                      checked={formData.coverageArea === 'full-venue'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    Full Venue
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="coverageArea"
                      value="designated-area"
                      checked={formData.coverageArea === 'designated-area'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    Designated Viewing Area Only
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Budget & Financial Goals */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Section 3: Budget & Financial Goals</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  1. What are your financial goals for this event?
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'free-public', label: 'Free to the public' },
                    { value: 'recover-portion', label: 'Recover a portion of investment' },
                    { value: 'break-even', label: 'Break-even' },
                    { value: 'fundraiser', label: 'Fundraiser / Generate Profit' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="financialGoals"
                        value={option.value}
                        checked={formData.financialGoals === option.value}
                        onChange={handleInputChange}
                        className="mr-2 text-emerald-600 focus:ring-emerald-500"
                      />
                      {option.label}
                    </label>
                  ))}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="financialGoals"
                      value="other"
                      checked={formData.financialGoals === 'other'}
                      onChange={handleInputChange}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>Other:</span>
                    <input
                      type="text"
                      name="financialGoalsOther"
                      value={formData.financialGoalsOther}
                      onChange={handleInputChange}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  2. Approximate Budget Range (Check all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    'Under $6,000',
                    '$6,000 – $10,000',
                    '$11,000 – $15,000',
                    '$16,000 – $20,000',
                    '$21,000 – $25,000',
                    '$25,000 – $50,000',
                    '$50,000 – $100,000',
                    '$100,000 and up',
                    'Not sure yet — let\'s discuss'
                  ].map((range) => (
                    <label key={range} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        name="budgetRange"
                        value={range}
                        checked={formData.budgetRange.includes(range)}
                        onChange={handleInputChange}
                        className="mr-2 text-emerald-600 focus:ring-emerald-500"
                      />
                      {range}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Music Section */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Music</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Is there a theme or style of music you'd like this show to follow? Or a mixture?
                </label>
                <textarea
                  name="musicTheme"
                  value={formData.musicTheme}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you open to using some of our pre-programmed content to significantly reduce or eliminate design costs?
                </label>
                <p className="text-xs text-gray-500 mb-2">(Note: This option does not allow for custom song selection.)</p>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="prerogrammedContent"
                      value="yes"
                      checked={formData.prerogrammedContent === 'yes'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    Yes, I'm open to pre-programmed content
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="prerogrammedContent"
                      value="no"
                      checked={formData.prerogrammedContent === 'no'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    No, I prefer custom programming
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are there any specific songs that must be included in the show? Please list the song title(s) and artist(s).
                </label>
                <textarea
                  name="specificSongs"
                  value={formData.specificSongs}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Song Title - Artist Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Profit Sharing Option */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Profit Sharing Option</h3>
            <p className="text-sm text-gray-600 mb-4">
              We understand that first-time events often come with tighter budgets and higher uncertainty. If financial risk is a concern but you believe the event has strong marketing or attendance potential, would you be interested in exploring a shared revenue model as a possible fit?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="profitSharing"
                  value="yes"
                  checked={formData.profitSharing === 'yes'}
                  onChange={handleInputChange}
                  className="mr-2 text-emerald-600 focus:ring-emerald-500"
                />
                Yes, I'd like to learn more
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="profitSharing"
                  value="no"
                  checked={formData.profitSharing === 'no'}
                  onChange={handleInputChange}
                  className="mr-2 text-emerald-600 focus:ring-emerald-500"
                />
                No, we prefer a flat-rate arrangement
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="profitSharing"
                  value="not-sure"
                  checked={formData.profitSharing === 'not-sure'}
                  onChange={handleInputChange}
                  className="mr-2 text-emerald-600 focus:ring-emerald-500"
                />
                Not sure yet
              </label>
            </div>
          </div>

          {/* Section 2: Venue Requirements */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Section 2: Venue Requirements</h3>
            <p className="text-sm text-gray-600 mb-4">
              Laser shows project horizontally over the audience. This means we must establish a clear viewing area.
              Wider venue = more lasers needed • Longer venue = brighter lasers needed (higher wattage)
            </p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Venue Name
                  </label>
                  <input
                    type="text"
                    name="venueName"
                    value={formData.venueName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address
                  </label>
                  <input
                    type="text"
                    name="venueAddress"
                    value={formData.venueAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Venue Type
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="venueType"
                      value="indoor"
                      checked={formData.venueType === 'indoor'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    Indoor
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="venueType"
                      value="outdoor"
                      checked={formData.venueType === 'outdoor'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    Outdoor
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What is the venue? (Stadium, Field, Park, Parking lot, Downtown Street, etc.)
                </label>
                <input
                  type="text"
                  name="venueDescription"
                  value={formData.venueDescription}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What power is available and amperage if known? (If no power, write "NONE AVAILABLE")
                </label>
                <input
                  type="text"
                  name="powerAvailable"
                  value={formData.powerAvailable}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coverage Area: Does your entire venue require laser coverage, or can we consider reducing costs by creating a designated viewing area?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="coverageArea"
                      value="full-venue"
                      checked={formData.coverageArea === 'full-venue'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    Full Venue
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="coverageArea"
                      value="designated-area"
                      checked={formData.coverageArea === 'designated-area'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    Designated Viewing Area Only
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Budget & Financial Goals */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Section 3: Budget & Financial Goals</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  1. What are your financial goals for this event?
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'free-public', label: 'Free to the public' },
                    { value: 'recover-portion', label: 'Recover a portion of investment' },
                    { value: 'break-even', label: 'Break-even' },
                    { value: 'fundraiser', label: 'Fundraiser / Generate Profit' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="financialGoals"
                        value={option.value}
                        checked={formData.financialGoals === option.value}
                        onChange={handleInputChange}
                        className="mr-2 text-emerald-600 focus:ring-emerald-500"
                      />
                      {option.label}
                    </label>
                  ))}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="financialGoals"
                      value="other"
                      checked={formData.financialGoals === 'other'}
                      onChange={handleInputChange}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>Other:</span>
                    <input
                      type="text"
                      name="financialGoalsOther"
                      value={formData.financialGoalsOther}
                      onChange={handleInputChange}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  2. Approximate Budget Range (Check all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    'Under $6,000',
                    '$6,000 – $10,000',
                    '$11,000 – $15,000',
                    '$16,000 – $20,000',
                    '$21,000 – $25,000',
                    '$25,000 – $50,000',
                    '$50,000 – $100,000',
                    '$100,000 and up',
                    'Not sure yet — let\'s discuss'
                  ].map((range) => (
                    <label key={range} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        name="budgetRange"
                        value={range}
                        checked={formData.budgetRange.includes(range)}
                        onChange={handleInputChange}
                        className="mr-2 text-emerald-600 focus:ring-emerald-500"
                      />
                      {range}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Music Section */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Music</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Is there a theme or style of music you'd like this show to follow? Or a mixture?
                </label>
                <textarea
                  name="musicTheme"
                  value={formData.musicTheme}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you open to using some of our pre-programmed content to significantly reduce or eliminate design costs?
                </label>
                <p className="text-xs text-gray-500 mb-2">(Note: This option does not allow for custom song selection.)</p>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="prerogrammedContent"
                      value="yes"
                      checked={formData.prerogrammedContent === 'yes'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    Yes, I'm open to pre-programmed content
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="prerogrammedContent"
                      value="no"
                      checked={formData.prerogrammedContent === 'no'}
                      onChange={handleInputChange}
                      className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    />
                    No, I prefer custom programming
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are there any specific songs that must be included in the show? Please list the song title(s) and artist(s).
                </label>
                <textarea
                  name="specificSongs"
                  value={formData.specificSongs}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Song Title - Artist Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Profit Sharing Option */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Profit Sharing Option</h3>
            <p className="text-sm text-gray-600 mb-4">
              We understand that first-time events often come with tighter budgets and higher uncertainty. If financial risk is a concern but you believe the event has strong marketing or attendance potential, would you be interested in exploring a shared revenue model as a possible fit?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="profitSharing"
                  value="yes"
                  checked={formData.profitSharing === 'yes'}
                  onChange={handleInputChange}
                  className="mr-2 text-emerald-600 focus:ring-emerald-500"
                />
                Yes, I'd like to learn more
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="profitSharing"
                  value="no"
                  checked={formData.profitSharing === 'no'}
                  onChange={handleInputChange}
                  className="mr-2 text-emerald-600 focus:ring-emerald-500"
                />
                No, we prefer a flat-rate arrangement
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="profitSharing"
                  value="not-sure"
                  checked={formData.profitSharing === 'not-sure'}
                  onChange={handleInputChange}
                  className="mr-2 text-emerald-600 focus:ring-emerald-500"
                />
                Not sure yet
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-emerald-300/50 hover:-translate-y-0.5 transform"
              >
                Submit Survey
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 