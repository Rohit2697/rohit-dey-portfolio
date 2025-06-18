'use client';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import '@/app/globals.css';
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
    setSelected(pathName?.split('/')[1] || 'Home')
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
  const [selected, setSelected] = useState(pathName?.split('/')[1] || 'Home')
  const closeSideBar = () => {
    setShowSlideBar(false);
  }
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
  const small_screen = {
    fn: () => {

      closeSideBar()

    },
    selectedClass_small: "bg-green-500 p-2 rounded-full text-black font-bold",

    deselect_small: ""
  }
  const big_screen = {
    selected_Big: "text-lg text-green-500",
    deSelect_big: "text-lg text-white hover:text-green-500 transition-colors"
  }
  const navItems = [{
    "nav_item": "Home",
    "link": "/",

  },
  {
    "nav_item": "About",
    "link": "/about",

  },
  {
    "nav_item": "Services",
    "link": "/services",

  },
  {
    "nav_item": "Skills",
    "link": "/skills",
  }
  ]

  return (
    <div>
      {' '}
      <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur  z-10 bg-black">
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

            {navItems.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  className={selected.toLocaleLowerCase() === item.nav_item.toLowerCase()
                    ? big_screen.selected_Big :
                    big_screen.deSelect_big}
                  key={index}
                >
                  {item.nav_item}
                </Link>
              )
            })}

            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className=' text-lg text-white hover:text-green-500 transition-colors'>
                  Contact me
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-black text-wihite border-black">
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
              <SheetContent className="md:hidden bg-black text-wihite border-black">
                <div className="flex flex-col items-center p-4">

                  <div className="flex flex-col space-y-2 mt-4 items-center">
                    {navItems.map((item, index) => {
                      return (
                        <Link
                          key={index}
                          onClick={small_screen.fn}
                          href={item.link}
                          className={selected.toLowerCase() == item.nav_item.toLowerCase() ?
                            small_screen.selectedClass_small : small_screen.deselect_small}
                        >
                          {item.nav_item}
                        </Link>
                      )
                    })}

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
          <EmailBox onClose={() => setOpenEmailBox(false)} />
        </div>
      )}
    </div>
  );
};
