import type { CaseStudy, LabItem } from './types';

export const work: CaseStudy[] = [
  {
    slug: 'dome',
    title: 'Dome',
    tagline: 'One place where a company incorporates, verifies once, banks and stays compliant, backed by BlockOffice’s corporate-services team.',
    year: '2026',
    company: 'Pixel8Labs',
    role: 'Product engineer (full-stack)',
    domain: 'Fintech',
    hue: 235,
    liveUrl: 'https://dome.finance/',
    stack: ['Go', 'Next.js', 'TypeScript', 'PostgreSQL', 'GKE', 'Cloudflare', 'Claude API'],
    metrics: [
      { value: '280+', label: 'commits, the most on the team' },
      { value: '10+', label: 'jurisdictions on one platform' },
    ],
    problem:
      'BlockOffice runs incorporation, filings and banking for client companies across Singapore, BVI, Cayman, Hong Kong and more. That work lived across Airtable, Google Drive, an older corporate-secretary tool and email. Staff had no single record they could trust per company, and clients repeated the same identity checks for every service.',
    decisions: [
      'We kept Google Drive as the document store staff already trusted and made Dome the record on top, so nobody had to move files or change habits on day one.',
      'We moved every existing client in from Airtable and the old corporate-secretary tool, so staff opened Dome to their whole portfolio, not an empty app.',
      'We let AI read uploaded company documents and propose updates, but a staff member approves each change before it reaches the record.',
      'We asked clients to verify once and reused it across incorporation and banking, so nobody resubmits the same documents.',
      'We made banking client-owned: clients open and run their own accounts inside Dome, and staff step in only when invited.',
      'We showed only what the data could back: plain statuses, refusals that say how to fix them, and nothing labelled live unless it is.',
    ],
    built: [
      'Started the codebase and shipped the first version: Google sign-in, companies, directors with encrypted personal data, Drive-backed files, filing reminders by email, document templates and invite-only client access.',
      'Importers that moved existing client records from Airtable and the previous corporate-secretary system into Dome.',
      'AI document extraction with Claude, feeding a review screen where staff approve each proposed change, plus a cap table with transfers, buybacks and splits.',
      'Self-serve incorporation forms for Singapore and BVI, with validation and per-person document uploads.',
      'Dome Banking, rolling out on staging first: guided account opening, multi-currency balances, payments to bank accounts and stablecoin wallets with approvals, statements, insights and a background sync clients opt into.',
    ],
    outcome:
      'Dome is live at dome.finance. Clients incorporate and verify once in the same product they bank in, and staff see where any company stands from one page.',
    shots: [
      {
        src: '/img/dome/landing.webp',
        alt: "Dome landing page: the headline 'Incorporate. Report. Pay and Receive.', a picker for Incorporate, Payments & Banking, Accounting & Taxes and Fundraising, and a glass dome over buildings labelled US, BVI, Cayman, SG, HK, UAE and MY.",
        caption: 'Dome: every corporate service under one roof',
      },
      {
        src: '/img/dome/overview.webp',
        alt: 'Dome Banking overview for a sample company: a USD balance with SGD and USDC balances, one payment waiting for approval, a six-month money in and out chart, and recent activity.',
        caption: 'Banking overview, on sample data',
      },
      {
        src: '/img/dome/open-banking.webp',
        alt: "Open Dome Banking, step 4 of 6: a step list on the left with three steps done, and a 'Verify your company and yourself' form prefilled from the company's records.",
        caption: 'Account opening: prefilled from what Dome already knows',
      },
      {
        src: '/img/dome/payment-approval.webp',
        alt: "A stablecoin payment waiting for approval: a Created, Approval, Submission, Completion tracker, a quote countdown, the amount sent and fee, and an 'Approve this payment' button.",
        caption: 'Payments: every step and fee shown before approval',
      },
    ],
  },
  {
    slug: 'ramen-finance',
    title: 'Ramen Finance',
    tagline: 'A launchpad where new projects run fair sales to their real community, not to bots.',
    year: '2024–2025',
    company: 'Pixel8Labs',
    role: 'Product engineer (full-stack)',
    domain: 'Fintech',
    hue: 8,
    liveUrl: 'https://app.ramen.finance/',
    stack: ['Go', 'TypeScript', 'Next.js', 'PostgreSQL'],
    metrics: [
      { value: '1M+', label: 'raised in BERA, Berachain’s currency' },
      { value: '10+', label: 'launches handled' },
    ],
    problem:
      'Launch partners needed to sell their new tokens to real community members, not to bots and big buyers who rush first-come sales. Launch days also brought sudden traffic spikes, and a slow page meant lost sales and lost trust.',
    decisions: [
      'We made sign-up a free lottery, so joining a launch costs buyers nothing and being fastest gives bots no edge.',
      'We asked buyers to commit money only at the purchase step, keeping the path from interest to purchase short.',
      'We put guaranteed community rounds before first-come and public rounds, so committed supporters buy before open demand.',
      "We let buyers earn allocation by committing the platform's own token for 16 weeks, favouring long-term supporters over quick flippers.",
      'We ended every launch with a claim-or-refund step, so each buyer knows how to get their tokens or money back.',
    ],
    built: [
      'Worked across frontend and backend of the launchpad, so projects could run token sales for their communities.',
      'Launch pages showing sale phases, amount raised, sale price and project details.',
      'Go APIs behind those pages, handling high volume during launch-day traffic spikes.',
      'Handled 10+ project launches on the platform, across lottery sign-up, private sales and public sales.',
    ],
    outcome:
      '10+ projects launched through Ramen, collectively raising over 1M BERA across lottery registration, private sales and public sales.',
    thumb: 1,
    shots: [
      {
        src: '/img/ramen-finance/project-detail.webp',
        alt: 'Alterim launch page with a fixed-price sale banner and a timeline from Registration through Allocation, Community GTD, Community FCFS, Public Round and Refund.',
        caption: 'Launch detail: six sale phases on one timeline',
      },
      {
        src: '/img/ramen-finance/projects.webp',
        alt: 'Grid of launch cards for Alterim, BeraTrax, Lair, Ooga Booga, Beraborrow and Henlo, each showing total raised, sale price and end date.',
        caption: 'Launches: what each project raised and at what price',
      },
      {
        src: '/img/ramen-finance/staking.webp',
        alt: 'Lock $RAMEN page with $RAMEN and gRAMEN balances, a Gacha earn-rate card and a lock form.',
        caption: 'Earn Gacha: commit the platform token for 16 weeks to earn allocation',
      },
    ],
  },
  {
    slug: 'w3gg',
    title: 'W3GG',
    tagline: 'A gaming hub for Southeast Asia where players find new games and earn rewards for playing.',
    year: '2024',
    company: 'Pixel8Labs',
    role: 'Product engineer (backend)',
    domain: 'Gaming',
    hue: 45,
    liveUrl: 'https://app.w3gg.io/',
    stack: ['Go', 'TypeScript', 'PostgreSQL', 'Xsolla', 'Steam API'],
    metrics: [],
    problem:
      'Game studios on W3GG needed players to try their games, and players needed a reason to. Quest rewards only work if real play can be checked. The business also needed revenue beyond reward giveaways.',
    decisions: [
      "We verified in-game quests through players' Steam accounts, so they get credit for normal play with no extra steps.",
      'We reused the Steam link for profile showcases, so one connection gives players quest credit and a public gaming profile.',
      'We took subscriptions through Xsolla, a games-focused payment gateway, rather than building and maintaining billing ourselves.',
      'We gave everyday progress instant XP and kept bigger rewards for selected quests, so daily play stays free and fast.',
      "We checked achievements automatically, so players don't wait on manual review to get their badges.",
    ],
    built: [
      "W3GG's subscription plan, with Xsolla handling payments.",
      'Steam integration for quest verification and player profile showcases.',
      "Backend for W3GG's quest rewards: XP, rewards, automated achievement verification and claims.",
      'Reward distribution, including digital collectible minting and token claims.',
    ],
    outcome:
      'Players earn credit for real play without extra steps, and W3GG gained a paid subscription tier alongside its rewards.',
    shots: [
      {
        src: '/img/w3gg/quests.webp',
        alt: "W3GG Quests page: a 'Quests' header, then Standard Quest and Premium Quest tiers, then filter tabs for Social & UGC, Dailies, In-Game Achievements, Game Testing and Events.",
        caption: 'Quests: standard and premium quest types',
      },
      {
        src: '/img/w3gg/hero.webp',
        alt: "W3GG hero banner featuring Auto Legends, two sports cars and the headline 'Best Web3 racing game on the market'.",
        caption: 'Home: featured games for Southeast Asian players',
      },
      {
        src: '/img/w3gg/discover.webp',
        alt: 'W3GG home with Popular Games cards for Lumiterra, DOTA 2 and W3GG, an Earn Rewards row, and a progress panel showing 76 WXP, Bronze rank and badges.',
        caption: 'Discover: games, quests and player progress in one view',
      },
    ],
  },
  {
    slug: 'chaincino',
    title: 'ChainCino',
    tagline: 'Online poker with dollar-stable stakes and a deck nobody can rig, not even the house.',
    year: '2025',
    company: 'Pixel8Labs',
    role: 'Product engineer (backend)',
    domain: 'Gaming',
    hue: 145,
    stack: ['Go', 'TypeScript'],
    metrics: [],
    problem:
      'Online poker players have to trust the house not to rig the deck, and provably fair alternatives felt slow and clunky. The product needed app-like speed and proof that every deal was fair.',
    decisions: [
      'We split dealing across several independent parties, so no one, including our own server, can see or stack the deck.',
      'We ran live play on our game server for speed, and recorded only money and final results publicly.',
      'We had players bet in USDC, a dollar-pegged currency, so a pot is worth the same at the end of the hand.',
      'We kept per-bet fees low so small bets and dealer tips stay worth making.',
      'We settled side pots automatically, so multi-player all-in hands pay everyone correctly.',
    ],
    built: [
      'Go game server processing table events in real time.',
      'Side-pot settlement for multi-player all-in hands.',
      'Backend for encrypted card dealing, so hands stay hidden until reveal.',
      'USDC betting and payouts.',
    ],
    outcome:
      'Shipped a poker table that played like any online poker app, where players could check every deal and payout for themselves.',
    status: 'Offline',
    shots: [
      {
        src: '/img/chaincino/gameplay.webp',
        alt: "Green-felt poker table with a digital dealer, four empty seats showing 'Preparing Key', a USDC pot and Fold, Check and Raise controls.",
        caption: 'Table: seats prepare encryption keys before the deal',
      },
    ],
  },
  {
    slug: 'blueocean',
    title: 'BlueOcean',
    tagline: 'Swap digital assets directly with another person, with no middleman holding either side.',
    year: '2025',
    company: 'Side project',
    role: 'Full-stack engineer',
    domain: 'Fintech',
    hue: 220,
    stack: ['Next.js', 'TypeScript', 'Wallet SDKs'],
    metrics: [],
    problem:
      'Large or one-off trades of digital assets run on trust: one side sends first and hopes the other follows, or both pay a broker. Mixed deals, like a collectible for currency, are harder still.',
    decisions: [
      'We held assets until both sides deposit; the trade completes for both or neither, so nobody has to go first.',
      'We let creators cancel any time before the other side deposits, so nobody is stuck with a stale price.',
      'We made offers open to anyone or restricted to one counterparty, covering public markets and pre-agreed deals.',
      'We let currencies and collectibles mix freely on either side of a deal.',
      'We showed reference prices from several sources, so traders can judge a quote before accepting.',
    ],
    built: [
      'The swap logic behind every offer: create, fund, swap, cancel and expire.',
      'Next.js app with wallet sign-in, an offer builder, and a marketplace with search, filters and status tracking.',
      'Reference prices pulled from three independent price sources.',
      'A public receipt link on every trade, so users can verify it themselves.',
    ],
    outcome:
      'Shipped to testnet: two strangers could swap currencies or collectibles without trusting each other or a broker.',
    status: 'Offline',
    shots: [
      {
        src: '/img/blueocean/landing.webp',
        alt: 'OTC Market dashboard with open offers, total volume, completed and active trader counts, a search bar and swap offer cards.',
        caption: 'Market: browse peer-to-peer swap offers',
      },
      {
        src: '/img/blueocean/create-offer.webp',
        alt: "Create OTC Offer form with a 'How it works' explainer, coin or NFT toggle, token picker for SUI, Walrus, USDC, USDT and ETH, and a wallet restriction option.",
        caption: 'Create offer: put up any currency or collectible',
      },
      {
        src: '/img/blueocean/marketplace.webp',
        alt: 'Grid of offer cards, each showing the offered and requested asset with Completed, Funded, Open or Expired status.',
        caption: 'Offers: status tracked from open to completed',
      },
    ],
  },
  {
    slug: 'mad-meerkats',
    title: 'Mad Meerkats Builder',
    tagline: 'Collectors mix traits from the characters they own into a new profile picture.',
    year: '2024',
    company: 'Pixel8Labs',
    role: 'Product engineer (frontend)',
    domain: 'Consumer',
    hue: 165,
    stack: ['Next.js', 'TypeScript', 'Wallet SDKs'],
    metrics: [],
    problem:
      'The Mad Meerkats team wanted to give collectors more to do with their characters than hold them. Each character is a fixed image, and collectors with several had no way to combine them.',
    decisions: [
      'We limited traits to characters you own, so the builder rewards real collectors.',
      'We checked ownership automatically at sign-in, so building starts right away with nothing to enter by hand.',
      'We framed the builder as a perk for existing collectors, not a new sale, adding value to what they own.',
    ],
    built: [
      'The builder frontend in Next.js: sign-in and trait selection.',
      'Ownership-verified trait unlocking: it checks which Meerkats a collector owns and unlocks only their traits.',
      "A dark, quiet interface with teal and purple accents that keeps the collection's art in focus.",
    ],
    outcome:
      'Shipped a builder that gave collectors a custom profile picture made from what they actually owned.',
    status: 'Offline',
    shots: [
      {
        src: '/img/mad-meerkats/landing.webp',
        alt: "Mad Meerkat NFT Builder page with a sample meerkat PFP on a mint background and a 'Connect Wallet to Build' button.",
        caption: 'Builder: connect a wallet to start remixing',
      },
    ],
  },
];

export const lab: LabItem[] = [
  {
    title: 'Fee-free sign-up',
    blurb: 'Lets new users start using an app without first buying anything to cover fees.',
    stack: ['TypeScript'],
  },
  {
    title: 'Apeiron cloud services',
    blurb: 'Go services on Cloud Run and Cloud Functions running the backend for an online game.',
    stack: ['Go', 'GCP', 'Cloud Run'],
  },
  {
    title: 'Live event data APIs',
    blurb: 'APIs that turn live transaction events into searchable data, so apps can query activity directly.',
    stack: ['TypeScript', 'GraphQL'],
  },
  {
    title: 'Discord forwarder bot',
    blurb: 'Forwards and manages messages across Discord channels, so community updates reach everyone without manual reposting.',
    stack: ['TypeScript', 'Discord.js', 'Node.js'],
  },
  {
    title: 'Reward claim tooling',
    blurb: 'Reusable tooling that lets recipients claim rewards themselves, instead of the project sending each one.',
    stack: ['TypeScript'],
  },
];
