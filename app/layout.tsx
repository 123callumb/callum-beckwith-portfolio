import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { profile } from "@/content/portfolio.json";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: { default: "Callum Beckwith | Lead Software Engineer · AI & Product Development", template: "%s | Callum Beckwith" },
  description: profile.intro,
  openGraph: {
    title: "Callum Beckwith | Lead Software Engineer · AI & Product Development",
    description: profile.intro,
    siteName: profile.name,
    type: "website",
    locale: "en_GB",
  },
  icons: {
    icon: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header container">
          <Link className="wordmark" href="/" aria-label="Callum Beckwith — home"><span className="monogram" aria-hidden="true">cb<span>.</span></span><span className="wordmark-name">Callum Beckwith</span></Link>
          <nav aria-label="Main navigation">
            <Link href="/#experience">Experience</Link>
            <Link href="/#approach">What I do</Link>
            <Link href="/#contact">Contact <span aria-hidden="true">↗</span></Link>
          </nav>
        </header>
        <main id="main-content" className="container" tabIndex={-1}>{children}</main>
        <footer className="site-footer container">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <nav aria-label="Social links">
            {profile.socials.map((social) => <a key={social.label} href={social.url}>{social.label}</a>)}
          </nav>
        </footer>
      </body>
    </html>
  );
}
