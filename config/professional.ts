// ─────────────────────────────────────────────────────────────────────────────
// PROFESSIONAL LANDING PAGE — CONTENT CONFIGURATION
//
// This is the ONLY file you need to change to adapt this template to any
// profession (doctor, lawyer, engineer, consultant, executive coach, etc.)
//
// Structure and styles are defined in components — they never change.
// Content and copy live here — this is where your customization lives.
// ─────────────────────────────────────────────────────────────────────────────

export const config = {

  // ── META / SEO ───────────────────────────────────────────────────────────
  meta: {
    name: 'Sarah Mitchell',
    title: 'Strategic Business Consultant | Revenue Growth Specialist',
    description:
      'I help mid-market CEOs unlock sustainable revenue growth through data-driven operational strategy. Book a free 30-minute strategy call.',
    url: 'https://yourdomain.com',
    ogImage: '/og-image.jpg',
  },

  // ── NAVIGATION ───────────────────────────────────────────────────────────
  nav: {
    logo: 'Sarah Mitchell',
    logoSuffix: 'Consulting',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Results', href: '#results' },
      { label: 'Process', href: '#process' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: { label: 'Book a Free Call', href: '#contact' },
  },

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: 'Strategic Business Consultant',
    // Use \n to force a line break in the headline
    headline: 'Turn Operational Chaos Into\nPredictable Revenue Growth',
    subheadline:
      'I help mid-market CEOs and founders identify hidden growth levers, eliminate operational drag, and build the systems that scale — without burning out their teams.',
    primaryCta: { label: 'Book Your Free Strategy Call', href: '#contact' },
    secondaryCta: { label: 'See Client Results', href: '#results' },
    socialProof: {
      stat1: { value: '40+', label: 'Companies Transformed' },
      stat2: { value: '$200M+', label: 'Revenue Unlocked' },
      stat3: { value: '94%', label: 'Client Retention Rate' },
    },
    // Creates mild urgency without being spammy
    availability: 'Currently accepting 3 new clients for Q3 2026',
  },

  // ── TRUST BAR ────────────────────────────────────────────────────────────
  // Logos of companies client worked at, publications featured in, or
  // professional body memberships. Shown immediately below the hero.
  trustBar: {
    eyebrow: 'Trusted by leaders at',
    logos: [
      { name: 'McKinsey & Co.', abbr: 'MCK' },
      { name: 'Goldman Sachs', abbr: 'GS' },
      { name: 'Deloitte', abbr: 'DLT' },
      { name: 'Harvard Business Review', abbr: 'HBR' },
      { name: 'Forbes', abbr: 'FRB' },
    ],
    credentials: [
      'MBA, Harvard Business School',
      'Certified Management Consultant',
      '15+ Years Experience',
      'Member, Forbes Business Council',
    ],
  },

  // ── ABOUT ────────────────────────────────────────────────────────────────
  about: {
    eyebrow: 'About Sarah',
    headline: 'Built for the problems\nthat keep you up at 2AM',
    // Each string is a paragraph
    body: [
      'I spent a decade inside three Fortune 500 companies watching brilliant leaders hit invisible ceilings — not from lack of talent, but from systems that couldn\'t scale with their ambition.',
      'In 2012, I founded my practice specifically to solve this problem. Today, I work exclusively with mid-market CEOs and founders who are ready to build companies that grow without constantly depending on them.',
      'My approach combines hard operational data with the strategic clarity that only comes from 15 years of pattern recognition across 40+ engagements.',
    ],
    credentials: [
      { label: 'MBA', sublabel: 'Harvard Business School' },
      { label: 'CMC', sublabel: 'Certified Management Consultant' },
      { label: '15+', sublabel: 'Years in Strategy' },
      { label: '40+', sublabel: 'Successful Engagements' },
    ],
    // Replace with your actual professional photo
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=700&fit=crop&crop=face',
    imageAlt: 'Sarah Mitchell, Strategic Business Consultant',
  },

  // ── SERVICES ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: 'How I Help',
    headline: 'Three ways to work together',
    subheadline:
      'Each engagement is tailored to your specific situation — no cookie-cutter frameworks, no junior consultants on your account.',
    items: [
      {
        // Use lucide-react icon names: https://lucide.dev/icons
        icon: 'Target',
        title: 'Revenue Growth Strategy',
        description:
          'A complete diagnostic of your growth model — identifying what\'s working, what\'s leaking, and where your highest-leverage opportunities are hiding.',
        outcomes: [
          'Clear 90-day growth roadmap',
          'Identified revenue leaks (avg. 23% of revenue)',
          'Prioritized initiative stack',
          'Implementation support included',
        ],
        investment: 'Starting at $8,500',
        duration: '4–6 weeks',
        badge: null,
      },
      {
        icon: 'Zap',
        title: 'Operational Excellence Program',
        description:
          'A hands-on 90-day engagement to rebuild your core operational systems, eliminate bottlenecks, and give your team the clarity to execute without you.',
        outcomes: [
          'Full operational audit & redesign',
          'Team accountability systems',
          'KPI dashboards and reporting',
          'Monthly strategy sessions',
        ],
        investment: 'Starting at $18,000',
        duration: '90 days',
        badge: 'Most Popular',
      },
      {
        icon: 'Users',
        title: 'Fractional CSO',
        description:
          'On-demand strategic leadership — your part-time Chief Strategy Officer. I sit in your leadership meetings, challenge assumptions, and keep strategy connected to execution.',
        outcomes: [
          'Weekly strategic advisory sessions',
          'Board-level reporting & prep',
          'Team coaching & mentorship',
          'Ongoing market analysis',
        ],
        investment: 'Starting at $6,500/mo',
        duration: '6-month minimum',
        badge: null,
      },
    ],
  },

  // ── RESULTS ──────────────────────────────────────────────────────────────
  results: {
    eyebrow: 'Client Results',
    headline: 'Outcomes, not promises',
    stats: [
      { value: '$200M+', label: 'Total client revenue generated' },
      { value: '3.2×', label: 'Average ROI on engagement fee' },
      { value: '6 wks', label: 'Average time to first visible result' },
    ],
    caseStudies: [
      {
        company: 'TechScale Inc.',
        industry: 'B2B SaaS',
        challenge:
          'Revenue had plateaued at $8M ARR for 18 months despite heavy sales investment. The founder was working 70-hour weeks and still losing deals.',
        result:
          'Identified a fundamental positioning mismatch. Repositioned the ICP, rebuilt the sales motion, and within 6 months they crossed $14M ARR.',
        metric: '+$6M ARR',
        metricLabel: 'in 6 months',
      },
      {
        company: 'MedGroup Holdings',
        industry: 'Healthcare Services',
        challenge:
          'Rapid acquisition growth created operational chaos — 3 different EHR systems, unclear accountability, and declining EBITDA margins despite revenue growth.',
        result:
          'Consolidated operations, installed a unified reporting layer, and built a cross-site management team. EBITDA improved by 11 points in 12 months.',
        metric: '+11pts',
        metricLabel: 'EBITDA improvement',
      },
    ],
  },

  // ── TESTIMONIALS ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: 'What Clients Say',
    headline: 'Results you can measure.\nWords you can trust.',
    items: [
      {
        quote:
          'Sarah didn\'t just hand us a report — she fundamentally changed how we think about our business. Six months later, we\'ve grown 40% and I\'m working 20 hours less per week.',
        name: 'James Thornton',
        title: 'CEO',
        company: 'TechScale Inc.',
        result: '40% revenue growth in 6 months',
        avatar: 'https://ui-avatars.com/api/?name=James+Thornton&background=0F172A&color=fff&size=128',
      },
      {
        quote:
          'The ROI was measurable within 8 weeks. We identified $1.2M in operational savings we didn\'t know we were leaking. Best investment we\'ve made in 5 years.',
        name: 'Dr. Linda Park',
        title: 'Managing Partner',
        company: 'Park & Associates',
        result: '$1.2M in recovered operational value',
        avatar: 'https://ui-avatars.com/api/?name=Linda+Park&background=0F172A&color=fff&size=128',
      },
      {
        quote:
          'I was skeptical of consultants before this. Sarah\'s approach is different — she gets in the weeds with you, and the accountability is real. We\'ve scaled 3× in 14 months.',
        name: 'Marcus Williams',
        title: 'Founder & CEO',
        company: 'Meridian Capital Group',
        result: '3× revenue growth in 14 months',
        avatar: 'https://ui-avatars.com/api/?name=Marcus+Williams&background=0F172A&color=fff&size=128',
      },
    ],
  },

  // ── PROCESS ──────────────────────────────────────────────────────────────
  process: {
    eyebrow: 'How It Works',
    headline: 'From first call to\nmeasurable results',
    subheadline:
      'A structured process that respects your time and delivers clarity at every stage.',
    steps: [
      {
        number: '01',
        title: 'Strategy Call',
        description:
          'A focused 30-minute call to understand your situation, goals, and whether we\'re a fit. No sales pressure — just an honest conversation.',
        duration: '30 min',
      },
      {
        number: '02',
        title: 'Deep Diagnostic',
        description:
          'I audit your business end-to-end — financials, operations, team, market position — to identify exactly where the leverage is.',
        duration: 'Week 1–2',
      },
      {
        number: '03',
        title: 'Strategic Roadmap',
        description:
          'You receive a clear, prioritized action plan with the specific initiatives that will drive the biggest results in the shortest time.',
        duration: 'Week 3',
      },
      {
        number: '04',
        title: 'Implementation & Results',
        description:
          'We execute together. I\'m in the room as your team implements, adjusting in real time as we learn what works.',
        duration: 'Ongoing',
      },
    ],
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: 'Common Questions',
    headline: 'Everything you need to know\nbefore booking a call',
    items: [
      {
        question: 'Is this right for my business?',
        answer:
          'My engagements are best suited for companies between $2M and $50M in annual revenue experiencing a growth plateau, operational friction, or strategic uncertainty. If you\'re outside this range, I\'ll still take the call — and if I\'m not the right fit, I\'ll point you toward someone who is.',
      },
      {
        question: 'How long before I see results?',
        answer:
          'Most clients see the first measurable impact within 6–8 weeks — typically a revenue insight, a cost reduction, or an operational improvement that pays for itself. The full transformation typically takes 90–180 days depending on scope.',
      },
      {
        question: 'What does the investment include?',
        answer:
          'Every engagement includes direct access to me (not a junior associate), documented deliverables, and accountability check-ins. Pricing is transparent — starting prices are listed in the services section, and the final scope is agreed before we begin. No surprise fees.',
      },
      {
        question: 'How is this different from a traditional consulting firm?',
        answer:
          'Traditional firms send junior analysts and spread partners across 20 accounts. With me, you get senior-level thinking, direct access, and an advisor genuinely invested in your outcome — not a billable-hour quota.',
      },
      {
        question: 'What if the engagement doesn\'t deliver?',
        answer:
          'I use a milestone-based structure. If we reach the first milestone and you don\'t feel the engagement is delivering value, we have an honest conversation — including a full or partial refund if the work hasn\'t met the agreed standard. I\'ve never had to do this, but the policy exists because I stand behind my work.',
      },
    ],
  },

  // ── CONTACT / BOOKING ────────────────────────────────────────────────────
  contact: {
    eyebrow: "Let's Talk",
    headline: 'Ready to scale without\nburning out your team?',
    subheadline:
      'Book a free 30-minute strategy call. We\'ll talk about your situation, your goals, and whether I can help. No pitch, no pressure.',
    availability: 'Next available slot: June 15, 2026',
    responseTime: 'I respond to every inquiry within 24 hours',
    // Optional: replace the form with a Calendly embed URL
    // calendlyUrl: 'https://calendly.com/yourusername/strategy-call',
    revenueOptions: [
      'Under $1M',
      '$1M – $5M',
      '$5M – $20M',
      '$20M – $50M',
      '$50M+',
    ],
  },

  // ── FOOTER ───────────────────────────────────────────────────────────────
  footer: {
    tagline: 'Strategic clarity for leaders serious about growth.',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
    ],
    copyright: '© 2026 Sarah Mitchell Consulting. All rights reserved.',
  },
}

export type Config = typeof config
