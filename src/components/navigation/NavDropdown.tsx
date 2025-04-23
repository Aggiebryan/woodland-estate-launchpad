
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface NavDropdownProps {
  label: string;
  items: Array<{
    label: string;
    href: string;
  }>;
}

const NavDropdown = ({ label, items }: NavDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="px-3 py-2 text-woodlands-gold hover:text-woodlands-purple hover:bg-woodlands-gold/20 font-body flex items-center gap-1"
        >
          {label}
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white w-52">
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link 
              to={item.href} 
              className="w-full px-4 py-2 hover:bg-woodlands-cream text-woodlands-purple"
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;
