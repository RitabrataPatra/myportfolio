'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const navigation = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];
export const myname = 'Ritabrata Patra';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  return (
    <header className="fixed w-full z-50 navbar-blur border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a 
            href="#home" 
            className="-m-1.5 p-1.5 text-2xl font-bold text-white"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            {myname}
          </a>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-sm font-semibold leading-6 text-gray-400 hover:text-white/80 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden navbar-blur">
          <div className="space-y-1 px-6 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  scrollToSection(e, item.id);
                  setMobileMenuOpen(false);
                }}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}
            <div className="py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}