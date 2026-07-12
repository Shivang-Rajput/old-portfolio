const projects = [
  {
    title: 'Shopping Portal',
    imageSrc: '/project-shopping.svg',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Task Manager',
    imageSrc: '/project-task.svg',
    demoUrl: '#',
    repoUrl: '#',
  },
];

const skills = [
  {
    title: 'Frontend',
    items: ['React.js', 'JavaScript/ES6+', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    title: 'Core CS',
    items: ['Data Structures', 'Algorithms - DFS/BFS', 'Sorting'],
  },
  {
    title: 'DevOps / Tools',
    items: ['Git', 'Docker'],
  },
  {
    title: 'AI / Cloud',
    items: ['Oracle Cloud Infrastructure AI Foundations'],
  },
];

function App() {
  return (
    <div className="app-shell">
      <nav className="top-nav" aria-label="Portfolio sections">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#resume" className="nav-link">
          Resume
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="nav-link github-link">
          GitHub
        </a>
      </nav>

      <header id="home" className="hero">
        <div className="hero-content hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">React.js Developer • OCI 2025 AI Foundations</p>
            <h1>Hi, I’m Sanga.</h1>
            <p className="hero-text">
              I build scalable, user-centered web applications with a focus on clean architecture,
              thoughtful UX, and practical problem solving.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button primary">
                View Projects
              </a>
              <a href="#contact" className="button secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="photo-card">
            <img src="/profile-photo.jpeg" alt="Profile illustration for Sanga" />
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <p className="section-tag">About Me</p>
          <div className="about-grid">
            <p className="about-copy">
              I’m a software developer focused on building scalable, user-friendly web applications
              with React.js. I enjoy turning product ideas into polished interfaces that are both
              intuitive and reliable, with a strong emphasis on clean architecture and maintainable
              code. My OCI 2025 AI Foundations certification reflects my growing interest in applied
              AI and modern cloud technologies, while my curiosity about computer science
              fundamentals keeps me grounded in problem solving through algorithms and data
              structures. I’m especially motivated by work that combines thoughtful design,
              efficient engineering, and measurable business impact. Whether I’m implementing a
              responsive UI or refining application logic, I aim to create solutions that feel
              seamless for users and valuable for teams. I’m currently expanding my skills toward
              deeper full-stack development and emerging AI-driven experiences. I bring a balance
              of technical discipline and curiosity to every project.
            </p>
            <div className="badge-card">
              <span className="badge-label">Certified</span>
              <strong>OCI 2025 AI Foundations</strong>
              <p>Demonstrated knowledge of AI concepts, cloud thinking, and responsible innovation.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-tag">Project Showcase</p>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <img src={project.imageSrc} alt={`${project.title} preview`} className="project-image" />
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.demoUrl} className="button primary">
                    Live Demo
                  </a>
                  <a href={project.repoUrl} className="button secondary">
                    GitHub Repo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="section">
          <p className="section-tag">Resume</p>
          <div className="resume-card">
            <iframe
              src="/resume.pdf"
              title="Resume PDF"
              className="resume-frame"
            />
            <div className="resume-actions">
              <a href="/resume.pdf" download className="button primary">
                Download Resume PDF
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="section-tag">Skills & Tech Stack</p>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div key={skillGroup.title} className="skill-card">
                <h3>{skillGroup.title}</h3>
                <ul>
                  {skillGroup.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="section-tag">Contact</p>
          <div className="contact-grid">
            <article className="contact-card">
              <h3>Casual</h3>
              <p>Open to new opportunities and always happy to connect around great product ideas.</p>
            </article>
            <article className="contact-card">
              <h3>Formal</h3>
              <p>I am interested in software developer roles where I can contribute to impactful teams and scalable products.</p>
            </article>
            <article className="contact-card">
              <h3>Collaboration</h3>
              <p>I’d love to collaborate on thoughtful builds, product thinking, and long-term engineering challenges.</p>
            </article>
          </div>
          <div className="contact-actions">
            <a href="mailto:sanga@example.com" className="button primary">
              Email Me
            </a>
            <a href="https://www.linkedin.com" className="button secondary">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
