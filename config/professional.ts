// All the words, numbers and images on the page live in this file.
// Change it to retarget the template to another professional.
//
// Developer note: the name, businesses, quotes and figures below are placeholders.
// Replace them before publishing, and only publish figures you can trace to a real job.
// Hero photo: Nguyễn Hiệp on Unsplash (free licence, no attribution required).

export const config = {
  meta: {
    name: 'Sarah Mitchell',
    title: 'Sarah Mitchell | Operations consultant for wholesale and distribution businesses',
    description:
      'Sarah Mitchell helps owners of wholesale and distribution businesses find where orders slow down and fix it with their own team. Book a free 30-minute call.',
    // Set NEXT_PUBLIC_SITE_URL in production so link previews use absolute URLs.
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  },

  nav: {
    wordmark: 'Sarah Mitchell',
    descriptor: 'Operations consulting',
    links: [
      { label: 'The work', href: '#results' },
      { label: 'Services', href: '#services' },
      { label: 'How it runs', href: '#process' },
      { label: 'Questions', href: '#faq' },
    ],
    cta: { label: 'Book a call', href: '#contact' },
  },

  hero: {
    headline: "Late orders, wrong stock counts, and you're the only one who knows why.",
    sub: "I'm Sarah Mitchell. I find where your orders slow down and fix it with your own team. Then I write down how, so it keeps working when you're not there.",
    cta: { label: 'Book a 30-minute call', href: '#contact' },
    secondary: { label: 'See three past jobs', href: '#results' },
    note: 'Taking two new clients this quarter.',
    image: {
      src: '/images/hero.jpg',
      width: 1600,
      height: 2400,
      alt: 'A woman in a striped top working through papers at a table with a pen, seen from behind. Black and white photograph.',
    },
  },

  need: {
    heading: 'How it usually shows up',
    items: [
      'A customer rings to ask where their order is, and nobody can answer without walking the floor.',
      'The system says you have 40 of something. The shelf has 12.',
      'Dispatch runs well until one particular supervisor is on leave.',
      "You've bought software for this twice. Both times it got used for a month.",
    ],
  },

  about: {
    heading: "Who you'd be working with",
    body: [
      'I spent eleven years in dispatch and then operations at a regional building-materials distributor. A late delivery there meant a crew standing around on a site, so I learned to care more about the order that left the yard an hour late than about the monthly report.',
      "I started consulting in 2019. I take on about three businesses at a time, all of them owner-run. You deal with me from the first call to the last day.",
    ],
    facts: [
      { term: 'Before consulting', detail: 'Eleven years in dispatch and operations at a regional distributor' },
      { term: 'Who I work with', detail: 'Owner-run wholesale and distribution businesses, 20 to 150 people' },
      { term: 'At any one time', detail: 'Three clients, at most' },
      { term: 'Where', detail: 'On site for the diagnostic, then on site or on video each week' },
    ],
  },

  services: {
    heading: 'What it costs and what you get',
    sub: 'Prices are in US dollars and agreed in writing before we start.',
    items: [
      {
        tag: 'Start here',
        title: 'Diagnostic',
        price: '$3,800',
        length: '2 weeks',
        description:
          "I spend a week watching orders move through your building and a week in your numbers. You get a written report that names the three slowest steps, what each one costs you every month, and what I'd change first.",
        includes: [
          'Two days on site, including an early shift',
          'Conversations with your supervisors and drivers',
          'A written report and a one-hour walkthrough',
          'The fee is credited if you go on to the 90-day work within 30 days',
        ],
        cta: 'Start with a call',
      },
      {
        tag: '',
        title: '90-day improvement',
        price: '$9,500',
        length: '13 weeks',
        description:
          'We fix the slowest step first, then the next one. I work with your team every week and write each change onto a one-page procedure they can follow without me.',
        includes: [
          'A half day a week, on site or on video',
          'One procedure sheet for each change',
          'Before and after figures every two weeks',
          'The diagnostic fee credited',
        ],
        cta: 'Ask about this',
      },
      {
        tag: '',
        title: 'Standing advisor',
        price: '$3,200 a month',
        length: '3 month minimum',
        description:
          'One day a month with you and your managers. We go through the numbers, choose the next fix, and you can reach me by phone between visits.',
        includes: [
          'One day a month on site',
          'A one-page scorecard before each visit',
          'Phone and message access on weekdays',
        ],
        cta: 'Ask about this',
      },
    ],
  },

  results: {
    heading: 'Three jobs, written up on one sheet each',
    sub: 'This is the page I hand the owner at the end. The same measures at the start and at the finish.',
    jobs: [
      {
        ref: 'No. 014',
        client: 'Hardware wholesaler, 64 staff',
        problem: 'Orders sat in a queue because one person released them to the floor.',
        duration: 'Closed after 13 weeks',
        measures: [
          { label: 'Order to dispatch', before: '2.9 days', after: '1.1 days' },
          { label: 'Stockouts a month', before: '41', after: '12' },
          { label: 'Orders shipped wrong', before: '3.4%', after: '0.8%' },
        ],
        quote: 'I stopped getting calls from customers asking where their goods were. That alone paid for it.',
        by: 'Joseph T., owner',
      },
      {
        ref: 'No. 019',
        client: 'Commercial printer, 38 staff',
        problem: 'Delivery dates were promised from memory, and the presses waited for plates and paper.',
        duration: 'Closed after 13 weeks',
        measures: [
          { label: 'Jobs delivered late', before: '27%', after: '6%' },
          { label: 'Press idle, hours a week', before: '9', after: '3' },
          { label: 'Time to answer a quote', before: '3 days', after: 'Same day' },
        ],
        quote: 'The delivery date now comes off a board everyone can see. Before, it came out of my head.',
        by: 'Amina R., managing director',
      },
      {
        ref: 'No. 023',
        client: 'Food distributor, 120 staff',
        problem: 'Trucks left the loading bay late and stock counts drifted from what was on the shelves.',
        duration: 'Closed after 13 weeks',
        measures: [
          { label: 'Spoiled stock', before: '5.1%', after: '2.3%' },
          { label: 'Truck loading time', before: '55 min', after: '30 min' },
          { label: 'Stock count accuracy', before: '86%', after: '97%' },
        ],
        quote: "Sarah stood on our loading bay at 4am for a week before she said anything. That's why I listened.",
        by: 'Daniel O., owner',
      },
    ],
  },

  process: {
    heading: 'How it runs',
    steps: [
      {
        title: 'A 30-minute call',
        when: 'First',
        text: "You tell me what's slow. I'll say whether I think I can help, and if I can't, who might.",
      },
      {
        title: 'The diagnostic',
        when: 'Weeks 1 and 2',
        text: 'A week watching, a week in your numbers. You get the written report.',
      },
      {
        title: 'The plan',
        when: 'Week 3',
        text: 'A one-page plan in priority order. You choose what we start with.',
      },
      {
        title: 'The work',
        when: 'Weeks 4 to 16',
        text: 'We fix one thing at a time and write each fix down. You see the figures every two weeks.',
      },
    ],
  },

  faq: {
    heading: 'Questions owners ask me first',
    items: [
      {
        question: 'Is my business too small?',
        answer:
          "I've worked with businesses from about 20 to 150 people. Below 20, the owner can usually still see everything, and a diagnostic is more than you need.",
      },
      {
        question: 'What happens if I stop after the diagnostic?',
        answer:
          'You keep the report and owe nothing more. Some owners take the report and run it themselves, and that is a fine outcome.',
      },
      {
        question: 'Will my staff think I am checking up on them?',
        answer:
          "It comes up every time. On day one I tell the team I'm studying the process, not grading people, and they see the findings before you do.",
      },
      {
        question: "We tried software and it didn't stick. Why would this?",
        answer:
          "Usually the process was never written down, so the software had nothing to follow. I start with the process, and software comes later if it's needed at all.",
      },
      {
        question: 'How much of my time do you need?',
        answer:
          'About two hours a week during the diagnostic and one hour a week after that, plus time with your supervisors.',
      },
      {
        question: 'Do you come to us?',
        answer:
          'Yes for the diagnostic, which includes two days on your site and an early shift. After that you can choose site visits or video for the weekly half day.',
      },
    ],
  },

  contact: {
    heading: "Tell me what's slow.",
    sub: "Fill in the form and I'll reply within one working day with times for a call. The call is free and takes 30 minutes.",
    when: 'Calls are on Tuesdays and Thursdays.',
    sizes: ['Under 20 people', '20 to 50 people', '50 to 150 people', 'Over 150 people'],
    placeholder: "For example: orders go out late on Mondays and I don't know why.",
  },

  footer: {
    // Optional links, for example:
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile' }
    links: [] as { label: string; href: string }[],
    copyright: '© 2026 Sarah Mitchell. All rights reserved.',
  },
}

export type Config = typeof config
