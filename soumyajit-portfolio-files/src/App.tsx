import { useState, type ReactNode } from 'react';
import {
  ArrowUpRight,
  Download,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const navItems = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Project', 'projects'],
  ['Contact', 'contact'],
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="site-nav">
        <a className="brand" href="#home" onClick={closeMenu} data-testid="link-brand">
          <span className="brand-mark">SM</span>
          <span>Soumyajit Majumder</span>
        </a>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu} data-testid={`link-nav-${id}`}>
              {label}
            </a>
          ))}
          <a href="/assets/Soumyajit_Majumder_Resume.docx" download onClick={closeMenu} data-testid="link-nav-cv">
            CV
          </a>
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow reveal">ETL Developer / Data Engineer</div>
            <div className="availability reveal delay-1">
              <i />
              Open to professional opportunities
            </div>
            <h1 className="reveal delay-1">
              Turning complex data into <em>reliable pipelines.</em>
            </h1>
            <p className="hero-intro reveal delay-2">
              Detail-oriented ETL Developer and Data Engineer with 2+ years of experience building and supporting
              enterprise data integrations with Informatica IICS and PowerCenter.
            </p>
            <div className="hero-actions reveal delay-2">
              <a className="button button-primary" href="#contact" data-testid="link-hero-contact">
                Let&apos;s connect <ArrowUpRight size={15} />
              </a>
              <a
                className="button button-outline"
                href="/assets/Soumyajit_Majumder_Resume.docx"
                download
                data-testid="link-download-cv"
              >
                Download CV <Download size={14} />
              </a>
            </div>
            <div className="hero-facts reveal delay-3">
              <div className="fact">
                <strong>2+</strong>
                <span>Years experience</span>
              </div>
              <div className="fact">
                <strong>200+</strong>
                <span>Defects resolved</span>
              </div>
              <div className="fact">
                <strong>IICS</strong>
                <span>Core expertise</span>
              </div>
            </div>
          </div>

          <div className="hero-portrait reveal delay-2">
            <div className="portrait-shell">
              <img src="/assets/profile-photo.jpeg" alt="Soumyajit Majumder by the river in Kolkata" data-testid="img-profile-photo" />
              <div className="portrait-caption">
                <span>Bengaluru / India</span>
                <strong>Available now</strong>
              </div>
            </div>
            <div className="float-note top">
              <strong>Enterprise ETL</strong>
              <small>Reliable. Scalable. Monitored.</small>
            </div>
            <div className="float-note bottom">
              <strong>Data integration</strong>
              <small>Oracle / Snowflake / Salesforce</small>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-marker">01 / About</div>
          <div className="about-grid" style={{ marginTop: 22 }}>
            <div className="about-callout">
              <b>How I work</b>
              <p>Make the flow visible. Make the outcome dependable.</p>
            </div>
            <div className="about-copy">
              <p>
                I specialize in enterprise ETL development and production support, with hands-on experience across
                Informatica IICS (CDI/CAI) and PowerCenter.
              </p>
              <p>
                At Capgemini, I work on the Boehringer Ingelheim account, supporting business-critical integrations,
                resolving defects, delivering JIRA requests and improving existing workflows.
              </p>
              <div className="tag-list" aria-label="Capabilities">
                {['L2/L3 Support', 'ETL Development', 'RCA', 'SLA Management', 'Workflow Monitoring', 'API / Connectors'].map(
                  (tag) => (
                    <span className="tag" key={tag} data-testid={`tag-${tag.toLowerCase().replaceAll(' ', '-')}`}>
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="experience">
          <div className="section-marker">02 / Experience</div>
          <div className="section-heading">
            <h2>
              Professional <em>journey.</em>
            </h2>
            <p>Capgemini / Bengaluru / July 2024 — Present</p>
          </div>
          <div className="timeline">
            <article className="timeline-item" data-testid="experience-senior-software-engineer">
              <div className="timeline-date">APR 2026 — PRESENT</div>
              <div className="timeline-content">
                <h3>Senior Software Engineer</h3>
                <p className="timeline-company">Capgemini / Client: Boehringer Ingelheim</p>
                <ul>
                  <li>Provided L2 and L3 production support, resolving 200+ data integration and ETL defect tickets within defined SLA requirements.</li>
                  <li>Designed, maintained and optimized ETL pipelines using Informatica IICS across Salesforce, Veeva, Snowflake, Oracle Database and flat files.</li>
                  <li>Managed workflows across Application Integration (CAI) and Data Integration (CDI) for scheduled and ad-hoc operations.</li>
                  <li>Delivered JIRA-based enhancements and defect fixes within defined SLAs as part of the demand team.</li>
                  <li>Decommissioned obsolete interfaces and implemented changes to existing integrations to reduce maintenance overhead.</li>
                </ul>
                <span className="role-pill">IICS / CDI / CAI</span>
              </div>
            </article>
            <article className="timeline-item" data-testid="experience-software-engineer">
              <div className="timeline-date">JUL 2024 — MAR 2026</div>
              <div className="timeline-content">
                <h3>Software Engineer</h3>
                <p className="timeline-company">Capgemini / Client: Boehringer Ingelheim</p>
                <ul>
                  <li>Contributed to ETL support and development, building and maintaining data integration workflows.</li>
                  <li>Assisted with ETL pipeline development, testing and defect resolution using Informatica tools.</li>
                  <li>Supported data extraction, cleansing and loading processes for business-critical data.</li>
                </ul>
                <span className="role-pill">ETL / PRODUCTION SUPPORT</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-marker">03 / Skills</div>
          <div className="section-heading">
            <h2>
              Technical <em>toolkit.</em>
            </h2>
            <p>Tools and capabilities from my professional experience.</p>
          </div>
          <div className="skills-layout">
            <div className="skills-aside">
              <p>
                A practical stack for moving business data safely from source systems to useful, trusted destinations.
              </p>
              <div className="cloud">
                {['ETL', 'Data extraction', 'Transformation', 'Data loading', 'Data warehousing', 'Data quality', 'Scheduling', 'Monitoring', 'API integration', 'Connectors'].map(
                  (tag) => <span className="tag" key={tag}>{tag}</span>,
                )}
              </div>
            </div>
            <div className="skill-board">
              {[
                ['IICS', 'Informatica IICS', 'CDI / CAI / Mapping Designer / Task Flows / Data Quality (IDQ)'],
                ['PC', 'PowerCenter', 'ETL transformations / Data cleansing / Warehouse loading / Workflow development'],
                ['SQL', 'SQL & PL/SQL', 'Oracle SQL / Querying / Data validation / Troubleshooting'],
                ['PY', 'Python', 'Programming and data-processing fundamentals for engineering workflows'],
                ['DB', 'Data Platforms', 'Oracle Database / Snowflake / Salesforce / Veeva / Flat Files'],
                ['OPS', 'Production Support', 'L2/L3 support / JIRA / RCA / SLA management / Monitoring / Change management'],
              ].map(([code, title, description]) => (
                <article className="skill-card" key={code} data-testid={`skill-card-${code.toLowerCase()}`}>
                  <span className="skill-code">{code}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-marker">04 / Project</div>
          <div className="section-heading">
            <h2>
              Featured <em>project.</em>
            </h2>
            <p>A technical project focused on making a raw dataset useful for business analysis.</p>
          </div>
          <article className="project-panel" data-testid="project-video-game-analysis">
            <div className="pipeline-art" aria-label="ETL pipeline from raw data to warehouse">
              <span className="pipeline-caption">DATA FLOW / VIDEO GAME ANALYSIS</span>
              <span className="pipeline-node n1">RAW DATA</span>
              <span className="pipeline-node n2">CLEAN</span>
              <span className="pipeline-node n3">TRANSFORM</span>
              <span className="pipeline-node n4">WAREHOUSE</span>
            </div>
            <div className="project-copy">
              <div className="section-marker">2024 / Technical project</div>
              <h3>Video Game Analysis</h3>
              <p>
                Extracted and cleaned raw data using Informatica PowerCenter transformations, then loaded processed
                data into a data warehouse and Oracle database.
              </p>
              <p>Analysed raw datasets and performed ETL operations to produce required business outputs.</p>
              <div className="tag-list">
                <span className="tag">Informatica PowerCenter</span>
                <span className="tag">Oracle SQL</span>
                <span className="tag">ETL</span>
              </div>
            </div>
          </article>
        </section>

        <section className="section" id="education">
          <div className="section-marker">05 / Education & certifications</div>
          <div className="education-grid">
            <div>
              <div className="section-heading" style={{ display: 'block', marginTop: 22 }}>
                <h2>
                  Academic <em>foundation.</em>
                </h2>
              </div>
              <div className="education-card" data-testid="education-card">
                <span className="mono">2019 — 2023</span>
                <h3>Bachelor of Technology</h3>
                <p>Computer Science and Engineering</p>
                <strong>Guru Nanak Institute of Technology / Kolkata</strong>
                <strong>CGPA 8.14 / 10</strong>
              </div>
            </div>
            <div>
              <div className="section-heading" style={{ display: 'block', marginTop: 22 }}>
                <h2>Certifications.</h2>
              </div>
              <div className="cert-list">
                {[
                  ['01', 'Informatica Cloud Data Integration Services R41', 'IICS'],
                  ['02', 'Data Integration — IICS', 'Capgemini / Ocean Program'],
                  ['03', 'Informatica Intelligent Cloud Services Course', 'Udemy'],
                ].map(([index, title, issuer]) => (
                  <div className="cert-row" key={index} data-testid={`certification-${index}`}>
                    <span className="cert-index">{index}</span>
                    <div><b>{title}</b><small>{issuer}</small></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-wrap" id="contact">
          <div className="section-marker">06 / Contact</div>
          <h2 className="contact-heading">
            Let&apos;s talk about <em>data.</em>
          </h2>
          <p className="contact-lead">
            Open to professional conversations around ETL, Informatica IICS, data engineering and enterprise
            integration opportunities.
          </p>
          <div className="contact-links">
            <a className="contact-link" href="tel:+919330895298" data-testid="link-contact-phone">
              <small><Phone size={12} /> PHONE</small>
              <b>+91 93308 95298</b>
            </a>
            <a className="contact-link" href="https://wa.me/919433642591" target="_blank" rel="noopener" data-testid="link-contact-whatsapp">
              <small><MessageCircle size={12} /> WHATSAPP</small>
              <b>+91 94336 42591 <ArrowUpRight size={13} /></b>
            </a>
            <a className="contact-link" href="mailto:soumyajitmajumder01@gmail.com" data-testid="link-contact-email">
              <small><Mail size={12} /> EMAIL</small>
              <b>soumyajitmajumder01@gmail.com <ArrowUpRight size={13} /></b>
            </a>
            <a className="contact-link" href="https://www.linkedin.com/in/soumyajit-majumder-536127220/" target="_blank" rel="noopener" data-testid="link-contact-linkedin">
              <small><Linkedin size={12} /> LINKEDIN</small>
              <b>View my profile <ArrowUpRight size={13} /></b>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Soumyajit Majumder</span>
        <span>ETL Developer / Informatica IICS / Data Engineering</span>
        <span><MapPin size={12} /> Bengaluru, India</span>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;