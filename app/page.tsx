import type { Metadata } from "next";
import { profile, strengths, experience, background, education } from "@/content/portfolio.json";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <section className="intro" aria-labelledby="intro-title">
        <p className="eyebrow">{profile.title}</p>
        <h1 id="intro-title">Hi, I’m <span>Callum.</span></h1>
        <p className="intro-subtitle">{profile.subtitle}</p>
        <p className="lead">{profile.intro}</p>
        <div className="actions">
          <a className="button" href={`mailto:${profile.email}`}>Let’s talk <span aria-hidden="true">↗</span></a>
          <a className="text-link" href={profile.socials.find((social) => social.label === "LinkedIn")?.url}>Find me on LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
        <p className="intro-note">Based in England.</p>
      </section>

      <section id="experience" className="section" aria-labelledby="experience-title">
        <div className="section-heading"><h2 id="experience-title">Experience</h2></div>
        <ol className="experience-timeline" role="list">
          {experience.map((role) => (
            <li key={role.company}>
              <p className="timeline-date">{role.label}</p>
              <article>
                <h3>{role.company}</h3>
                <p className="role-context">{role.context}</p>
                <p className="role-description">{role.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section id="approach" className="section" aria-labelledby="approach-title">
        <div className="section-heading"><h2 id="approach-title">What I do</h2></div>
        <ul className="strengths-grid">
          {strengths.map((strength) => (
            <li key={strength.title}><h3>{strength.title}</h3><p>{strength.description}</p></li>
          ))}
        </ul>
      </section>

      <section id="background" className="section" aria-labelledby="background-title">
        <div className="section-heading"><h2 id="background-title">Background</h2></div>
        <div className="background-copy">{background.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <p className="education"><span aria-hidden="true">↳</span> {education}</p>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <p className="section-label">Have something in mind?</p><h2 id="contact-title">Let’s talk.</h2>
        <p>Talk to me about software, practical AI, or the team behind your next product.</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a>
        <div className="contact-secondary"><a href={profile.cv} download>Download my CV (PDF) <span aria-hidden="true">↓</span></a><span>Experience, skills and education in one page.</span></div>
      </section>
    </>
  );
}
