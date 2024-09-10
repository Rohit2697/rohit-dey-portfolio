export interface ProjectCardProps {
  project_name: string;
  slug: string;
  project_description: string;
  tech_stack: {
    [key: string]: string[];
  };
  github_url?: string;
}