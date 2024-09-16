'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './ModeToggle';
import '@/app/globals.css';
import { Card, CardContent } from './ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import LoadingBar from 'react-top-loading-bar';

import { Linkedin, Phone, Mail, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

import { toast } from '@/hooks/use-toast';

import { Button } from './ui/button';
import EmailBox from './EmailBox';

export const NavBar = () => {
  const pathName = usePathname();
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    setLoading(30);
    setTimeout(() => setLoading(60), 100);
    setTimeout(() => setLoading(100), 500);
  }, [pathName]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(0);
    }, 50);
  }, []);

  const [openEmailBox, setOpenEmailBox] = useState(false);
  const [showSlideBar, setShowSlideBar] = useState(false);

  const closeSlideBar = () => setShowSlideBar(false);
  const openSlideBar = () => setShowSlideBar(true);
  const handleEmail = () => {
    setShowSlideBar(false);
    setOpenEmailBox(true);
  };
  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/rohit-dey-7564a0123', '_blank');
    setShowSlideBar(false);
  };
  const handlePhoneClick = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '';
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        toast({
          title: '',
          description: (
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span>Successfully copied: {phoneNumber}</span>
            </div>
          ),
          duration: 2000,
        });
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
    setShowSlideBar(false);
  };

  return (
    <div>
      {' '}
      <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10 ">
        <LoadingBar
          progress={loading}
          color="hsl(142.09deg 70.56% 45.29%)"
          onLoaderFinished={() => setLoading(0)}
        />
        <div className="container mx-auto flex justify-between items-center">
          <Link href={'/'}>
            <Avatar>
              <AvatarImage src="./title.jpg" alt="Rohit Dey" />
              <AvatarFallback>RD</AvatarFallback>
            </Avatar>
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              href="/"
              className="hover:scale-105 hover:font-semibold transition-transform duration-300 hover:border-b-2 hover:border-green-500"
            >
              {' '}
              Home
            </Link>
            <Link
              href="/about"
              className="hover:scale-105 hover:font-semibold transition-transform duration-300 hover:border-b-2 hover:border-green-500"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:scale-105 hover:font-semibold transition-transform duration-300 hover:border-b-2 hover:border-green-500"
            >
              Services
            </Link>
            <Link
              href="/skills"
              className="hover:scale-105 hover:font-semibold transition-transform duration-300 hover:border-b-2 hover:border-green-500"
            >
              Skills
            </Link>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-[#22C55E]  hover:bg-[#1ea34d] transition-colors">
                    Contact Me
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem
                    onClick={handleLinkedIn}
                    className="hover:bg-[#22C55E]  focus:bg-[#22C55E] focus:text-black"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    <span>LinkedIn</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handlePhoneClick}
                    className="hover:bg-[#22C55E]  focus:bg-[#22C55E] focus:text-black"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    <span>Phone</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleEmail}
                    className="hover:bg-[#22C55E]  focus:bg-[#22C55E] focus:text-black"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ModeToggle />
          </div>
        </div>
        <div className="md:hidden absolute bottom-4 right-4">
          <Sheet>
            <SheetTrigger>
              <div className="hamburger-icon" onClick={openSlideBar}>
                ☰
              </div>
            </SheetTrigger>
            {showSlideBar && (
              <SheetContent className="md:hidden">
                <div className="flex flex-col items-center p-4">
                  <ModeToggle />
                  <div className="flex flex-col space-y-2 mt-4 items-center">
                    <Link
                      onClick={closeSlideBar}
                      href="/"
                      className="hover:border-b-2 hover:border-green-500"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      onClick={closeSlideBar}
                      className="hover:border-b-2 hover:border-green-500"
                    >
                      About
                    </Link>
                    <Link
                      href="/services"
                      onClick={closeSlideBar}
                      className="hover:border-b-2 hover:border-green-500"
                    >
                      Services
                    </Link>
                    <Link
                      href="/skills"
                      onClick={closeSlideBar}
                      className="hover:border-b-2 hover:border-green-500"
                    >
                      Skills
                    </Link>
                    <Button variant="ghost" onClick={handlePhoneClick}>
                      <Phone className="mr-2 h-4 w-4" />
                      <span>Phone</span>
                    </Button>
                    <Button variant="ghost" onClick={handleLinkedIn}>
                      <Linkedin className="mr-2 h-4 w-4" />
                      <span>LinkedIn</span>
                    </Button>
                    <Button variant="ghost" onClick={handleEmail}>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            )}
          </Sheet>
        </div>
      </nav>{' '}
      {openEmailBox && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardContent className="p-0">
              <EmailBox onClose={() => setOpenEmailBox(false)} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
