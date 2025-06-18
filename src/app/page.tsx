// import { AnimatedText } from '@/components/AnimatedText';
'use client';
import { Button } from '@/components/ui/button';
import EmailBox from '@/components/EmailBox';
import { useEffect, useState } from 'react';
import './animated-text.css'
import React from 'react';

export default function Home() {
  const [openEmailBox, setOpenEmailBox] = useState(false);
  const handleHireMeButton = () => setOpenEmailBox(true);
  const [animatedWords, setAnimatedWords] = useState<boolean[]>([])
  const words = "Senior Application Developer @ IBM".split(" ")

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      words.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedWords((prev) => {
            const newState = [...prev]
            newState[index] = true
            return newState
          })
        }, index * 300) // 300ms delay between each word
      })
    }, 500) // Initial delay of 500ms

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleCVDownLoad = () => {
    const link = document.createElement('a');

    link.href = `/cv/Rohit_DEY_RESUME.pdf`;
    link.download = 'Rohit_DEY_RESUME.pdf';
    link.click();
  };


  return (
    <>
      <div className="relative z-10 min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-90px)] lg:min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/greeting.JPG')",
            backgroundPosition: "center 30%",
          }}
        >
          {/* Responsive Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 sm:from-black/75 sm:via-black/50 sm:to-black/25 lg:from-black/70 lg:via-black/40 lg:to-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-start pt-8 sm:pt-12 lg:items-center lg:pt-12 min-h-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl space-y-4 sm:space-y-6">
              {/* Responsive Typography */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-none animate-fade-in">
                ROHIT DEY
              </h1>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className={`inline-block mr-2 transition-all duration-700 ease-out ${animatedWords[index] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                      }`}
                  >
                    {word}
                  </span>
                ))}
              </div>
              <div className="flex flex-row gap-2  justify-start mt-2 ">
                <Button
                  size="default"
                  className="text-black font-bold bg-[#22C55E]  hover:bg-[#1ea34d] rounded-lg transition-colors duration-300 text-sm md:text-base animate-fade-in-delayed"
                  onClick={handleHireMeButton}
                >
                  HIRE ME
                </Button>
                <Button size="default" className="text-black font-bold bg-[#22C55E]  hover:bg-[#1ea34d] transition-colors  rounded-lg  duration-300 text-sm md:text-base animate-fade-in-delayed" onClick={handleCVDownLoad}>
                  GET CV
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
      {openEmailBox && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <EmailBox onClose={() => setOpenEmailBox(false)} />
        </div>
      )}
    </>





  );
}
