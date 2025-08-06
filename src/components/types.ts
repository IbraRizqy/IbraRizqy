export interface ProjectData {
  name: string;
  description: string;
  link: string;
  category: string;
}

export interface ProjectProps {
  projects: ProjectData[];
}

export interface CertificationData {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface CertificationProps {
  certifications: CertificationData[];
}