import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, BookOpen, Camera, Check, Code2, Github, GraduationCap, Heart, Linkedin, Menu, Sparkles, Trophy, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cameraImage from '@/assets/diary-camera.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Nitya Patel — A Digital Diary' },
    { name: 'description', content: 'The digital diary of Nitya Patel, a BTech CSE student at Indus University. Full stack web development, Python Essentials, and Odoo Hackathon 2026.' },
    { property: 'og:title', content: 'Nitya Patel — A Digital Diary' },
    { property: 'og:description', content: 'A little collection of learning, experiences, and chapters from Nitya Patel’s journey in computer science.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Portfolio,
});
const github = 'https://github.com/nityapatel7341';
const linkedin = 'https://www.linkedin.com/in/nitya-patel-4b135330b';
const memories = [
  { category: 'A chapter in progress', title: 'Learning, one day at a time.', text: 'My BTech in Computer Science & Engineering at Indus University is an ongoing chapter.', detail: 'Currently pursuing · Indus University' },
  { category: 'From my experience pages', title: 'Exploring full stack development.', text: 'A completed internship in full stack web development is part of my learning journey.', detail: 'Internship · Full Stack Web Development' },
  { category: 'From my experience pages', title: 'A foundation in Python.', text: 'My Python Essentials internship is another chapter in my computer science journey.', detail: 'Internship · Python Essentials' },
  { category: 'A 2026 memory', title: 'Showing up for the challenge.', text: 'I participated in the Odoo Hackathon in 2026.', detail: 'Odoo Hackathon · 2026' },
];
function SocialLink({ type, iconOnly = false }: { type: 'github' | 'linkedin'; iconOnly?: boolean }) {
  const Icon = type === 'github' ? Github : Linkedin;
  const label = type === 'github' ? 'GitHub' : 'LinkedIn';
  return <Button asChild variant={iconOnly ? 'ghost' : 'outline'} size={iconOnly ? 'icon' : 'default'}><a href={type === 'github' ? github : linkedin} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><Icon />{!iconOnly && <>{label}<ArrowUpRight /></>}</a></Button>;
}
function ChapterLabel({ number, children }: { number: string; children: React.ReactNode }) { return <div className="chapter-label"><span>{number}</span>{children}</div>; }
function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pages, setPages] = useState(0);
  const sentinel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = sentinel.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setPages(count => count + 1);
    }, { rootMargin: '0px 0px 100px 0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, [pages]);
  const navigation = <><a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>About me</a><a className="nav-link" href="#experience" onClick={() => setMenuOpen(false)}>My journey</a><a className="nav-link" href="#contact" onClick={() => setMenuOpen(false)}>Say hello <ArrowUpRight size={12} className="inline" /></a></>;
  return <div className="diary-shell">
    <header className="site-header"><a href="#" className="wordmark" aria-label="Nitya's diary, home"><BookOpen strokeWidth={1.5} />nitya’s diary<span className="text-muted-foreground">.</span></a><nav className="desktop-nav" aria-label="Main navigation">{navigation}<div className="nav-social"><SocialLink type="github" iconOnly /><SocialLink type="linkedin" iconOnly /></div></nav><Button variant="ghost" size="icon" className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button></header>
    {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation}<div className="flex gap-2"><SocialLink type="github" iconOnly /><SocialLink type="linkedin" iconOnly /></div></nav>}
    <main>
      <section className="hero" aria-label="Welcome to Nitya’s digital diary">
        <div className="eyebrow"><Sparkles /> A little corner of the internet <Sparkles /></div>
        <h1>Hello, I’m<br /><em><span className="name-underline">Nitya Patel.</span></em></h1>
        <p className="hero-copy">A computer science student, collecting little moments<br className="hidden sm:block" /> of learning, building, and becoming.<br />Welcome to my digital diary.</p>
        <div className="hero-actions"><Button asChild><a href="#experience">Explore my journey <ArrowDownRight /></a></Button><SocialLink type="github" /></div>
        <div className="hero-side-note handwritten">a work in progress,<br />just like me.<ArrowDownRight strokeWidth={1} /></div>
        <div className="flower" aria-hidden="true">✳</div>
        <div className="sticker"><Code2 strokeWidth={1.3} /><span>learning & building</span><Heart size={12} /></div>
        <figure className="polaroid"><span className="tape" /><img src={cameraImage} alt="A vintage camera, pink notebook, flowers, and keepsakes on a paper desk" width={1024} height={1024} /><p className="handwritten">collecting little moments ♡</p></figure>
        <a href="#about" className="hero-bottom">There’s more to the story<ArrowDown /></a>
      </section>
      <section id="about" className="chapter"><div className="section-top"><ChapterLabel number="01">The person behind the pages</ChapterLabel><span className="section-note handwritten">a little about me ↙</span></div><div className="row align-items-center"><div className="col-md-7"><h2>Curious mind.<br />An unfinished story.</h2><p className="about-copy">I’m <strong>Nitya Patel</strong>, currently pursuing my <strong>BTech in Computer Science & Engineering at Indus University.</strong></p><p className="about-copy">This diary brings together the chapters of my journey so far — from full stack web development and Python Essentials internships to participating in the Odoo Hackathon in 2026.</p><div className="detail-line"><GraduationCap /> Computer Science & Engineering · Indus University</div></div><div className="col-md-5"><div className="education-note"><span className="tape" /><GraduationCap strokeWidth={1.3} size={29} /><div className="small-label">Currently writing this chapter</div><h3>BTech in CSE</h3><p>Indus University<br />Bachelor’s degree</p><div className="note-footer"><span className="status-dot" />Currently pursuing</div></div></div></div></section>
      <section id="experience" className="chapter"><div className="section-top"><ChapterLabel number="02">Learning by doing</ChapterLabel><span className="section-note handwritten">notes from my journey</span></div><h2>Small steps. Meaningful chapters.</h2><div className="experience-grid"><article className="entry-card pink"><div className="entry-icon"><Code2 /></div><div className="entry-type">Internship · Web development</div><h3>Full Stack Web Development</h3><p>A chapter of my learning journey focused on full stack web development.</p><div className="entry-meta"><Check /> Completed internship</div></article><article className="entry-card lavender"><div className="entry-icon"><Code2 /></div><div className="entry-type">Internship · Programming</div><h3>Python Essentials</h3><p>An internship focused on Python essentials and foundational programming.</p><div className="entry-meta"><Check /> Completed internship</div></article></div></section>
      <section className="chapter" id="hackathon"><div className="section-top"><ChapterLabel number="03">A moment to remember</ChapterLabel><span className="section-note handwritten">out of the comfort zone ♡</span></div><div className="hackathon-entry"><div className="hackathon-icon"><Trophy strokeWidth={1.3} /></div><div><div className="entry-type">Hackathon · 2026</div><h3>Odoo Hackathon</h3><p>Participated in the Odoo Hackathon in 2026.<br />Another experience to add to the pages of my journey.</p></div></div></section>
      <section id="contact" className="chapter contact"><ChapterLabel number="04">Let’s keep in touch</ChapterLabel><h2>Good stories start with a hello.</h2><p>Find me on GitHub and LinkedIn. I’d love to connect.</p><div className="social-actions"><SocialLink type="github" /><SocialLink type="linkedin" /></div><div className="handwritten mt-6">until the next chapter, nitya ♡</div></section>
      <footer className="footer"><span>© 2026 Nitya Patel</span><span>A diary of learning & becoming <Heart size={11} className="inline ml-1" /></span></footer>
      <div className="margin-note"><Camera size={20} className="mx-auto mb-3" strokeWidth={1.3} /><p className="handwritten">Some pages are worth revisiting.</p><small>THE DIARY CONTINUES</small></div>
      <section className="continuation" aria-label="Revisited diary pages">{Array.from({ length: pages }, (_, i) => {
        const memory = memories[i % memories.length];
        if (!memory) return null;
        return <article className="chapter" key={i}><ChapterLabel number={String(i + 5).padStart(2, '0')}>Revisiting the diary</ChapterLabel><div className="row"><div className="col-md-8"><div className="entry-type mt-4">{memory.category}</div><h3 className="continuation-title">{memory.title}</h3><p>{memory.text}</p><div className="detail-line"><BookOpen />{memory.detail}</div></div><div className="col-md-4"><div className="memory-slip"><div className="entry-type">A note in the margin</div><p className="handwritten">Still learning.<br />Still becoming.</p><SocialLink type={i % 2 === 0 ? 'github' : 'linkedin'} iconOnly /></div></div></div></article>;
      })}<div ref={sentinel} className="margin-note" aria-label="More diary pages"><span className="handwritten">the story goes on…</span></div></section>
    </main>
  </div>;
}
