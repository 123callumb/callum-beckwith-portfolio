import Link from "next/link";

export default function NotFound() {
  return <div className="page-heading"><p className="eyebrow">404</p><h1>Page not found.</h1><p className="lead">This page may have moved, or the address may be incorrect.</p><Link className="button" href="/">Back to the homepage</Link></div>;
}
