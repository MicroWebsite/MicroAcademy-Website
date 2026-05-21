import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Freshers drive", href: "/freshers-drive" },
  { label: "Careers", href: "/careers" },
  // { label: "Contact us", href: "/contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/microacademydomlur/",
    icon: "insta",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/microacademy.domlur.75",
    icon: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/micro-academy-i-.pvt.ltd/",
    icon: "linkedin",
  },
  {
    label: "Twitter",
    href: "https://x.com/academy_micro",
    icon: "twitter",
  },
];

const serviceLinks = [
  { label: "Direct / Lateral Hire", href: "/services/recruitment" },
  { label: "Contract Hiring", href: "/services/contract-hiring" },
  { label: "Train and Hire", href: "/services/train-and-hire" },
  { label: "Corporate Training", href: "/services/corporate-training" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Logo & Address */}
        <div className="flex flex-col gap-4 items-start text-left font-['Inter']">
          <Image
            src="/assets/common/microacademy-logo.png"
            alt="MicroAcademy Logo"
            width={220}
            height={120}
            priority
            className="h-16 lg:h-20 w-auto object-contain"
          />
          <span className="text-base font-bold tracking-[0.2em] uppercase text-text-dark">
            Micro Academy
          </span>
          <address className="not-italic text-sm text-text-muted leading-relaxed">
            #189, Amar Jyothi Layout,
            <br />
            Domlur Ring Road, Bangalore -71, India.
            <br />
            <span className="block mt-2">
              Call Us:{" "}
              <a
                href="tel:+918025358182"
                className="hover:text-primary transition-colors hover:font-bold"
              >
                +91 080-25358182 / 25359192
              </a>
            </span>
            <span className="block">
              Email Us:{" "}
              <a
                href="mailto:info@microacademy.net"
                className="hover:text-primary transition-colors hover:font-bold"
              >
                info@microacademy.net
              </a>
            </span>
          </address>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-5">
          <span className="text-sm font-extrabold tracking-widest text-text-dark uppercase">
            Quick Links
          </span>
          <ul className="flex flex-col gap-3" aria-label="Quick links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text-dark hover:font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services (Replaced Legal) */}
        <div className="flex flex-col gap-5">
          <span className="text-sm font-extrabold tracking-widest text-text-dark uppercase">
            Our Services
          </span>
          <ul className="flex flex-col gap-3" aria-label="Our services">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text-dark hover:font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect with Us */}
        <div className="flex flex-col gap-5">
          <span className="text-sm font-extrabold tracking-widest text-text-dark uppercase">
            Connect with Us
          </span>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text-muted hover:text-primary text-2xl transition-all hover:scale-110"
              >
                {link.icon === "insta" && (
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.87.312 4.1.54c-.8.24-1.48.56-2.16 1.24-.68.68-1 1.36-1.24 2.16-.228.77-.412 1.67-.47 2.95C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.242 2.18.47 2.95.24.8.56 1.48 1.24 2.16.68.68 1.36 1 2.16 1.24.77.228 1.67.412 2.95.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.18-.242 2.95-.47.8-.24 1.48-.56 2.16-1.24.68-.68 1-1.36 1.24-2.16.228-.77.412-1.67.47-2.95.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.058-1.28-.242-2.18-.47-2.95-.24-.8-.56-1.48-1.24-2.16-.68-.68-1.36-1-2.16-1.24-.77-.228-1.67-.412-2.95-.47C15.668.012 15.264 0 12 0z" />
                    <path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                  </svg>
                )}
                {link.icon === "facebook" && (
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24 l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                )}
                {link.icon === "linkedin" && (
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                  </svg>
                )}
                {link.icon === "twitter" && (
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-text-subtle text-center sm:text-left">
            © 2026 Micro Academy. Curating the future of workforce intelligence.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-bold text-text-muted hover:text-text-dark transition-colors uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
