import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">

        {/* =========================
            HERO SECTION
        ========================= */}

        <section className="hero">

          <div className="hero-content">

            <p className="hero-greeting">
              Hello, I'm
            </p>

            <h1>
              Fatima Ejaz
            </h1>

            <h2>
              Frontend Developer
            </h2>

            <p className="hero-description">
              I'm a passionate web development student who enjoys
              creating modern, responsive and user-friendly websites.
              I love turning ideas into clean and interactive digital
              experiences.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="secondary-button"
              >
                Contact Me
              </a>

            </div>

          </div>


          <div className="hero-visual">

            <div className="code-card">

              <span>&lt;developer&gt;</span>

              <p>
                const <strong>passion</strong> =
                "web development";
              </p>

              <p>
                const <strong>goal</strong> =
                "build something great";
              </p>

              <span>&lt;/developer&gt;</span>

            </div>

          </div>

        </section>


        {/* =========================
            ABOUT SECTION
        ========================= */}

        <ScrollAnimation>

          <section id="about">

            <h2>
              About Me
            </h2>

            <div className="about-container">

              <div className="about-text">

                <h3>
                  Building ideas into web experiences.
                </h3>

                <p>
                  I'm a web development student who enjoys creating
                  modern, responsive and interactive websites. I'm
                  currently building my skills in frontend development
                  and exploring technologies like React and Next.js.
                </p>

                <p>
                  I enjoy learning by building real projects, solving
                  problems and experimenting with new ideas. My goal
                  is to become a skilled developer who can turn creative
                  ideas into useful digital experiences.
                </p>

              </div>


              <div className="about-info">

                <div className="info-card">

                  <span>01</span>

                  <h4>
                    Frontend
                  </h4>

                  <p>
                    Creating responsive and user-friendly interfaces.
                  </p>

                </div>


                <div className="info-card">

                  <span>02</span>

                  <h4>
                    Learning
                  </h4>

                  <p>
                    Continuously improving my development skills.
                  </p>

                </div>


                <div className="info-card">

                  <span>03</span>

                  <h4>
                    Projects
                  </h4>

                  <p>
                    Learning through practical projects and
                    experimentation.
                  </p>

                </div>

              </div>

            </div>

          </section>

        </ScrollAnimation>


        {/* =========================
            SKILLS SECTION
        ========================= */}

        <ScrollAnimation>

          <section id="skills">

            <p className="skills-label">
              MY SKILLS
            </p>

            <h2>
              Technologies I Work With
            </h2>

            <p className="skills-description">
              I enjoy learning new technologies and using them to
              build responsive, interactive and user-friendly
              websites. These are some of the technologies and
              tools I have been working with during my web
              development journey.
            </p>


            <div className="skills-container">

              {/* FRONTEND */}

              <div className="skill-category">

                <div className="skill-category-header">

                  <span className="skill-number">
                    01
                  </span>

                  <h3>
                    Frontend Development
                  </h3>

                </div>

                <p>
                  Building responsive and interactive interfaces
                  using modern frontend technologies.
                </p>


                <div className="skill-list">

                  <div className="skill-item">

                    <div className="skill-info">
                      <span>HTML</span>
                      <span>Advanced</span>
                    </div>

                    <div className="skill-bar">
                      <div className="skill-progress html"></div>
                    </div>

                  </div>


                  <div className="skill-item">

                    <div className="skill-info">
                      <span>CSS</span>
                      <span>Advanced</span>
                    </div>

                    <div className="skill-bar">
                      <div className="skill-progress css"></div>
                    </div>

                  </div>


                  <div className="skill-item">

                    <div className="skill-info">
                      <span>JavaScript</span>
                      <span>Intermediate</span>
                    </div>

                    <div className="skill-bar">
                      <div className="skill-progress javascript"></div>
                    </div>

                  </div>


                  <div className="skill-item">

                    <div className="skill-info">
                      <span>React</span>
                      <span>Intermediate</span>
                    </div>

                    <div className="skill-bar">
                      <div className="skill-progress react"></div>
                    </div>

                  </div>


                  <div className="skill-item">

                    <div className="skill-info">
                      <span>Next.js</span>
                      <span>Learning</span>
                    </div>

                    <div className="skill-bar">
                      <div className="skill-progress nextjs"></div>
                    </div>

                  </div>

                </div>

              </div>


              {/* TOOLS */}

              <div className="skill-category">

                <div className="skill-category-header">

                  <span className="skill-number">
                    02
                  </span>

                  <h3>
                    Tools & Workflow
                  </h3>

                </div>

                <p>
                  Tools I use to write, manage and deploy my
                  projects.
                </p>


                <div className="tools-grid">

                  <div className="tool-card">

                    <span>VS</span>

                    <h4>
                      VS Code
                    </h4>

                    <p>
                      Code Editor
                    </p>

                  </div>


                  <div className="tool-card">

                    <span>GH</span>

                    <h4>
                      GitHub
                    </h4>

                    <p>
                      Version Control
                    </p>

                  </div>


                  <div className="tool-card">

                    <span>GT</span>

                    <h4>
                      Git
                    </h4>

                    <p>
                      Source Control
                    </p>

                  </div>


                  <div className="tool-card">

                    <span>API</span>

                    <h4>
                      APIs
                    </h4>

                    <p>
                      Data Fetching
                    </p>

                  </div>

                </div>

              </div>


              {/* CURRENTLY LEARNING */}

              <div className="learning-box">

                <div>

                  <span className="skill-number">
                    03
                  </span>

                  <h3>
                    Currently Learning
                  </h3>

                </div>

                <p>
                  I'm currently improving my JavaScript skills and
                  exploring Next.js, React and modern web development
                  practices. I learn mainly by building projects and
                  experimenting with new ideas.
                </p>

              </div>

            </div>

          </section>

        </ScrollAnimation>


        {/* =========================
            PROJECTS SECTION
        ========================= */}

        <ScrollAnimation>

          <section id="projects">

            <h2>
              My Projects
            </h2>

            <p className="section-description">
              Here are some of the projects I have built while
              developing my skills in modern web development.
            </p>


            <div className="projects-grid">


              {/* ANIVERSE */}

              <div className="project-card">

                <div className="project-content">

                  <div className="project-number">
                    01
                  </div>

                  <h3>
                    AniVerse
                  </h3>

                  <p>
                    A responsive anime website built with React.
                    It uses an API to fetch anime data and allows
                    users to explore and search for their favorite
                    anime.
                  </p>

                  <div className="project-tech">

                    <span>React</span>
                    <span>JavaScript</span>
                    <span>API</span>
                    <span>CSS</span>

                  </div>

                  <div className="project-buttons">

                    <a
                      href="https://aniverse-nu-seven.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href="https://github.com/FatimaEjaz294/Aniverse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub ↗
                    </a>

                  </div>

                </div>

              </div>


              {/* UNIVERSITY WEBSITE */}

              <div className="project-card">

                <div className="project-content">

                  <div className="project-number">
                    02
                  </div>

                  <h3>
                    University Website
                  </h3>

                  <p>
                    A responsive university website designed with
                    multiple sections to present information about
                    programs, facilities, students and university
                    services.
                  </p>

                  <div className="project-tech">

                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Responsive</span>

                  </div>

                  <div className="project-buttons">

                    <a
                      href="https://fatimaejaz294.github.io/uni-website/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href="https://github.com/FatimaEjaz294/uni-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub ↗
                    </a>

                  </div>

                </div>

              </div>


              {/* SPACE EXPLORATION */}

              <div className="project-card">

                <div className="project-content">

                  <div className="project-number">
                    03
                  </div>

                  <h3>
                    Space Exploration
                  </h3>

                  <p>
                    A multi-page space exploration website with a
                    modern responsive design, different destinations
                    and information about space travel.
                  </p>

                  <div className="project-tech">

                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Responsive</span>

                  </div>

                  <div className="project-buttons">

                    <a
                      href=" https://fatimaejaz294.github.io/space-website/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href=" https://fatimaejaz294.github.io/space-website/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub ↗
                    </a>

                  </div>

                </div>

              </div>


              {/* CURRENCY CONVERTER */}

              <div className="project-card">

                <div className="project-content">

                  <div className="project-number">
                    04
                  </div>

                  <h3>
                    Currency Converter
                  </h3>

                  <p>
                    A responsive currency converter that allows users
                    to convert currencies using exchange rate data
                    fetched from a currency API.
                  </p>

                  <div className="project-tech">

                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>API</span>

                  </div>

                  <div className="project-buttons">

                    <a
                      href="https://fatimaejaz294.github.io/currency-converter/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href="YOUR_GITHUB_LINK_HERE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub ↗
                    </a>

                  </div>

                </div>

              </div>


            </div>

          </section>

        </ScrollAnimation>


        {/* =========================
            CONTACT SECTION
        ========================= */}

        <ScrollAnimation>

          <section id="contact">

            <div className="contact-container">

              <div className="contact-text">

                <p className="contact-label">
                  GET IN TOUCH
                </p>

                <h2>
                  Let's work together.
                </h2>

                <p className="contact-description">
                  Have a project idea, a question, or just want to
                  say hello? Feel free to reach out. I'm always
                  interested in learning, creating and working on
                  new ideas.
                </p>

              </div>


              <div className="contact-card">

                <div className="contact-item">

                  <span className="contact-icon">
                    @
                  </span>

                  <div>

                    <h4>
                      Email
                    </h4>

                    <a href="mailto:deathxnote999@gmail.com">
                      deathxnote999@gmail.com
                    </a>

                  </div>

                </div>


                <div className="contact-item">

                  <span className="contact-icon">
                    GH
                  </span>

                  <div>

                    <h4>
                      GitHub
                    </h4>

                    <a
                      href="https://github.com/FatimaEjaz294"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/FatimaEjaz294
                    </a>

                  </div>

                </div>


                <a
                  href="mailto:deathxnote999@gmail.com"
                  className="contact-button"
                >
                  Send Me an Email ↗
                </a>

              </div>

            </div>

          </section>

        </ScrollAnimation>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <ScrollAnimation>
        <Footer />
      </ScrollAnimation>

    </>
  );
}