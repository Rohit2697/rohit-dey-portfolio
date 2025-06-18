'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface SectionData {
  id: string;
  title: string;
  content: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  contentPosition: 'left' | 'right';
}

function ImageCarousel({
  images,
  onImageChange,
}: {
  images: { src: string; alt: string }[];
  onImageChange?: (index: number) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    onImageChange?.(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    onImageChange?.(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    onImageChange?.(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Call onImageChange when component mounts
  useEffect(() => {
    onImageChange?.(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6 group">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.src})` }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function AboutSection({
  section,
  isVisible,
}: {
  section: SectionData;
  isVisible: boolean;
}) {
  return (
    <div
      className="min-h-screen relative flex items-center bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${section.imageSrc})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

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
            className={`max-w-2xl transform transition-all duration-1000 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : section.contentPosition === 'right'
                ? 'translate-x-20 opacity-0'
                : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-2xl border border-white/20">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 border-b-4 border-green-500 pb-4 inline-block">
                {section.title}
              </h2>
              <div className="text-white/90 leading-relaxed">
                {section.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [currentHobbiesBackground, setCurrentHobbiesBackground] = useState(
    '/hobbies/webdevelopment.jpg'
  );
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const imagesName = [
    'webdevelopment.jpg',
    'cycling.jpg',
    'bike.jpg',
    'in_temple.jpg',
  ];
  const hobbiesImages = imagesName.map((image) => {
    return {
      src: `/hobbies/${image}`,
      alt: image.split('.')[0],
    };
  });

  const handleHobbiesImageChange = (index: number) => {
    setCurrentHobbiesBackground(hobbiesImages[index].src);
  };

  const sections: SectionData[] = [
    {
      id: 'about-me',
      title: 'ABOUT ME',
      imageSrc: '/about.jpg',
      imageAlt: 'Family photo',
      contentPosition: 'left',
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Hello, I&apos;m{' '}
            <strong className="text-green-400">Rohit Dey</strong>, hailing from
            the culturally rich town of Murshidabad in West Bengal, where I was
            born and brought up. Coming from a humble yet disciplined
            background, my father,{' '}
            <strong className="text-green-400">Atin Dey</strong>, served the
            country as an army personnel, instilling values of dedication and
            resilience in me from a young age.
          </p>
          <p className="text-lg">
            My mother, <strong className="text-green-400">Ruma Dey</strong>, has
            always been the pillar of our family, managing the household with
            care and love as a homemaker. Together, their support has been a
            constant driving force behind my journey.
          </p>
        </div>
      ),
    },
    {
      id: 'graduation',
      title: 'GRADUATION',
      imageSrc: '/karunya.jpg',
      imageAlt: 'Karunya University building',
      contentPosition: 'right',
      content: (
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
            <span>
              Pursued Bachelor of Technology (BTech) in{' '}
              <strong className="text-green-400">
                Computer Science and Engineering (CSE)
              </strong>{' '}
              from{' '}
              <Link
                className="font-bold text-green-400 hover:text-green-300 underline transition-colors"
                target="_blank"
                href="https://www.karunya.edu/"
              >
                Karunya Institute of Technology and Sciences.
              </Link>
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
            <span>
              Time at Karunya was both academically enriching and personally
              transformative, molding me into a resourceful individual ready for
              real-world challenges.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
            <span>
              Graduated with a CGPA of{' '}
              <strong className="text-green-400">8.38</strong>, embracing every
              learning opportunity.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
            <span>Gained deep knowledge in computing and problem-solving.</span>
          </li>
          <li className="flex items-start">
            <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
            <span>
              This academic foundation has well-prepared me for professional
              endeavors.
            </span>
          </li>
        </ul>
      ),
    },
    {
      id: 'schooling',
      title: 'SCHOOLING',
      imageSrc: '/nbi.jpg',
      imageAlt: "Nawab Bahadur's Institution",
      contentPosition: 'left',
      content: (
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
            <span>
              Completed higher secondary and matriculation from{' '}
              <Link
                href="https://school.banglarshiksha.gov.in/ws/website/index/19072701003"
                className="font-bold text-green-400 hover:text-green-300 underline transition-colors"
                target="_blank"
              >
                Nawab Bahadur&apos;s Institution
              </Link>
              , an esteemed institution that laid the foundation for my interest
              in technology and engineering.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
            <span>
              The rigorous academic environment during schooling instilled a
              deep love for learning and exploration, which continues to drive
              my curiosity.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
            <span>
              In Higher Secondary, studied{' '}
              <strong className="text-green-400">
                Physics, Chemistry, Math, Computer, English, and Bengali,
                securing 77.4%
              </strong>
              .
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
            <span>
              In Matriculation, studied{' '}
              <strong className="text-green-400">
                English, Bengali, History, Geography, Math, Physical Science,
                and Life Science, securing 79%
              </strong>
              .
            </span>
          </li>
        </ul>
      ),
    },
    {
      id: 'hobbies',
      title: 'HOBBIES',
      imageSrc: currentHobbiesBackground, // Use dynamic background
      imageAlt: 'Hobbies',
      contentPosition: 'right',
      content: (
        <div className="space-y-6">
          <ImageCarousel
            images={hobbiesImages}
            onImageChange={handleHobbiesImageChange}
          />
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
              <span>
                Passionate about learning new technologies and staying
                up-to-date with the latest advancements in the tech world.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
              <span>Enjoy experimenting with new tools and frameworks.</span>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
              <span>
                Unwind by watching movies, appreciating various genres, and
                storytelling.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
              <span>
                Cherish cycling as it keeps me fit and provides a sense of
                freedom and adventure.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
              <span>
                Strive to balance learning, creativity, and personal and
                professional growth in everything I do.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add section when it comes into view
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          } else {
            // Remove section when it goes out of view
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.id);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.4, // Trigger when 40% of the section is visible
        rootMargin: '-20% 0px -20% 0px', // Only trigger when section is more centered
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
  }, []);

  return (
    <div className="overflow-hidden">
      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          ref={(el) => {
            sectionRefs.current[section.id] = el;
          }}
          className="section"
        >
          <AboutSection
            section={section}
            isVisible={visibleSections.has(section.id)}
          />
        </div>
      ))}
    </div>
  );
}
