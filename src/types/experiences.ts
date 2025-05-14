export interface Experience {
  id: string;
  title: string;
  hook: string;
  visual: string;
}

export interface ExperienceCategory {
  mainCourses: Experience[];
  appetizers: Experience[];
  desserts: Experience[];
}

// Representing the structure of experiences.json
export interface ExperiencesData extends ExperienceCategory {} 