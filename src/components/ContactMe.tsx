
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Linkedin, Phone, Mail } from 'lucide-react';

// Import the EmailBox component we created earlier

export default function ContactMe() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-[#22C55E]  hover:bg-[#1ea34d] transition-colors">
            Contact Me
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem className="hover:bg-[#22C55E]  focus:bg-[#22C55E] focus:text-black">
            <Linkedin className="mr-2 h-4 w-4" />
            <span>LinkedIn</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-[#22C55E]  focus:bg-[#22C55E] focus:text-black">
            <Phone className="mr-2 h-4 w-4" />
            <span>Phone</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-[#22C55E]  focus:bg-[#22C55E] focus:text-black">
            <Mail className="mr-2 h-4 w-4" />
            <span>Email</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
