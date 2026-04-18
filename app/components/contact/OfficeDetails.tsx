export default function OfficeDetails() {
  const channels = [
    {
      id: 'hq',
      label: 'Registered Office',
      value: (
        <>
          #189, Amar Jyothi Layout,
          <br />
          Domlur Ring Road,
          <br />
          Bangalore - 71, Karnataka
        </>
      ),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 'phone',
      label: 'Call Us',
      value: (
        <a
          href="tel:+918025358182"
          className="hover:text-primary transition-colors"
        >
          +91 080-25358182 / 92
        </a>
      ),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      id: 'email',
      label: 'Email Us',
      value: (
        <a
          href="mailto:info@microacademy.net"
          className="hover:text-primary transition-colors"
        >
          info@microacademy.net
        </a>
      ),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center justify-center text-center lg:items-start lg:text-left py-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-text-dark">
        Direct Channels
      </h2>

      <div className="flex flex-col gap-8 w-full max-w-sm lg:max-w-none">
        {channels.map((ch) => (
          <div key={ch.id} className="flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-5 group">
            {/* Icon badge */}
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-btn-primary text-white flex items-center justify-center shadow-lg shadow-btn-primary/20 group-hover:scale-110 transition-all duration-300">
              {ch.icon}
            </div>
            {/* Text */}
            <div className="flex flex-col gap-1 lg:text-left">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                {ch.label}
              </span>
              <span className="text-base text-text-muted-alt leading-relaxed font-medium">
                {ch.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

