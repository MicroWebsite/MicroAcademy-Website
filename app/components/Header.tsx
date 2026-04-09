// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Corporate Training', href: '/corporate-training' },
    { label: 'Train & Hire', href: '/train-and-hire' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="w-full bg-[#FAF9F3] border-b border-[#E2E0D4]">
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

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-base font-bold transition-colors pb-1 ${isActive
                                    ? 'text-[#6B6B00] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#6B6B00]'
                                    : 'text-[#1B1C19] hover:text-[#6B6B00]'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/consultation"
                        className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#5C5E00] text-white text-sm font-semibold hover:bg-[#4a4c00] transition-colors"
                    >
                        Consultation
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
                <div className="md:hidden bg-[#F5F4EC] border-t border-[#E2E0D4] px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`text-sm font-medium py-1 border-b border-[#E2E0D4] ${isActive ? 'text-[#6B6B00]' : 'text-[#3a3a3a]'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/consultation"
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#5C5E00] text-white text-sm font-semibold hover:bg-[#4a4c00] transition-colors"
                    >
                        Consultation
                    </Link>
                </div>
            )}
        </header>
    );
}