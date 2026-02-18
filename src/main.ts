import './style.css';

// ============================================
// Project Data
// ============================================

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  icon: string;
  categoryBadge: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'Orbit Poker',
    description:
      'Encrypted-card poker system on Arbitrum Orbit L3 with on-chain hand evaluation, committee-based card reveals, side-pot settlement, and a Go backend game server with real-time event processing.',
    tags: ['Go', 'Solidity', 'Arbitrum Orbit', 'Cryptography'],
    category: 'gaming',
    icon: '🃏',
    categoryBadge: 'gaming',
    github: 'https://github.com/christiandinata',
  },
  {
    title: 'Sui OTC Swap Escrow',
    description:
      'Peer-to-peer OTC swap escrow protocol on Sui Network with Move smart contracts, multi-source price feeds (Pyth, CoinGecko, on-chain oracle), and Next.js frontend with full wallet integration.',
    tags: ['Move', 'Sui', 'Next.js', 'Pyth', 'TypeScript'],
    category: 'defi',
    icon: '🔄',
    categoryBadge: 'defi',
    github: 'https://github.com/christiandinata',
  },
  {
    title: 'Ramen Finance',
    description:
      'Multi-chain DeFi launchpad platform featuring token sale infrastructure, landing pages, admin panels, and Foundry-based smart contracts across Ethereum and Arbitrum ecosystems.',
    tags: ['Solidity', 'Foundry', 'Next.js', 'Multi-chain'],
    category: 'defi',
    icon: '🍜',
    categoryBadge: 'defi',
  },
  {
    title: 'BGT Market',
    description:
      'DeFi marketplace with landing pages, smart contracts (Hardhat & Foundry), and frontend applications for token trading with Merkle-tree based claim systems.',
    tags: ['Solidity', 'Hardhat', 'Foundry', 'React', 'Merkle Trees'],
    category: 'defi',
    icon: '📈',
    categoryBadge: 'defi',
  },
  {
    title: 'W3GG Gaming Platform',
    description:
      'Full-stack blockchain gaming infrastructure including quest systems, on-chain reward verification, wallet integrations, smart contract economies, and subgraph indexing.',
    tags: ['Go', 'TypeScript', 'Solidity', 'PostgreSQL', 'The Graph'],
    category: 'gaming',
    icon: '🎮',
    categoryBadge: 'gaming',
  },
  {
    title: 'Ape Arena',
    description:
      'Blockchain-powered gaming arena with smart contracts for in-game economy, a Go backend for game logic, and a React frontend with wallet connectivity.',
    tags: ['Go', 'Solidity', 'React', 'Next.js'],
    category: 'gaming',
    icon: '🦍',
    categoryBadge: 'gaming',
  },
  {
    title: 'Account Abstraction',
    description:
      'Implementation of ERC-4337 account abstraction patterns for gasless transactions and smart contract wallets, enabling seamless onboarding for Web3 applications.',
    tags: ['Solidity', 'ERC-4337', 'TypeScript'],
    category: 'infra',
    icon: '🔑',
    categoryBadge: 'infra',
  },
  {
    title: 'Tiny.fun',
    description:
      'Token launchpad and social platform with smart contracts for token creation, a full-stack backend, and a polished trading frontend interface.',
    tags: ['Solidity', 'Foundry', 'Next.js', 'TypeScript'],
    category: 'nft',
    icon: '✨',
    categoryBadge: 'nft',
  },
  {
    title: 'Apeiron Cloud Services',
    description:
      'Cloud infrastructure services (GCP Cloud Run & Cloud Functions) powering blockchain gaming systems with Go backends and automated deployment pipelines.',
    tags: ['Go', 'GCP', 'Cloud Run', 'Cloud Functions'],
    category: 'infra',
    icon: '☁️',
    categoryBadge: 'infra',
  },
  {
    title: 'Subgraph Indexing',
    description:
      'Custom subgraph implementations for indexing on-chain events and providing queryable GraphQL APIs for frontend applications and analytics.',
    tags: ['The Graph', 'TypeScript', 'GraphQL', 'Solidity'],
    category: 'infra',
    icon: '📊',
    categoryBadge: 'infra',
  },
  {
    title: 'Discord Forwarder Bot',
    description:
      'Automated Discord bot that forwards and manages community messages across channels with configurable rules and integrations.',
    tags: ['TypeScript', 'Discord.js', 'Node.js'],
    category: 'infra',
    icon: '🤖',
    categoryBadge: 'infra',
  },
  {
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
    <div class="project-card" style="animation-delay: ${i * 0.08}s" data-category="${project.category}">
      <div class="project-card-header">
        <div class="project-icon">${project.icon}</div>
        <div class="project-links">
          ${
            project.github
              ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="GitHub">
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
      </div>
    </div>
  `
    )
    .join('');
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
      e.preventDefault();
      const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!);
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
});
