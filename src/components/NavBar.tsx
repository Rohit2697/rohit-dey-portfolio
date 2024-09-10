'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './ModeToggle';
import '@/app/globals.css';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import LoadingBar from 'react-top-loading-bar';
import CallIcon from './icons/Call';
import Email from './icons/Email';
import FacebookIcon from './icons/Facebook';
import LinkedInIcon from './icons/Linkedin';
import { useEffect, useState } from 'react';
import { SuccessAlert } from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

import {Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
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

  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [alert, setalert] = useState({ title: '', description: '' });
  useEffect(() => {
    if (successAlert || errorAlert) {
      setTimeout(() => {
        if (successAlert) setSuccessAlert(false);
        if (errorAlert) setErrorAlert(false);
      }, 3000);
    }
  }, [successAlert, errorAlert]);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10 ">
      <LoadingBar
        progress={loading}
        color="hsl(142.09deg 70.56% 45.29%)"
        onLoaderFinished={() => setLoading(0)}
      />
      {successAlert && (
        <SuccessAlert title={alert.title} description={alert.description} />
      )}
      {errorAlert && (
        <ErrorAlert title={alert.title} description={alert.description} />
      )}
      <div className="container mx-auto flex justify-between items-center">
        <Link href={'/'}>
          <Avatar>
            <AvatarImage src="./navbar.jpeg" alt="Rohit Dey" />
            <AvatarFallback>RD</AvatarFallback>
          </Avatar>
        </Link>
        <div className="hidden lg:flex space-x-4 items-center">
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
          <div className="hover:scale-105 hover:font-semibold transition-transform duration-300 hover:border-b-2 hover:border-green-500">
            <HoverCard>
              <HoverCardTrigger>Contact Me</HoverCardTrigger>
              <HoverCardContent>
                <div className="flex justify-center gap-6">
                  <CallIcon
                    setAlert={setalert}
                    setSuccessAlert={setSuccessAlert}
                    setErrorAlert={setErrorAlert}
                  />
                  <Link href="/">
                    <FacebookIcon />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/rohit-dey-7564a0123"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </Link>
                  <Email
                    setAlert={setalert}
                    setSuccessAlert={setSuccessAlert}
                    setErrorAlert={setErrorAlert}
                  />
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <ModeToggle />
        </div>
      </div>
      <div className="lg:hidden absolute bottom-4 right-4">
        <Sheet>
          <SheetTrigger>
            <div className="hamburger-icon">☰</div>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col items-center p-4">
              <ModeToggle />
              <div className="flex flex-col space-y-2 mt-4 items-center">
                <Link
                  href="/"
                  className="hover:border-b-2 hover:border-green-500"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:border-b-2 hover:border-green-500"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="hover:border-b-2 hover:border-green-500"
                >
                  Services
                </Link>
                <Link
                  href="/skills"
                  className="hover:border-b-2 hover:border-green-500"
                >
                  Skills
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger>Contact Me</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <div className="flex justify-between items-center gap-2">
                        <CallIcon
                          setAlert={setalert}
                          setSuccessAlert={setSuccessAlert}
                          setErrorAlert={setErrorAlert}
                        />
                        <Link href="/">
                          <FacebookIcon />
                        </Link>
                        <Link
                          href="https://www.linkedin.com/in/rohit-dey-7564a0123"
                          target="_blank"
                        >
                          <LinkedInIcon />
                        </Link>

                        <Email
                          setAlert={setalert}
                          setSuccessAlert={setSuccessAlert}
                          setErrorAlert={setErrorAlert}
                        />
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
