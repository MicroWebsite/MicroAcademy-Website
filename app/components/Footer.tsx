// src/components/Footer.tsx
import Link from 'next/link';

const footerLinks = {
  Solutions: [
    { label: 'Corporate Training', href: '/corporate-training' },
    { label: 'Recruitment', href: '/recruitment' },
    { label: 'Digital Upskilling', href: '/digital-upskilling' },
    { label: 'Strategy', href: '/strategy' },
  ],
  Resources: [
    { label: 'Insights', href: '/insights' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
    { label: 'Support', href: '/support' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Ethics', href: '/ethics' },
  ],
};

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5F4EE]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#1a1a1a]">
              Micro Academy
            </span>
            <p className="text-sm text-[#5a5a5a] leading-relaxed max-w-50">
              Curating the future of workforce intelligence with precision and intent.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <span className="text-sm font-semibold text-[#1a1a1a]">
                {category}
              </span>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E2E0D4]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#8a8a8a] text-center sm:text-left">
            © 2024 Micro Academy. Curating the future of workforce intelligence.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}