// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { 
        label: 'Services', 
        href: '/services',
        subLinks: [
            { label: 'Recruitment', href: '/services/recruitment' },
            { label: 'Contract Hiring', href: '/services/contract-hiring' },
            { label: 'Train and Hire', href: '/services/train-and-hire' },
            { label: 'Corporate Training', href: '/services/corporate-training' },
        ]
    },
    { label: 'Freshers drive', href: '/freshers-drive' },
    { label: 'Careers', href: '/careers' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="w-full bg-bg-header border-b border-border relative z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <Link href="/" className="flex items-center shrink-0">
                    <Image
                        src="https://microacademy.net/wp-content/themes/micro19/img/logo.png"
                        alt="MicroAcademy"
                        width={300}
                        height={200}
                        priority
                        className="h-14 w-auto object-contain"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-8 h-full">
                    {navLinks.map((link) => {
                        // For Services we could check pathname but let's keep it simple
                        const isActive = pathname === link.href || (link.subLinks && pathname.startsWith('/services'));
                        
                        if (link.subLinks) {
                            return (
                                <div key={link.href} className="relative group h-full flex items-center shrink-0">
                                    <Link
                                        href={link.href}
                                        className={`relative flex items-center gap-1 text-base font-bold transition-colors pb-1 ${isActive
                                            ? 'text-text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-text-accent'
                                            : 'text-text-dark hover:text-text-accent hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-text-accent'
                                            }`}
                                    >
                                        {link.label}
                                        <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
                                    </Link>
                                    
                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-0 min-w-[220px] bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50">
                                        {link.subLinks.map((subLink) => (
                                            <Link
                                                key={subLink.href}
                                                href={subLink.href}
                                                className={`px-4 py-2.5 text-sm font-semibold hover:bg-bg-header-mobile hover:text-text-accent transition-colors ${pathname === subLink.href ? 'text-text-accent bg-bg-header-mobile' : 'text-text-dark'}`}
                                            >
                                                {subLink.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-base shrink-0 font-bold transition-colors pb-1 flex items-center ${isActive
                                    ? 'text-text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-text-accent'
                                    : 'text-text-dark hover:text-text-accent hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-text-accent'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4 shrink-0">
                    <Link
                        href="/contact"
                        className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-btn-primary text-white text-sm font-semibold hover:bg-btn-primary-hover transition-colors"
                    >
                        Contact us
                    </Link>

                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-0.5 bg-text-dark transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-text-dark transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-text-dark transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-bg-header-mobile border-t border-border px-6 py-4 flex flex-col border-b shadow-md absolute w-full left-0 z-50">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.subLinks && pathname.startsWith('/services'));
                        
                        if (link.subLinks) {
                            return (
                                <div key={link.href} className="flex flex-col border-b border-border py-1">
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className={`text-sm font-medium py-2 flex-grow ${isActive ? 'text-text-accent' : 'text-text-muted-alt'}`}
                                        >
                                            {link.label}
                                        </Link>
                                        <button 
                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                            className="px-2 py-2 flex items-center justify-center shrink-0"
                                        >
                                            <ChevronDown className={`w-5 h-5 transition-transform text-text-muted-alt ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div>
                                    
                                    {mobileServicesOpen && (
                                        <div className="flex flex-col pl-4 pb-2 gap-1 mt-1 border-l-2 border-border ml-2">
                                            {link.subLinks.map((subLink) => (
                                                <Link
                                                    key={subLink.href}
                                                    href={subLink.href}
                                                    onClick={() => setMenuOpen(false)}
                                                    className={`text-[13px] py-1.5 font-medium ${pathname === subLink.href ? 'text-text-accent font-bold' : 'text-text-muted'}`}
                                                >
                                                    {subLink.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`text-sm font-medium py-3 border-b border-border ${isActive ? 'text-text-accent' : 'text-text-muted-alt'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-btn-primary text-white text-sm font-semibold hover:bg-btn-primary-hover transition-colors"
                    >
                        Contact us
                    </Link>
                </div>
            )}
        </header>
    );
}