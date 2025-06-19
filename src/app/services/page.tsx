'use client';
import { useEffect, useRef, useState } from 'react';
import services from '../../resources/service.json';
interface Project {
  name: string;
  description: string;
}

interface ClientProject {
  client: string;
  projects: Project[];
}

interface ServiceData {
  companyName: string;
  alias: string;
  role: string;
  current: boolean;
  lwd: string;
  joiningDate: string;
  summery: string[];
  projects?: ClientProject[];
  recognitions?: string[];
}

interface ServiceSectionData {
  id: string;
  service: ServiceData;
  imageSrc: string;
  contentPosition: 'left' | 'right';
}

function ServiceSection({
  section,
  isVisible,
}: {
  section: ServiceSectionData;
  isVisible: boolean;
}) {
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Present';
    const [day, month, year] = dateString.split('-');
    const date = new Date(
      Number.parseInt(year),
      Number.parseInt(month) - 1,
      Number.parseInt(day)
    );
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate.split('-').reverse().join('-'));
    const end = endDate
      ? new Date(endDate.split('-').reverse().join('-'))
      : new Date();

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);

    if (years > 0) {
      return months > 0 ? `${years}y ${months}m` : `${years}y`;
    }
    return `${months}m`;
  };

  return (
    <div
      className="min-h-screen relative flex items-center bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${section.imageSrc})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Content Container */}
      <div className="relative z-10 w-full px-8 lg:px-16">
        <div
          className={`flex ${
            section.contentPosition === 'right'
              ? 'justify-end'
              : 'justify-start'
          }`}
        >
          <div
            className={`max-w-3xl transform transition-all duration-1000 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : section.contentPosition === 'right'
                ? 'translate-x-20 opacity-0'
                : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-2xl border border-white/20">
              {/* Company Header */}
              <div className="mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 border-b-4 border-green-500 pb-4 inline-block">
                  {section.service.companyName}
                </h2>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <span className="text-xl font-semibold text-green-400">
                    {section.service.role}
                  </span>
                  {section.service.current && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Current
                    </span>
                  )}
                </div>
                <div className="text-white/80 mt-2">
                  <span className="text-green-400 font-medium">Duration:</span>{' '}
                  {formatDate(section.service.joiningDate)} -{' '}
                  {formatDate(section.service.lwd)}
                  <span className="ml-2 text-green-400">
                    (
                    {calculateDuration(
                      section.service.joiningDate,
                      section.service.lwd
                    )}
                    )
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3">
                  Summary
                </h3>
                <div className="space-y-3">
                  {section.service.summery.map((summary, index) => (
                    <p key={index} className="text-white/90 leading-relaxed">
                      {summary}
                    </p>
                  ))}
                </div>
              </div>

              {/* Projects */}
              {section.service.projects &&
                section.service.projects.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-green-400 mb-3">
                      Projects
                    </h3>
                    {section.service.projects.map(
                      (clientProject, clientIndex) => (
                        <div key={clientIndex} className="mb-4">
                          <h4 className="text-lg font-medium text-white mb-2">
                            <span className="text-green-400">Client:</span>{' '}
                            {clientProject.client}
                          </h4>
                          <div className="space-y-3 ml-4">
                            {clientProject.projects.map(
                              (project, projectIndex) => (
                                <div
                                  key={projectIndex}
                                  className="border-l-2 border-green-500 pl-4"
                                >
                                  <h5 className="font-semibold text-green-400 mb-1">
                                    {project.name}
                                  </h5>
                                  <p className="text-white/90 text-sm leading-relaxed">
                                    {project.description}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}

              {/* Recognitions */}
              {section.service.recognitions &&
                section.service.recognitions.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-3">
                      Recognitions
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {section.service.recognitions.map(
                        (recognition, index) => (
                          <span
                            key={index}
                            className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30"
                          >
                            🏆 {recognition}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Service() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [isMobile, setIsMobile] = useState(false);

  // Service data (you can import this from your JSON file)
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sections: ServiceSectionData[] = services.map((service, index) => ({
    id: service.alias,
    service,
    imageSrc: `/services/${service.alias}.jpg`,
    contentPosition: index % 2 === 0 ? 'left' : 'right',
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          } else {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.id);
              return newSet;
            });
          }
        });
      },
      {
        threshold: isMobile ? 0.2 : 0.4,
        rootMargin: isMobile ? '-10% 0px -10% 0px' : '-20% 0px -20% 0px',
      }
    );

    sections.forEach((section) => {
      const element = sectionRefs.current[section.id];
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <div className="overflow-hidden">
      {sections.length &&
        sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            className="section"
          >
            <ServiceSection
              section={section}
              isVisible={visibleSections.has(section.id)}
            />
          </div>
        ))}
    </div>
  );
}
