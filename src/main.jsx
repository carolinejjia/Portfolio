
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import portrait from './IMG_0053.jpg';

const profile = {
  name: 'Caroline Jia',
  description: `I am an intersection of seemingly unrelated interests. As a Computer Science and Political Science double I often get the question of why.
              But I don't have the career-oriented answer most people provide. As a programmer, I enjoy the satisfaction of making a program coming together and the boundless creativity
               I can exercise. As a political scientist, I am intrigued by sociopolitical forces and culture that shape our lives. To me, it is important to be aware of how my work
               as an engineer affects society. My two majors are more similar than they seem: they both build systems that shape society, just from different sides. `,
  email: 'cjia4@jh.edu',
  linkedin: 'https://www.linkedin.com/in/carolinejjia/',
};

const experiences = [
  {
    number: '01',
    category: 'SOFTWARE ENGINEERING',
    title: 'Software Engineer Intern',
    organization: 'Badger Meter',
    bullets: [
      "Built a full-stack user activity lookup tool with React, TypeScript, and a Python Flask REST API, reducing lookup time from 15 minutes to 5 seconds.",
      "Integrated AWS Cognito authentication, Lambda event-driven processing, DynamoDB session storage, and CloudWatch logging to support the application’s cloud infrastructure.",
      "Queried MySQL relational databases and Elasticsearch indices to surface user data"
    ],
    location: 'Milwaukee, WI',
    dates: 'June 2026 - August 2026'
  },
  {
    number: '02',
    category: 'SOFTWARE ENGINEERING',
    title: 'LLM Data Clustering Analyst',
    organization: 'HICode Lab, Johns Hopkins University',
    bullets: [
      `Developed a Python LLM pipeline on the OpenAI API to perform hierarchical inductive clustering on the Opioid
      Industry Documents Archive, generating insights for a targeted research question`,
      "Processed 2,500 text segments into labels and evaluated clustering quality and relevance across models",
      "Parsed raw JSON annotation outputs into Pandas DataFrames to visualize segment text, source metadata, human labels, confidence scores, and clustering results"
    ],
    location: 'Baltimore, MD',
    dates: 'January 2026 - June 2026'
  },
  {
    number: '03',
    category: 'SOFTWARE ENGINEERING',
    title: 'Research Assistant',
    organization: 'Delineo Disease Modeling Lab, Johns Hopkins University',
    bullets: [
      `Developed React.js frontend components in JavaScript and CSS for Delineo, a disease-modeling simulator built
      in collaboration with WHO and AWS`,
      "Enhanced interactive UI/UX to help users visualize epidemiological simulations, model behavior, and disease-spread outputs",
      "Advanced interactive visualizations of epidemiological simulations to help users explore disease-spread patterns and model behavior"
    ],
    location: 'Baltimore, MD',
    dates: 'August 2025 - December 2025',
    projectTitle: "Delineo Disease Modeling Simulator",
    projectLink: "https://covidmod.isi.jhu.edu/"
  },
];

const editorialExperiences = [
  {
    category: 'JOURNALISM & EDITORIAL LEADERSHIP',
    title: 'Senior Editor-in-Chief',
    organization: 'Noctiluca Student Newspaper',
    description: 'I first began writing for the Noctiluca student newspaper authoring articles about a variety of genres, from entertainment to opinions and features. Eventually, I became the Junior Editor-in-chief, and then the Senior Editor-in-chief. In this role, I led the production of a total of 9 issues, overseeing a team of 10 editors and 20+ writers. I expanded the newspaper to include an interactive games, such as our own rendition of "Where\'s Waldo" but with our own students. Additionally, I co-founded a video broadcast branch of the newspaper. ',
  },
  {
    category: 'JOURNALISM & EDITORIAL LEADERSHIP',
    title: 'Co-Founder',
    organization: 'Spark Shorts Video Broadcast Series',
    description: 'Spark Shorts, my school’s video broadcast series began as a burst of creativity at 3 a.m. Freshly out of the pandemic, my school’s student body suffered a severe lack of connectivity and enthusiasm. Spark shorts began with five weekly segments, and eventually expanded to nine, with the team doubling from six to thirteen, including directors, hosts, and video editors. Videos amassed over fifty thousand views total. My own gameshow segment "Spit It Out" encouraged participants to spit out the truth to thought-provoking questions or risk spitting out a mystery drink.',
  },
  {
    category: 'INTERNATIONAL AFFAIRS',
    title: 'Model United Nations Travel Team',
    organization: 'Johns Hopkins University',
    description: 'Participated in Model United Nations conferences, representing various countries and engaging in diplomatic negotiation on global issues. Attended weekly trainings to develop public speaking, research, and policy analysis skills.',
    link: '',
    linkLabel: 'View related work'
  },
  {
    category: 'GOVERNMENT & POLICY',
    title: 'Youth Secretary of State',
    organization: 'Wisconsin Youth in Government',
    description: 'As the elected Youth Secretary of State, I participated in bi-weekly meetings to organize the statewide model government conference. During the conference, I facilitated elections and oversaw the passage of peer-written bills. As a Supreme Court member in previous years, I won the outstanding Supreme Court delegate award, and I\'m proud to say I have won every case I argued in my entire time in the program!',
    link: '',
    linkLabel: 'View related work'
  },
];

const writing = [
  {
    category: 'JOURNALISM',
    title: 'Peace, Passion, and the Pub Lab',
    description: 'An article I wrote detailing how a cramped and dingy room buried in the corner of the library became mine and many others\' safe space',
    link: 'https://drive.google.com/file/d/1dUQ2QuNrWhWstE7KVipX-eRaCUwteNYL/view?usp=drive_link',
    linkLabel: 'View work'
  },
  {
    category: 'Journalism',
    title: 'You Actually Know Nothing: How the Commodification of Information has Destroyed Us',
    description: 'This piece is a bit longer: it\'s an in depth analysis of my thoughts on the age of entertainment, beginning with a history of media and following how it has transformed in form and purpose. ',
    link: 'https://drive.google.com/file/d/1bgeZDxX-WEJi8kwHyc3JpCvTj1RPud2p/view?usp=sharing',
    linkLabel: 'View work'
  },
  {
    category: 'Journalism',
    title: 'February 2024 Noctiluca Issue',
    description: 'An Issue for which I was the Editor-in-Chief, overseeing the planning and production of the issue and editing articles. ',
    link: 'https://drive.google.com/file/d/15eAoUKMs7hbZFMYL_wV5fquoTmMTApJO/view?usp=sharing',
    linkLabel: 'View work'
  },
  {
    category: 'Journalism',
    title: 'January 2024 Noctiluca Issue - Interactive Edition',
    description: 'Another Issue for which I was the Editor-in-Chief. To kickstart the new year, our team created an interactive edition of the newspaper, with crossword puzzles, sudoku, and countless more fun games. ',
    link: 'https://drive.google.com/file/d/1t80CoDZn1x9dJIioQy_8ict1Hb49l1Gw/view?usp=sharing',
    linkLabel: 'View work'
  }
];

function ExternalLink({ href, children }) {
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {children} ↗
    </a>
  ) : (
    <span className="pending">
      {children} · link coming soon
    </span>
  );
}

function App() {
  return (
    <>
      <header className="topbar">
        <nav aria-label="Main navigation">
          <a href="#about">About Me</a>
          <a href="#experience">Software Experience</a>
          <a href="#writing">Journalism &amp; Policy</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">

        
{/* HERO / ABOUT */}
<section className="hero wrap" id="about">
  <div className="hero-content">

    <div className="hero-text">
      <div className="eyebrow">
        <span className="rule" />
        AN ENGINEERING &amp; EDITORIAL PORTFOLIO
      </div>

      <h1>{profile.name}</h1>

      <h2 className="hero-occupation">
        Computer Science &amp; Political Science
      </h2>

      <h3 className="hero-university">
        Junior at Johns Hopkins University
      </h3>

      <div className="hero-about">
        <span className="mission-label">ABOUT ME</span>
        <p>{profile.description}</p>
      </div>

      <a className="hero-explore" href="#experience">
        Explore my experience ↓
      </a>
    </div>

    <div className="hero-photo-container">
      <img
        src={portrait}
        alt="Portrait of Caroline Jia"
        className="hero-photo"
      />
    </div>

  </div>
</section>


        {/* SOFTWARE ENGINEERING EXPERIENCE */}
        <section className="work-section" id="experience">
          <div className="wrap">

            <div className="section-heading">
              <span className="section-index">
                I. / SOFTWARE ENGINEERING EXPERIENCE
              </span>

              <h2>
                Building <em>with code.</em>
              </h2>

              <p>
                Software engineering roles and technical contributions
              </p>
            </div>

            <div className="experience-list">
              {experiences.map((e) => (
                <article className="experience-row" key={e.number}>

                  <div className="experience-number">
                    {e.number}
                  </div>

                  <div className="experience-details">
                    <span className="category">
                      {e.category}
                    </span>

                    <h3>{e.title}</h3>

                    <div className="experience-organization">
                      {e.organization}
                    </div>

                    {e.description && (
                      <p>{e.description}</p>
                    )}

                    {/* BULLET POINTS */}
                    {e.bullets?.length > 0 && (
                      <ul className="experience-bullets">
                        {e.bullets.map((bullet, index) => (
                          <li key={index}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    
                    {e.projectLink && (
                      <div className="experience-project">
                        <a
                          href={e.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-project-title"
                        >
                          {e.projectTitle} ↗
                        </a>
                      </div>
                    )}



                    </div>

                  <div className="experience-action">
                    <div className="experience-meta">
                      <span className="experience-location">
                        {e.location}
                      </span>

                      <span className="experience-dates">
                        {e.dates}
                      </span>
                    </div>
                  </div>

                </article>
              ))}
            </div>

          </div>
        </section>

        {/* JOURNALISM & PUBLIC AFFAIRS */}
        <section className="writing-section wrap" id="writing">

          <div className="section-heading">
            <span className="section-index">
              II. / JOURNALISM &amp; POLICY
            </span>

            <h2>
              Building <em>with words.</em>
            </h2>

            <p>
              Editorial leadership, civic engagement, and selected writing
            </p>
          </div>

          <h3 className="subsection-title">
            Experience &amp; involvement
          </h3>

          <div className="article-list">
            {editorialExperiences.map((e, i) => (
              <article className="article-row" key={e.title}>

                <div className="article-num">
                  0{i + 1}
                </div>

                <div>
                  <span className="category">
                    {e.category}
                  </span>

                  <h3>{e.title}</h3>

                  <div className="experience-organization">
                    {e.organization}
                  </div>            
                <p>{e.description}</p>
                {i === 0 && (
                  <a className="journalism-explore" href="#selected-writing">
                    Check out my writing and newspaper issues I've directed ↓
                  </a>
                )}

                </div>

                

              </article>
            ))}
          </div>

          <h3 className="subsection-title writing-subsection" id="selected-writing">
            Selected writing &amp; editorial work
          </h3>

          <div className="article-list">
            {writing.map((a, i) => (
              <article className="article-row" key={i}>

                <div className="article-num">
                  0{i + 1}
                </div>

                <div>
                  <span className="category">
                    {a.category}
                  </span>

                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                </div>

                <div className="article-link">
                  <ExternalLink href={a.link}>
                    {a.linkLabel}
                  </ExternalLink>
                </div>

              </article>
            ))}
          </div>

         

        </section>

        {/* CONTACT */}
        <section className="contact-section wrap" id="contact">
          <span className="section-index">
            III. / GET IN TOUCH
          </span>

          <h2>
            Let's <em>connect.</em>
          </h2>

          <p>
            Interested in connecting? You can find me here.
          </p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              Email ↗
            </a>

            

            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </section>

      </main>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>

        <span>
          THANK YOU FOR YOUR TIME · HOPE YOU ENJOYED LEARNING ABOUT ME!
        </span>

        <a href="#top">
          BACK TO TOP ↑
        </a>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
