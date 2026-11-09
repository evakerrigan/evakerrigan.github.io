export type Link = {
  label: string;
  url: string;
  // Kept in the data but shown as plain text, not as a link.
  inactive?: boolean;
};

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  url: string;
};

export type Job = {
  period: string;
  position?: string;
  company: string;
  companyUrl?: string;
  note?: string;
  // A pause between jobs: shown as a quiet grey line, not as a company.
  isBreak?: boolean;
  links?: Link[];
  points?: string[];
  text?: string;
  stack?: string[];
  screenshots?: Screenshot[];
};

export type Project = {
  name: string;
  url: string;
  text: string;
  stack: string[];
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type Education = {
  school: string;
  course: string;
};

export type Profile = {
  name: string;
  role: string;
  // Hidden on phones, where the header next to the photo is narrow.
  roleStack: string;
  photo: string;
  about: string;
};

export type Contact = Link & { type: string };

/** Everything the CV page shows in one language. */
export type CvContent = {
  meta: {
    title: string;
    description: string;
    jobTitle: string;
  };
  ui: {
    experience: string;
    projects: string;
    skills: string;
    education: string;
    themeToggle: string;
  };
  profile: Profile;
  contacts: Contact[];
  jobs: Job[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
};
