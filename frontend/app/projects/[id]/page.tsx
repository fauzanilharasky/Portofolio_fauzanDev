import Link from 'next/link';
import { getProject } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let project;
  try { project = await getProject(id); } catch { project = null; }
  if (!project) return <main className="shell empty"><Link href="/">← Back home</Link><h1>Project not found</h1></main>;
  return <main className="detail shell"><Link className="back-link" href="/">← Back to portfolio</Link><p className="eyebrow">{project.category || 'PROJECT'} / {project.status || 'SELECTED WORK'}</p><h1>{project.title || project.slug}</h1><div className="detail-layout"><div>{project.cover_image && <img className="detail-image" src={project.cover_image} alt={project.title || ''} />}<p className="detail-description">{project.full_description || project.short_description || 'No description available.'}</p></div><aside><p className="section-label">PROJECT INFO</p>{project.role && <p><strong>Role</strong>{project.role}</p>}{project.start_date && <p><strong>Timeline</strong>{project.start_date} {project.end_date ? `— ${project.end_date}` : '— Present'}</p>}<div className="detail-links">{project.demo_url && <a href={project.demo_url} target="_blank" rel="noreferrer">Live demo ↗</a>}{project.github_url && <a href={project.github_url} target="_blank" rel="noreferrer">Source code ↗</a>}{project.documentation_url && <a href={project.documentation_url} target="_blank" rel="noreferrer">Documentation ↗</a>}</div></aside></div></main>;
}
