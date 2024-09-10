import { createDateFromString } from '@/utils/convertDateFromString';
import { convertTanure } from '@/utils/convertTanure';
import React from 'react';
interface Project {
  name: string;
  description: string;
}
interface Projects {
  client: string;
  projects: Project[];
}
interface Service {
  companyName?: string;
  alias?: string;
  role?: string;
  current: boolean;
  lwd: string;
  joiningDate: string;
  summery?: string[];
  projects?: Projects[];
  recognitions?: string[];
}
interface ServiceSummeryProps {
  service: Service;
}
const ServiceSummery: React.FC<ServiceSummeryProps> = ({ service }) => {
  const {
    companyName,
    alias,
    role,
    current,
    lwd,
    joiningDate,
    summery,
    projects,
    recognitions,
  } = service;
  const joinDate = createDateFromString(joiningDate);
  let serviceDate = `${joinDate
    .getMonth()
    .toString()
    .padStart(2, '0')}/${joinDate.getFullYear()} - `;
  const lastwWrkingDate = createDateFromString(lwd);
  if (!current) {
    serviceDate =
      serviceDate +
      `${lastwWrkingDate
        .getMonth()
        .toString()
        .padStart(2, '0')}/${lastwWrkingDate.getFullYear()}`;
  } else serviceDate = serviceDate + 'Present';
  return (
    <div className="flex flex-col justify-center mb-2">
      <span className="lg:text-2xl text-xl font-bold mb-2 custom-border-b-4">
        {companyName}
      </span>
      <span className="text-sm font-bold">
        {role} | {serviceDate} -{' '}
        {convertTanure(joinDate, lwd ? lastwWrkingDate : '')}
      </span>
      <ul className="list-disc text-sm">
        {summery?.map((item, index) => {
          return <li key={`${alias}-Summery-${index}`}>{item}</li>;
        })}
      </ul>
      {projects?.length && (
        <>
          <span className="text-sm font-bold custom-border-b-4">Project</span>
          <ul className="list-disc">
            {projects.map((project, index) => {
              return (
                <li key={`project-${companyName}-${index}`}>
                  <span className="text-sm font-bold">{project.client}</span>
                  <ul className="list-disc">
                    {project.projects.map((projectItem, index) => {
                      return (
                        <li
                          key={`projectItem-${project.client}-${index}`}
                          className="flex flex-col text-sm mb-1"
                        >
                          <span className="font-semibold">
                            {projectItem.name}:
                          </span>
                          <span>{projectItem.description}</span>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {recognitions && (
        <>
          <span className="text-sm font-bold custom-border-b-4">
            Recognition
          </span>
          <ul className="list-disc text-sm">
            {recognitions.map((item, index) => {
              return <li key={`recognitions-${alias}-${index}`}>{item}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default ServiceSummery;
