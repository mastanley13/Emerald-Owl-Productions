export interface Experience {
  id: string;
  title: string;
  hook: string;
  visual: string;
  link?: string; // Optional URL link for the experience
}

export interface ExperienceCategory {
  mainCourses: Experience[];
  appetizers: Experience[];
  desserts: Experience[];
}

// Representing the structure of experiences.json
export interface ExperiencesData extends ExperienceCategory {} 