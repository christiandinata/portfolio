import type { Role } from './types';

export const experience: Role[] = [
  {
    title: 'Product Engineer',
    company: 'Pixel8Labs (subsidiary of BlockOffice)',
    period: 'Oct 2023 — Present',
    summary:
      'Product engineer on partner products (Onboard, BlockOffice, Mad Meerkats, Ramen Finance and W3GG), working across frontend and backend from scope to release.',
    points: [
      'Handled 10+ projects on the Ramen Finance launchpad, collectively raising over 1M BERA through lottery registration, private sales and public sales.',
      'Worked across frontend and backend to build Ramen Finance, letting projects run token sales for their communities.',
      'Shipped a W3GG subscription plan with Xsolla as payment gateway, plus Steam integration for quest verification and profile showcases.',
      "Built W3GG's quest reward system: XP, rewards, achievement verification and claims.",
    ],
    stack: ['Go', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'GCP'],
  },
  {
    title: 'Information Technology Web Developer',
    company: 'PT Bank Sinarmas Tbk',
    period: 'Nov 2022 — Apr 2023',
    summary: "Built the dashboard Sinarmas' QR merchants use to track sales and manage their stores and cashiers.",
    points: [
      "Developed a merchant dashboard in a team of 4 engineers, serving Sinarmas' merchants via QR.",
      'Implemented 3 core modules: Transaction History, Store Management and Cashier Management.',
      'Integrated the system with the Simobi platform.',
    ],
    stack: ['React.js', 'Java', 'Apache Tomcat', 'JavaScript', 'CSS'],
  },
  {
    title: 'UI/UX Designer',
    company: 'Sustaination',
    period: 'Apr 2022 — Jul 2022',
    summary: 'Turned user research into design changes the product team adopted.',
    points: [
      'Designed 15+ high-fidelity prototypes in Figma, improving user task completion rate by 30%.',
      'Delivered 3 professional design recommendations adopted by the product team.',
      'Conducted user research with 25+ respondents using surveys and interviews.',
      'Analyzed user behavior using Google Analytics, identifying key UX pain points.',
    ],
    stack: ['Figma', 'Google Analytics', 'Google Sheets'],
  },
  {
    title: 'Lead Frontend Developer',
    company: 'Transfree',
    period: 'Jun 2021 — Aug 2021',
    summary: 'Led the team that built and launched the transfree.id web app.',
    points: [
      'Led a team of 4 developers to build and launch the web application for transfree.id.',
      'Refactored the legacy codebase to modern ES6 standards.',
    ],
    stack: ['Next.js', 'React.js', 'JavaScript (ES6)'],
  },
];
