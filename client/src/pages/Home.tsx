// SOAR Sunlit Study Hall style: editorial academic layout, navy ink, SOAR Gold accents, and clear next steps.
import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, BookOpen, Check, ChevronDown, ExternalLink, Filter, Mail, Menu, Search, Sparkles, Users, X } from "lucide-react";
import { siteContent, sourceNotes } from "@/content";

const navItems = [
  ["About", "about"],
  ["Subjects", "subjects"],
  ["Resources", "resources"],
  ["Get involved", "get-involved"],
  ["Contact", "contact"],
];

function LogoLockup({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className={`logo-lockup ${footer ? "logo-lockup-footer" : ""}`} aria-label="SOAR home">
      <span className="logo-seal"><img src={siteContent.logo} alt="" /></span>
      <span className="logo-type"><strong>SOAR</strong><small>Student Organized Academic Refinement</small></span>
    </a>
  );
}

function ChapterLabel({ children }: { children: string }) {
  return <div className="chapter-label"><span className="chapter-dot" /><span className="chapter-rule" />{children}<img className="chapter-mark" src={siteContent.generatedIcon} alt="" /></div>;
}

function ActionLink({ children, href, secondary = false, onClick }: { children: React.ReactNode; href?: string; secondary?: boolean; onClick?: () => void }) {
  const className = `action-link ${secondary ? "action-link-secondary" : ""}`;
  if (onClick) return <button className={className} onClick={onClick}>{children}<ArrowUpRight size={16} /></button>;
  return <a className={className} href={href}>{children}<ArrowUpRight size={16} /></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subjectQuery, setSubjectQuery] = useState("");
  const [resourceFilter, setResourceFilter] = useState("All resources");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState<"idle" | "success">("idle");

  const filteredSubjects = useMemo(() => siteContent.subjects.filter((subject) => `${subject.name} ${subject.count}`.toLowerCase().includes(subjectQuery.toLowerCase())), [subjectQuery]);
  const filteredResources = useMemo(() => siteContent.resources.filter((resource) => resourceFilter === "All resources" || resource.subject === resourceFilter), [resourceFilter]);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container header-inner">
          <LogoLockup />
          <button className="mobile-menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          <nav className={`main-nav ${menuOpen ? "main-nav-open" : ""}`} aria-label="Main navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-cta" href="#get-involved">Join a session <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-paper" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <ChapterLabel>Student-led academic support</ChapterLabel>
              <h1>Academic support, <em>organized</em> by students.</h1>
              <p className="hero-lede">Bring the question. Leave with a plan. SOAR makes peer-led study sessions, tutoring, and curriculum-aligned resources easier to find and easier to use.</p>
              <div className="hero-actions">
                <ActionLink href="#get-involved">Find a study session</ActionLink>
                <ActionLink href="#get-involved" secondary>Become a tutor</ActionLink>
              </div>
              <p className="hero-note"><span className="note-line" />Peer learning that complements the classroom.</p>
            </div>
            <div className="hero-visual" aria-label="Illustration of a student study desk">
              <div className="hero-visual-label">01 / Learn together</div>
              <img src={siteContent.studyImage} alt="Abstract sunlit study desk with notebook and orbit lines" />
              <div className="hero-sticker"><span>SOAR</span><small>Make room<br />for the next<br />question.</small></div>
              <div className="hero-orbit" aria-hidden="true" />
            </div>
          </div>
          <div className="hero-bottom-rule"><span>Scroll to explore</span><ArrowDownRight size={17} /></div>
        </section>

        <section className="metric-strip" aria-label="SOAR impact metrics">
          <div className="container metric-grid">
            {siteContent.metrics.map((metric, index) => <div className="metric-item" key={metric.label}><span className="metric-index">0{index + 1}</span><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.detail}</small></div>)}
          </div>
        </section>

        <section className="section section-about" id="about">
          <div className="container about-grid">
            <div className="section-intro"><ChapterLabel>How SOAR works</ChapterLabel><h2>A better way to meet the hard part.</h2><p>Student Organized Academic Refinement is a student-led organization built around a simple idea: learning gets clearer when students make space to work through it together.</p><a className="text-link" href="#resources">See the resource shelf <ArrowUpRight size={15} /></a></div>
            <div className="process-list">
              {[{ num: "01", title: "Join", text: "Find a study session, bring your question, and get oriented without needing to have it all figured out." }, { num: "02", title: "Learn", text: "Work through the curriculum with peers using review materials, practice prompts, and more than one way to see the idea." }, { num: "03", title: "Grow", text: "Leave with a clearer next step—and the confidence to return the favor when someone else needs a hand." }].map((item) => <div className="process-item" key={item.num}><span className="process-num">{item.num}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight className="process-arrow" size={20} /></div>)}
            </div>
          </div>
        </section>

        <section className="section section-navy section-subjects" id="subjects">
          <div className="container">
            <div className="section-heading-row"><div><ChapterLabel>Find your lane</ChapterLabel><h2>Start with the subject.<br /><span>Stay for the people.</span></h2></div><p className="heading-aside">Representative subject areas supported by SOAR. The directory is designed to grow with the community.</p></div>
            <div className="subject-tools"><div className="search-field"><Search size={17} /><input value={subjectQuery} onChange={(event) => setSubjectQuery(event.target.value)} placeholder="Search subjects" aria-label="Search subjects" /></div><span className="subject-count">{filteredSubjects.length} areas shown</span></div>
            <div className="subject-grid">{filteredSubjects.map((subject) => <article key={subject.name} className={`subject-card subject-${subject.tint}`}><div className="subject-icon">{subject.icon}</div><h3>{subject.name}</h3><p>{subject.count}</p><ArrowUpRight size={18} /></article>)}</div>
            {filteredSubjects.length === 0 && <div className="empty-state">No subject matches that search yet. Try a broader term.</div>}
          </div>
        </section>

        <section className="section section-resources section-note-shelf" id="resources">
          <div className="container resource-layout"><div className="resource-statement"><ChapterLabel>On the resource shelf</ChapterLabel><h2>Useful before you feel ready.</h2><p>SOAR’s study guides and review materials are built to help you make the next step concrete—whether that means practicing a skill or talking it through with a peer.</p><div className="resource-legend"><span><i className="legend-dot legend-dot-gold" />Current collection</span><span><i className="legend-dot legend-dot-sky" />Placeholder preview</span></div></div><div className="resource-list"><div className="resource-filter-row"><span><Filter size={15} /> Filter by subject</span><select value={resourceFilter} onChange={(event) => setResourceFilter(event.target.value)} aria-label="Filter resources by subject"><option>All resources</option><option>All subjects</option><option>Mathematics</option><option>English</option></select></div>{filteredResources.map((resource, index) => <article className="resource-card" key={resource.title}><span className="resource-number">0{index + 1}</span><div><span className="resource-type">{resource.type} · {resource.subject}</span><h3>{resource.title}</h3><p>{resource.description}</p><button className="resource-button" onClick={() => alert("Resource preview coming soon.")}>View preview <ArrowUpRight size={15} /></button></div></article>)}</div></div>
        </section>

        <section className="schools-section" aria-labelledby="schools-title"><div className="schools-orbit" aria-hidden="true" />
          <div className="container schools-grid"><div className="schools-copy"><ChapterLabel>Across the community</ChapterLabel><h2 id="schools-title">Supporting Students Across Plano ISD</h2><p>SOAR has worked with students from schools across Plano ISD, providing peer-led tutoring, virtual and in-person study sessions, and curriculum-aligned learning resources.</p><p className="fine-print">School names are used to describe the student communities SOAR has supported and do not imply formal endorsement or direct affiliation.</p></div><div className="school-list">{siteContent.schools.map((school, index) => <div className="school-chip" key={school}><span>0{index + 1}</span>{school}</div>)}</div></div>
        </section>

        <section className="section section-coverage section-bulletin">
          <div className="container"><div className="section-heading-row coverage-heading"><div><ChapterLabel>Sources & recognition</ChapterLabel><h2>Featured coverage</h2></div><p className="heading-aside">A short reading list of public coverage and organization information. Read the original source for the full context.</p></div><div className="coverage-grid">{siteContent.coverage.map((item) => <article className="coverage-card" key={item.title}><div className="coverage-top"><span>{item.publisher}</span><ExternalLink size={16} /></div><h3>{item.title}</h3><p>{item.description}</p><div className="coverage-bottom"><span>{item.date}</span><a href={item.url} target="_blank" rel="noopener noreferrer">Read the article <ArrowUpRight size={14} /></a></div></article>)}</div></div>
        </section>

        <section className="section section-leadership" id="get-involved">
          <div className="container involvement-grid"><div className="involvement-copy"><ChapterLabel>Make the circle bigger</ChapterLabel><h2>There’s room for your question—and your voice.</h2><p>Whether you’re looking for support, ready to tutor, or exploring a school-facing collaboration, start with the pathway that sounds most like you.</p><div className="pathway-list"><a href="#contact"><span><BookOpen size={18} />I’m looking for academic support</span><ArrowUpRight size={17} /></a><a href="#contact"><span><Sparkles size={18} />I want to become a tutor</span><ArrowUpRight size={17} /></a><a href="#contact"><span><Users size={18} />I’m a school or educator</span><ArrowUpRight size={17} /></a></div></div><div className="leadership-card"><div className="leadership-card-top"><span>Leadership preview</span><span className="gold-mark">✦</span></div><p className="leadership-card-intro">Student-led, with the care and clarity to keep refining the model.</p>{siteContent.leadership.map((leader) => <div className="leader-row" key={leader.name}><div className="leader-initial">{leader.name.split(" ").map((part) => part[0]).join("")}</div><div><strong>{leader.name}</strong><span>{leader.role}</span><small>{leader.note}</small></div></div>)}<div className="leadership-footnote">Leadership details supplied by SOAR.</div></div></div>
        </section>

        <section className="section section-contact" id="contact"><div className="container contact-grid"><div className="contact-copy"><ChapterLabel>Keep in touch</ChapterLabel><h2>Questions are a good place to start.</h2><p>Send a note and the SOAR team can point you toward the right next step. This front-end form is ready for connection to a live inbox.</p><a className="contact-email" href={`mailto:${siteContent.email}`}><Mail size={17} />{siteContent.email}</a></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setFormState("success"); }} aria-label="Contact SOAR"><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>What brings you here?<select required defaultValue=""><option value="" disabled>Select one</option><option>Find academic support</option><option>Become a tutor</option><option>School or educator question</option><option>Something else</option></select></label><label>Message<textarea required placeholder="A sentence or two is plenty." rows={4} /></label>{formState === "success" ? <div className="form-success"><Check size={18} /> Thanks — your note is ready to be connected to the SOAR inbox.</div> : <button className="form-submit" type="submit">Send a note <ArrowUpRight size={16} /></button>}</form></div></section>

        <section className="faq-section"><div className="container faq-layout"><div><ChapterLabel>A little clarity</ChapterLabel><h2>Good to know.</h2></div><div className="faq-list">{[{ question: "Is SOAR a replacement for teachers?", answer: "No. SOAR is positioned as a peer-led supplement to classroom learning: a place to review, practice, and ask questions with other students." }, { question: "Are the resources live?", answer: "The resource shelf is structured for future study-guide publishing. Preview cards are clearly labeled and currently route to placeholder states." }, { question: "How do I connect with SOAR?", answer: `Use the form above or email ${siteContent.email}.` }].map((faq, index) => <div className={`faq-item ${expandedFaq === index ? "faq-open" : ""}`} key={faq.question}><button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} aria-expanded={expandedFaq === index}><span>{faq.question}</span><ChevronDown size={18} /></button>{expandedFaq === index && <p>{faq.answer}</p>}</div>)}</div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><LogoLockup footer /><div className="footer-links"><div><span>Explore</span>{navItems.slice(0, 3).map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div><span>Connect</span><a href="#get-involved">Get involved</a><a href={`mailto:${siteContent.email}`}>Contact SOAR</a><a href="https://www.linkedin.com/company/soargroup" target="_blank" rel="noopener noreferrer">LinkedIn <ExternalLink size={13} /></a></div></div></div><div className="container footer-bottom"><span>© 2026 SOAR · Student Organized Academic Refinement</span><span>Built around the next question.</span></div></footer>
    </div>
  );
}
