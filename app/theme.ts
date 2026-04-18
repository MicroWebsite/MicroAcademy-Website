export const theme = {
  colors: {
    /* ── Brand ────────────────────────────────────────────────── */
    primary: 'var(--primary)',
    primaryDark: 'var(--primary-dark)',
    primaryDarker: 'var(--primary-darker)',
    primaryLight: 'var(--primary-light)',
    primaryMuted: 'var(--primary-muted)',

    secondary: 'var(--secondary)',
    secondaryDark: 'var(--secondary-dark)',
    secondaryMuted: 'var(--secondary-muted)',

    /* ── Surfaces / Backgrounds ───────────────────────────────── */
    bgCream: 'var(--bg-cream)',
    bgCreamLight: 'var(--bg-cream-light)',
    bgCreamAlt: 'var(--bg-cream-alt)',
    bgMuted: 'var(--bg-muted)',
    bgCard: 'var(--bg-card)',
    bgCardAlt: 'var(--bg-card-alt)',
    bgDecor: 'var(--bg-decor)',
    bgInput: 'var(--bg-input)',
    bgInputAlt: 'var(--bg-input-alt)',
    bgInputRow: 'var(--bg-input-row)',
    bgDark: 'var(--bg-dark)',
    bgDarkAlt: 'var(--bg-dark-alt)',
    bgDarkCard: 'var(--bg-dark-card)',
    bgDarkCardHover: 'var(--bg-dark-card-hover)',
    bgWhite: 'var(--bg-white)',
    bgHeader: 'var(--bg-header)',
    bgHeaderMobile: 'var(--bg-header-mobile)',

    /* ── Borders ──────────────────────────────────────────────── */
    border: 'var(--border)',
    borderLight: 'var(--border-light)',
    borderMuted: 'var(--border-muted)',
    borderAlt: 'var(--border-alt)',
    borderSoft: 'var(--border-soft)',
    borderStat: 'var(--border-stat)',

    /* ── Text ─────────────────────────────────────────────────── */
    textDark: 'var(--text-dark)',
    textHeading: 'var(--text-heading)',
    textBody: 'var(--text-body)',
    textBodyAlt: 'var(--text-body-alt)',
    textMuted: 'var(--text-muted)',
    textMutedAlt: 'var(--text-muted-alt)',
    textSubtle: 'var(--text-subtle)',
    textLabel: 'var(--text-label)',
    textLabelAlt: 'var(--text-label-alt)',
    textLabelInput: 'var(--text-label-input)',
    textAccent: 'var(--text-accent)',
    textGold: 'var(--text-gold)',
    textGoldAlt: 'var(--text-gold-alt)',
    textBadge: 'var(--text-badge)',
    textBodyPara: 'var(--text-body-para)',
    textOlive: 'var(--text-olive)',
    textOliveAlt: 'var(--text-olive-alt)',
    textLink: 'var(--text-link)',
    textLinkHover: 'var(--text-link-hover)',
    textPlaceholder: 'var(--text-placeholder)',
    textMutedNav: 'var(--text-muted-nav)',

    /* ── Buttons / CTAs ───────────────────────────────────────── */
    btnPrimary: 'var(--btn-primary)',
    btnPrimaryHover: 'var(--btn-primary-hover)',
    btnGradStart: 'var(--btn-grad-start)',
    btnGradEnd: 'var(--btn-grad-end)',
    btnGradEndAlt: 'var(--btn-grad-end-alt)',
    btnCtaBg: 'var(--btn-cta-bg)',

    /* ── Chatbot ──────────────────────────────────────────────── */
    chatOnline: 'var(--chat-online)',

    /* ── Status badges (recruitment positions) ────────────────── */
    statusFullTimeBg: 'var(--status-full-time-bg)',
    statusFullTimeText: 'var(--status-full-time-text)',
    statusContractBg: 'var(--status-contract-bg)',
    statusContractText: 'var(--status-contract-text)',

    /* ── Testimonial / Quote ──────────────────────────────────── */
    textQuote: 'var(--text-quote)',
    textInfoCard: 'var(--text-info-card)',

    /* ── CTA Section Decorative ───────────────────────────────── */
    ctaCardBg: 'var(--cta-card-bg)',

    /* ── Misc ─────────────────────────────────────────────────── */
    highlightMuted: 'var(--highlight-muted)',
  },

  fonts: {
    manrope: 'var(--font-manrope), Manrope, sans-serif',
    inter: 'var(--font-inter), Inter, sans-serif',
  },
} as const;
