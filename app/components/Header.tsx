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
        <header className="w-full bg-[#FAF9F3] border-b border-[#E2E0D4] relative z-50">
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
                                            ? 'text-[#6B6B00] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#6B6B00]'
                                            : 'text-[#1B1C19] hover:text-[#6B6B00]'
                                            }`}
                                    >
                                        {link.label}
                                        <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
                                    </Link>
                                    
                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-0 min-w-[220px] bg-white border border-[#E2E0D4] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50">
                                        {link.subLinks.map((subLink) => (
                                            <Link
                                                key={subLink.href}
                                                href={subLink.href}
                                                className={`px-4 py-2.5 text-sm font-semibold hover:bg-[#F5F4EC] hover:text-[#6B6B00] transition-colors ${pathname === subLink.href ? 'text-[#6B6B00] bg-[#F5F4EC]' : 'text-[#1B1C19]'}`}
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
                                className={`relative text-base shrink-0 font-bold transition-colors pb-1 flex items-center h-full ${isActive
                                    ? 'text-[#6B6B00] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#6B6B00]'
                                    : 'text-[#1B1C19] hover:text-[#6B6B00]'
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
                        className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#5C5E00] text-white text-sm font-semibold hover:bg-[#4a4c00] transition-colors"
                    >
                        Contact us
                    </Link>

                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-0.5 bg-[#1a1a1a] transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-[#1a1a1a] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-[#1a1a1a] transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-[#F5F4EC] border-t border-[#E2E0D4] px-6 py-4 flex flex-col border-b shadow-md absolute w-full left-0 z-50">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.subLinks && pathname.startsWith('/services'));
                        
                        if (link.subLinks) {
                            return (
                                <div key={link.href} className="flex flex-col border-b border-[#E2E0D4] py-1">
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className={`text-sm font-medium py-2 flex-grow ${isActive ? 'text-[#6B6B00]' : 'text-[#3a3a3a]'}`}
                                        >
                                            {link.label}
                                        </Link>
                                        <button 
                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                            className="px-2 py-2 flex items-center justify-center shrink-0"
                                        >
                                            <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} style={{ color: '#3a3a3a' }} />
                                        </button>
                                    </div>
                                    
                                    {mobileServicesOpen && (
                                        <div className="flex flex-col pl-4 pb-2 gap-1 mt-1 border-l-2 border-[#E2E0D4] ml-2">
                                            {link.subLinks.map((subLink) => (
                                                <Link
                                                    key={subLink.href}
                                                    href={subLink.href}
                                                    onClick={() => setMenuOpen(false)}
                                                    className={`text-[13px] py-1.5 font-medium ${pathname === subLink.href ? 'text-[#6B6B00] font-bold' : 'text-[#5a5a5a]'}`}
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
                                className={`text-sm font-medium py-3 border-b border-[#E2E0D4] ${isActive ? 'text-[#6B6B00]' : 'text-[#3a3a3a]'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#5C5E00] text-white text-sm font-semibold hover:bg-[#4a4c00] transition-colors"
                    >
                        Contact us
                    </Link>
                </div>
            )}
        </header>
    );
}