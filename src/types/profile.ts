export type Experience = {
  company: string;
  position: string;
  period: string;
  location: string;
  description?: string;
  skills?: string[];
};

export type SkillCategory = {
  name: string;
  items: string[];
};

export type ProjectSummary = {
  title: string;
  description: string;
  link?: string;
  technologies: string[];
};

export type PersonalInfo = {
  name: string;
  role: string;
  location: string;
  email: string;
  links: { label: string; url: string }[];
};

export type ProfileContent = {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  skillCategories: SkillCategory[];
  projectSummaries: ProjectSummary[];
};
