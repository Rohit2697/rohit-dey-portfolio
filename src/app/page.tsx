// import { AnimatedText } from '@/components/AnimatedText';
'use client';
import ImageCmp from '@/components/Image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import EmailBox from '@/components/EmailBox';
import { useState } from 'react';
import './animated-text.css'
import React from 'react';

export default function Home() {
  const [openEmailBox, setOpenEmailBox] = useState(false);
  const handleHireMeButton = () => setOpenEmailBox(true);
  const handleCVDownLoad = () => {
    const link = document.createElement('a');

    link.href = `/cv/Rohit_Resume.docx`;
    link.download = 'Rohit_Resume.docx';
    link.click();
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-10 md:mb-0">
        <div className="mb-2 flex flex-col text-start justify-center">
          <span className="lg:text-xl text-lg font-semibold">HELLO</span>
          <span className="font-bold lg:text-3xl text-2xl">
            {' '}
            I AM ROHIT DEY
          </span>
          <div
            className={`lg:text-xl text-lg font-semibold custom-border-b-4 w-fit text-slide`}
          >
            Senior Application Developer
          </div>
          <div className="flex flex-row gap-2  justify-start mt-2">
            <Button
              size="sm"
              className="font-bold"
              onClick={handleHireMeButton}
            >
              HIRE ME
            </Button>
            <Button size="sm" className="font-bold" onClick={handleCVDownLoad}>
              GET CV
            </Button>
          </div>
        </div>
        <ImageCmp imageName="greeting.JPG" alt="greeting pic" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <ImageCmp imageName="introduction.jpeg" alt="introduction pic" />

        <div className="flex flex-col justify-center mb-2">
          <span className="lg:text-2xl text-xl font-bold">LET&apos;S</span>
          <span className="lg:text-2xl text-xl font-bold">INTRODUCE ABOUT</span>
          <span className="lg:text-2xl text-xl font-bold custom-border-b-4 mb-2">
            MYSELF
          </span>
          <ul className="list-disc list-inside">
            <li>
              Dynamic and self-driven Senior Application Developer with
              exceptional quantitative abilities.
            </li>
            <li>Known for conducting thorough and innovative analyses.</li>
            <li>
              Proficient in rapidly acquiring industry-specific knowledge and
              integrating into project teams seamlessly.
            </li>
            <li>
              Consistently ensures successful management and delivery of
              assigned responsibilities.
            </li>
            <li>Adheres closely to project scope and budget constraints.</li>
          </ul>
        </div>
      </div>
      {openEmailBox && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardContent className="p-0">
              <EmailBox onClose={() => setOpenEmailBox(false)} />
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
