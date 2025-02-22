'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Home, Info, Calculator, PlayCircle } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-[#00adbb]" />
            <span className="font-bold text-xl text-[#1d4044]">Better</span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-8">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="font-medium nav-link">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="font-medium nav-link">
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/calculator" legacyBehavior passHref>
                  <NavigationMenuLink className="font-medium nav-link">
                    Mortgage Calculator
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Link href="/start">
              <Button className="bg-[#00adbb] hover:bg-[#008c98] text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}