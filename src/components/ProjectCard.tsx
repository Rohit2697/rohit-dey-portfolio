import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import { getFilesFromDirectory } from '@/utils/getFilesfromdirectory';
import Image from 'next/image';
import CreateProjectCardCmp from './CreateProjectCardCmp';
import { ProjectCardProps } from '@/app/skills/ProjectInterface';
import Link from 'next/link';
import { Button } from './ui/button';
const ProjectCard: React.FC<{ project: ProjectCardProps }> = async ({
  project,
}) => {
  const filesName = await getFilesFromDirectory('./public/projects');
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold">
          {project.project_name.toUpperCase()}
        </CardTitle>
        <div className="flex justify-center mb-2">
          <Image
            src={`/projects/${filesName.find((filename) =>
              filename.includes(project.slug)
            )}`}
            height={500}
            width={500}
            alt={`${project.slug} pic`}
            className="lg:h-40 lg:w-40 h-20 w-20 object-cover rounded-full shadow-lg"
          />
        </div>
        <CardDescription>{project.project_description}</CardDescription>
      </CardHeader>
      <CardContent>
        <CreateProjectCardCmp techSTacks={project.tech_stack} />
        {project.github_url && (
          <div className='flex justify-center'>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`${project.github_url}`}
            >
              <Button size="sm">Git Hub</Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
