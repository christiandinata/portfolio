import './style.css';

// ============================================
// Project Data
// ============================================

interface GalleryImage {
  src: string;
  caption: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  icon: string;
  categoryBadge: string;
  github?: string;
  liveUrl?: string;
  featured?: boolean;
  highlights?: string[];
  role?: string;
  techDetails?: string;
  gallery?: GalleryImage[];
}

const projects: Project[] = [
  {
    id: 'chaincino',
    title: 'ChainCino',
    description:
      'On-chain poker platform powered by ApeChain with real-time gameplay, encrypted card dealing, USDC wagering, side-pot settlement, and a Go backend game server with real-time event processing.',
    tags: ['Go', 'Solidity', 'Arbitrum Orbit', 'ApeChain', 'Cryptography'],
    category: 'gaming',
    icon: '🃏',
    categoryBadge: 'gaming',
    liveUrl: 'https://chaincino.vercel.app/',
    featured: true,
    role: 'Product Developer (Backend/Web3)',
    highlights: [
      'Premium casino-themed UI with an interactive digital dealer and green-felt poker table',
      'Real-time betting controls: Fold, Check, Raise, and All-In with responsive bet slider',
      'USDC integration for stable-value wagering on ApeChain L3',
      'Social features including "Tip Dealer" mechanic and real-time table chat',
      'Encrypted card protocol with committee-based reveals for provably fair gameplay',
      'High-speed, low-cost transactions leveraging ApeChain L3 infrastructure',
    ],
    techDetails:
      'ChainCino bridges the gap between decentralized transparency and the polished, low-latency feel of professional Web2 poker applications. Powered by ApeChain, it uses high-speed L3 infrastructure for on-chain game logic and transactions, while maintaining a premium casino experience.',
    gallery: [
      { src: '/projects/chaincino/gameplay.png', caption: 'Poker Table — Real-time gameplay with betting controls' },
      { src: '/projects/chaincino/joining.png', caption: 'Lobby — Joining a table and player queue' },
      { src: '/projects/chaincino/overview.png', caption: 'Platform Overview — Casino dashboard' },
    ],
  },
  {
    id: 'sui-otc-swap',
    title: 'BlueOcean',
    description:
      'Peer-to-peer OTC swap escrow protocol on Sui Network with Move smart contracts, multi-source price feeds (Pyth, CoinGecko, on-chain oracle), and Next.js frontend with full wallet integration.',
    tags: ['Move', 'Sui', 'Next.js', 'Pyth', 'TypeScript'],
    category: 'defi',
    icon: '🔄',
    categoryBadge: 'defi',
    liveUrl: 'https://blue-ocean-testnet.vercel.app/',
    featured: true,
    role: 'Full-Stack Developer',
    highlights: [
      'Trustless atomic escrow — assets are held in smart contract until both parties deposit',
      'Multi-asset support: SUI, USDC, USDT, ETH, Walrus, and NFTs',
      'Glassmorphism UI with clear "Side A vs Side B" visual comparison',
      'Public and private offer creation with wallet-specific restrictions',
      'OTC Marketplace dashboard with search, filter, and real-time status tracking',
      'Full Suiscan explorer integration for transaction verification',
    ],
    techDetails:
      'BlueOcean eliminates the "trust gap" in OTC trading. Built on Sui\'s object-centric model, it uses Move smart contracts for secure, atomic swaps — the trade happens for both parties simultaneously or not at all. The sleek dark-themed interface makes professional-grade trading tools accessible.',
    gallery: [
      { src: '/projects/blueocean/landing.png', caption: 'OTC Market — Browse trustless P2P swap offers' },
      { src: '/projects/blueocean/marketplace.png', caption: 'Marketplace — Offer cards with status tracking' },
      { src: '/projects/blueocean/create-offer.png', caption: 'Create Offer — Multi-asset escrow configuration' },
    ],
  },
  {
    id: 'ramen-finance',
    title: 'Ramen Finance',
    description:
      'Berachain\'s native launchpad protocol featuring token sale infrastructure, staking with Gacha rewards, admin panels, and Foundry-based smart contracts.',
    tags: ['Solidity', 'Foundry', 'Next.js', 'Berachain', 'Go'],
    category: 'defi',
    icon: '🍜',
    categoryBadge: 'defi',
    liveUrl: 'https://app.ramen.finance/',
    featured: true,
    role: 'Backend Engineer',
    highlights: [
      'Token launchpad with structured sale phases: Registration, Allocation, Community & Public Rounds',
      'Gamified "Earn Gacha" system — stake $RAMEN to earn gRAMEN and allocation rewards',
      '"Curated by Ramen" vetting system for quality project launches',
      'Comprehensive analytics with total raised, sale price, and contract details',
      'Integrated with Kodiak Finance for token purchases and Beratrail for on-chain transparency',
      'High-volume RESTful APIs in Go handling launchpad traffic spikes',
    ],
    techDetails:
      'Ramen Finance is the gateway for new projects launching on Berachain. The gamified allocation system (Gacha) creates a uniquely engaging DeFi experience, while the backend handles high-volume traffic during popular launches with Go-based APIs and Redis caching.',
    gallery: [
      { src: '/projects/ramen/landing.png', caption: 'Landing Page — Berachain\'s native launchpad' },
      { src: '/projects/ramen/projects.png', caption: 'Projects — Browse upcoming token launches' },
      { src: '/projects/ramen/staking.png', caption: 'Staking Portal — Earn Gacha rewards' },
      { src: '/projects/ramen/project-detail.png', caption: 'Project Detail — Sale phases and analytics' },
    ],
  },
  {
    id: 'w3gg',
    title: 'W3GG Gaming Platform',
    description:
      'Web3 Gaming Hub and DAO for Southeast Asia — full-stack blockchain gaming infrastructure including quest systems, on-chain reward verification, wallet integrations, and smart contract economies.',
    tags: ['Go', 'TypeScript', 'Solidity', 'PostgreSQL', 'The Graph'],
    category: 'gaming',
    icon: '🎮',
    categoryBadge: 'gaming',
    liveUrl: 'https://app.w3gg.io/',
    featured: true,
    role: 'Backend Engineer',
    highlights: [
      'Diverse game catalog: Auto Legends, Lumiterra, RavenQuest, DOTA 2 integrations',
      'Robust quest & reward engine with Social, Daily, In-Game, and Seasonal quests',
      'WXP (W3GG XP) on-chain identity and progression system with ranks and badges',
      'DeFi integration: Staking, Vesting, and Airdrop portals',
      'Guild ecosystem for community-driven competitive play in SE Asia',
      'ERC20 and off-chain WXP token rewards with automated SBT verification on Polygon',
    ],
    techDetails:
      'W3GG bridges traditional gaming and Web3, specifically targeting Southeast Asia — one of the world\'s fastest-growing gaming markets. The platform gamifies discovery itself, making the act of finding new games a quest-driven adventure with real token rewards.',
    gallery: [
      { src: '/projects/w3gg/hero.png', caption: 'Hero Section — Web3 Gaming Hub for SE Asia' },
      { src: '/projects/w3gg/discover.png', caption: 'Discover — Game catalog with categories' },
      { src: '/projects/w3gg/quests.png', caption: 'Quests — Earn WXP rewards through gameplay' },
    ],
  },
  {
    id: 'mad-meerkats-builder',
    title: 'Mad Meerkats Builder',
    description:
      'NFT PFP customization platform where holders handpick traits from their owned Mad Meerkat NFTs to create unique profile pictures, with wallet-verified identity across the ecosystem.',
    tags: ['Next.js', 'TypeScript', 'Web3', 'NFT', 'Wallet SDK'],
    category: 'nft',
    icon: '🦡',
    categoryBadge: 'nft',
    liveUrl: 'https://buidl.madmeerkat.io/',
    featured: true,
    role: 'Frontend Developer',
    highlights: [
      'Trait-based NFT customization — pick traits from owned NFTs to remix your PFP',
      'Wallet-verified identity scanning for unlocking available traits',
      'Sleek dark mode interface with teal and purple accents matching the collection aesthetic',
      'Part of the broader Mad Meerkat ecosystem spanning Cronos, Ethereum, and ApeChain',
      'High-quality comic-book art style with interactive builder interface',
      'Community-driven utility that extends the value of NFT ownership',
    ],
    techDetails:
      'Mad Meerkats Builder goes beyond static NFT ownership by offering a gamified way for community members to express individuality within the project\'s artistic framework. The platform scans connected wallets for owned assets and unlocks corresponding traits for the PFP builder.',
    gallery: [
      { src: '/projects/madmeerkats/landing.png', caption: 'Builder Landing — Connect wallet to start customizing' },
      { src: '/projects/madmeerkats/ecosystem.png', caption: 'Mad Meerkat Ecosystem — Multi-chain presence' },
    ],
  },
  {
    id: 'account-abstraction',
    title: 'Account Abstraction',
    description:
      'Implementation of ERC-4337 account abstraction patterns for gasless transactions and smart contract wallets, enabling seamless onboarding for Web3 applications.',
    tags: ['Solidity', 'ERC-4337', 'TypeScript'],
    category: 'infra',
    icon: '🔑',
    categoryBadge: 'infra',
  },
  {
    id: 'apeiron-cloud',
    title: 'Apeiron Cloud Services',
    description:
      'Cloud infrastructure services (GCP Cloud Run & Cloud Functions) powering blockchain gaming systems with Go backends and automated deployment pipelines.',
    tags: ['Go', 'GCP', 'Cloud Run', 'Cloud Functions'],
    category: 'infra',
    icon: '☁️',
    categoryBadge: 'infra',
  },
  {
    id: 'subgraph-indexing',
    title: 'Subgraph Indexing',
    description:
      'Custom subgraph implementations for indexing on-chain events and providing queryable GraphQL APIs for frontend applications and analytics.',
    tags: ['The Graph', 'TypeScript', 'GraphQL', 'Solidity'],
    category: 'infra',
    icon: '📊',
    categoryBadge: 'infra',
  },
  {
    id: 'discord-bot',
    title: 'Discord Forwarder Bot',
    description:
      'Automated Discord bot that forwards and manages community messages across channels with configurable rules and integrations.',
    tags: ['TypeScript', 'Discord.js', 'Node.js'],
    category: 'infra',
    icon: '🤖',
    categoryBadge: 'infra',
  },
  {
    id: 'merkle-claims',
    title: 'Merkle Claim Systems',
    description:
      'Reusable Merkle tree generation and verification tooling for token distributions, airdrops, and whitelisted access control in smart contracts.',
    tags: ['TypeScript', 'Solidity', 'Merkle Trees'],
    category: 'infra',
    icon: '🌲',
    categoryBadge: 'infra',
  },
];

// ============================================
// Typed Text Animation
// ============================================

const phrases = [
  'Blockchain Engineer',
  'Smart Contract Developer',
  'Full-Stack Builder',
  'DeFi Architect',
  'On-Chain Gaming Dev',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typedTextEl: HTMLElement | null = null;

function typeEffect() {
  typedTextEl = typedTextEl || document.getElementById('typed-text');
  if (!typedTextEl) return;

  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typedTextEl.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextEl.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let timeout = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentPhrase.length) {
    timeout = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    timeout = 500;
  }

  setTimeout(typeEffect, timeout);
}

// ============================================
// Particles Canvas
// ============================================

function initParticles() {
  const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    hue: number;
  }

  const particles: Particle[] = [];
  const particleCount = Math.min(80, Math.floor(w / 15));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
      hue: Math.random() > 0.5 ? 260 : 174,
    });
  }

  function draw() {
    ctx!.clearRect(0, 0, w, h);

    particles.forEach((p, i) => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx!.beginPath();
      ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx!.fillStyle = `hsla(${p.hue}, 70%, 65%, ${p.opacity})`;
      ctx!.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const dx = p.x - particles[j].x;
        const dy = p.y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx!.beginPath();
          ctx!.moveTo(p.x, p.y);
          ctx!.lineTo(particles[j].x, particles[j].y);
          ctx!.strokeStyle = `hsla(260, 70%, 65%, ${0.08 * (1 - dist / 120)})`;
          ctx!.lineWidth = 0.5;
          ctx!.stroke();
        }
      }
    });

    requestAnimationFrame(draw);
  }

  draw();

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });
}

// ============================================
// Navbar Scroll Effect
// ============================================

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  window.addEventListener('scroll', () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link
    let current = '';
    sections.forEach((section) => {
      const sectionEl = section as HTMLElement;
      const sectionTop = sectionEl.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = sectionEl.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  });
}

// ============================================
// Mobile Menu
// ============================================

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('active');
    });
  });
}

// ============================================
// Counter Animation
// ============================================

function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-target') || '0');
            let current = 0;
            const duration = 2000;
            const step = target / (duration / 16);

            const update = () => {
              current += step;
              if (current < target) {
                counter.textContent = Math.floor(current).toString();
                requestAnimationFrame(update);
              } else {
                counter.textContent = target.toString();
              }
            };

            update();
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsContainer = document.querySelector('.hero-stats');
  if (statsContainer) observer.observe(statsContainer);
}

// ============================================
// Render Projects
// ============================================

function renderProjects(filter: string = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  grid.innerHTML = filtered
    .map(
      (project, i) => `
    <div class="project-card ${project.featured ? 'project-card-featured' : ''}" style="animation-delay: ${i * 0.08}s" data-category="${project.category}" ${project.featured ? `data-project-id="${project.id}" role="button" tabindex="0"` : ''}>
      <div class="project-card-header">
        <div class="project-icon">${project.icon}</div>
        <div class="project-links">
          ${project.featured ? `<span class="project-featured-badge">★ Featured</span>` : ''}
          ${
            project.github
              ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="GitHub" onclick="event.stopPropagation()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>`
              : ''
          }
        </div>
      </div>
      <div class="project-card-body">
        <span class="project-category-badge badge-${project.categoryBadge}">${project.category.toUpperCase()}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        ${project.featured ? `<div class="project-card-cta"><span>View Details</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>` : ''}
      </div>
    </div>
  `
    )
    .join('');

  // Add click handlers for featured projects
  grid.querySelectorAll('.project-card-featured').forEach((card) => {
    card.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      // Don't navigate if clicking on a link
      if (target.closest('a')) return;
      const projectId = card.getAttribute('data-project-id');
      if (projectId) {
        window.location.hash = `#project/${projectId}`;
      }
    });
    card.addEventListener('keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Enter' || (e as KeyboardEvent).key === ' ') {
        e.preventDefault();
        const projectId = card.getAttribute('data-project-id');
        if (projectId) {
          window.location.hash = `#project/${projectId}`;
        }
      }
    });
  });
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });
}

// ============================================
// Project Detail Page
// ============================================

function renderProjectDetail(projectId: string) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    window.location.hash = '';
    return;
  }

  const mainContent = document.getElementById('main-content');
  const detailPage = document.getElementById('project-detail-page');

  if (!mainContent || !detailPage) return;

  mainContent.style.display = 'none';
  detailPage.style.display = 'block';
  detailPage.classList.add('visible');

  detailPage.innerHTML = `
    <nav id="detail-navbar" class="navbar scrolled">
      <div class="nav-container">
        <a href="#" class="nav-logo" id="detail-back-home">
          <span class="logo-bracket">&lt;</span>CD<span class="logo-bracket">/&gt;</span>
        </a>
        <a href="#" class="detail-back-btn" id="detail-back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>Back to Projects</span>
        </a>
      </div>
    </nav>

    <div class="project-detail">
      <div class="project-detail-hero">
        <div class="project-detail-hero-bg"></div>
        <div class="container">
          <div class="project-detail-hero-content">
            <div class="project-detail-meta">
              <span class="project-category-badge badge-${project.categoryBadge}">${project.category.toUpperCase()}</span>
              ${project.role ? `<span class="project-detail-role">${project.role}</span>` : ''}
            </div>
            <div class="project-detail-title-row">
              <span class="project-detail-icon">${project.icon}</span>
              <h1 class="project-detail-title">${project.title}</h1>
            </div>
            <p class="project-detail-description">${project.description}</p>
            <div class="project-detail-actions">
              ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" id="detail-live-link">
                <span>View Live Project</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>` : ''}
              ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" id="detail-github-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>Source Code</span>
              </a>` : ''}
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="project-detail-body">
          <div class="project-detail-section">
            <div class="project-detail-section-header">
              <div class="project-detail-section-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h2>Key Highlights</h2>
            </div>
            <div class="project-detail-highlights">
              ${(project.highlights || [])
                .map(
                  (highlight, i) => `
                <div class="highlight-card" style="animation-delay: ${i * 0.1}s">
                  <div class="highlight-card-marker"></div>
                  <p>${highlight}</p>
                </div>
              `
                )
                .join('')}
            </div>
          </div>

          ${(project.gallery && project.gallery.length > 0) ? `
          <div class="project-detail-section">
            <div class="project-detail-section-header">
              <div class="project-detail-section-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              </div>
              <h2>Gallery</h2>
            </div>
            <div class="project-gallery">
              ${project.gallery.map((img, i) => `
                <div class="gallery-item" data-gallery-index="${i}" role="button" tabindex="0">
                  <div class="gallery-image-wrapper">
                    <img src="${img.src}" alt="${img.caption}" loading="lazy" />
                    <div class="gallery-overlay">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
                    </div>
                  </div>
                  <p class="gallery-caption">${img.caption}</p>
                </div>
              `).join('')}
            </div>
          </div>
          ` : ''}

          ${project.techDetails ? `
          <div class="project-detail-section">
            <div class="project-detail-section-header">
              <div class="project-detail-section-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
              </div>
              <h2>Technical Overview</h2>
            </div>
            <div class="project-detail-tech-overview">
              <p>${project.techDetails}</p>
            </div>
          </div>
          ` : ''}

          <div class="project-detail-section">
            <div class="project-detail-section-header">
              <div class="project-detail-section-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h2>Tech Stack</h2>
            </div>
            <div class="project-detail-tags">
              ${project.tags.map((tag) => `<span class="project-detail-tag">${tag}</span>`).join('')}
            </div>
          </div>

          ${project.liveUrl ? `
          <div class="project-detail-section">
            <div class="project-detail-section-header">
              <div class="project-detail-section-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <h2>Live Preview</h2>
            </div>
            <div class="project-detail-preview">
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-detail-preview-link">
                <div class="project-detail-preview-card">
                  <div class="project-detail-preview-url">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                    <span>${project.liveUrl}</span>
                  </div>
                  <div class="project-detail-preview-cta">
                    <span>Visit Site</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          ` : ''}
        </div>
      </div>

      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <span class="footer-logo">
              <span class="logo-bracket">&lt;</span>CD<span class="logo-bracket">/&gt;</span>
            </span>
            <p>&copy; 2026 Christian Dinata. Built with ☕ and passion.</p>
          </div>
        </div>
      </footer>
    </div>
  `;

  // Scroll to top
  window.scrollTo(0, 0);

  // Back button handlers
  const backBtn = document.getElementById('detail-back-btn');
  const backHome = document.getElementById('detail-back-home');

  const goBack = (e: Event) => {
    e.preventDefault();
    window.location.hash = '';
  };

  backBtn?.addEventListener('click', goBack);
  backHome?.addEventListener('click', goBack);

  // Gallery lightbox
  initGalleryLightbox(project.gallery || []);
}

// ============================================
// Gallery Lightbox
// ============================================

function initGalleryLightbox(gallery: GalleryImage[]) {
  if (!gallery.length) return;

  const galleryItems = document.querySelectorAll('.gallery-item');
  let currentIndex = 0;

  function openLightbox(index: number) {
    currentIndex = index;

    // Remove existing lightbox if any
    const existing = document.getElementById('gallery-lightbox');
    if (existing) existing.remove();

    const lightbox = document.createElement('div');
    lightbox.id = 'gallery-lightbox';
    lightbox.className = 'gallery-lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-backdrop"></div>
      <button class="lightbox-close" aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <button class="lightbox-nav lightbox-prev" aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="lightbox-nav lightbox-next" aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>
      <div class="lightbox-content">
        <img src="${gallery[currentIndex].src}" alt="${gallery[currentIndex].caption}" class="lightbox-image" />
        <div class="lightbox-info">
          <p class="lightbox-caption">${gallery[currentIndex].caption}</p>
          <span class="lightbox-counter">${currentIndex + 1} / ${gallery.length}</span>
        </div>
      </div>
    `;

    document.body.appendChild(lightbox);

    // Force reflow then add visible class for animation
    requestAnimationFrame(() => {
      lightbox.classList.add('visible');
    });

    // Event listeners
    const closeLightbox = () => {
      lightbox.classList.remove('visible');
      setTimeout(() => lightbox.remove(), 300);
      document.removeEventListener('keydown', handleKeydown);
    };

    const navigateTo = (newIndex: number) => {
      currentIndex = ((newIndex % gallery.length) + gallery.length) % gallery.length;
      const img = lightbox.querySelector('.lightbox-image') as HTMLImageElement;
      const caption = lightbox.querySelector('.lightbox-caption') as HTMLElement;
      const counter = lightbox.querySelector('.lightbox-counter') as HTMLElement;
      if (img) {
        img.style.opacity = '0';
        setTimeout(() => {
          img.src = gallery[currentIndex].src;
          img.alt = gallery[currentIndex].caption;
          img.style.opacity = '1';
        }, 200);
      }
      if (caption) caption.textContent = gallery[currentIndex].caption;
      if (counter) counter.textContent = `${currentIndex + 1} / ${gallery.length}`;
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateTo(currentIndex - 1);
      if (e.key === 'ArrowRight') navigateTo(currentIndex + 1);
    };

    lightbox.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-backdrop')?.addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev')?.addEventListener('click', () => navigateTo(currentIndex - 1));
    lightbox.querySelector('.lightbox-next')?.addEventListener('click', () => navigateTo(currentIndex + 1));
    document.addEventListener('keydown', handleKeydown);
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const index = parseInt(item.getAttribute('data-gallery-index') || '0');
      openLightbox(index);
    });
    item.addEventListener('keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Enter' || (e as KeyboardEvent).key === ' ') {
        e.preventDefault();
        const index = parseInt(item.getAttribute('data-gallery-index') || '0');
        openLightbox(index);
      }
    });
  });
}

function hideProjectDetail() {
  const mainContent = document.getElementById('main-content');
  const detailPage = document.getElementById('project-detail-page');

  if (!mainContent || !detailPage) return;

  detailPage.classList.remove('visible');
  detailPage.style.display = 'none';
  mainContent.style.display = 'block';
}

// ============================================
// Hash-based Router
// ============================================

function initRouter() {
  function handleRoute() {
    const hash = window.location.hash;

    if (hash.startsWith('#project/')) {
      const projectId = hash.replace('#project/', '');
      renderProjectDetail(projectId);
    } else {
      hideProjectDetail();
    }
  }

  window.addEventListener('hashchange', handleRoute);

  // Handle initial load
  if (window.location.hash.startsWith('#project/')) {
    handleRoute();
  }
}

// ============================================
// Scroll Reveal Animation
// ============================================

function initScrollReveal() {
  const items = document.querySelectorAll('.timeline-item, .skill-category');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
  );

  items.forEach((item) => observer.observe(item));
}

// ============================================
// Smooth Scroll for anchor links
// ============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = (anchor as HTMLAnchorElement).getAttribute('href')!;
      // Don't handle project detail links
      if (href.startsWith('#project/')) return;
      // Don't handle back-to-top '#'
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============================================
// Initialize Everything
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
  initParticles();
  initNavbar();
  initMobileMenu();
  initCounters();
  renderProjects();
  initProjectFilters();
  initScrollReveal();
  initSmoothScroll();
  initRouter();
});
