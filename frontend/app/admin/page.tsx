'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { createProject } from '@/lib/api';

export default function AdminPage() {
  const [message, setMessage] = useState('');
  const [pending, setPending] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setPending(true); setMessage('');
    const form = new FormData(event.currentTarget); const data = Object.fromEntries(form.entries()) as Record<string, string>;
    data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    try { await createProject(data); setMessage('Project added successfully.'); event.currentTarget.reset(); } catch (error) { setMessage(error instanceof Error ? error.message : 'Something went wrong.'); } finally { setPending(false); }
  }
  return <main className="admin shell"><Link className="back-link" href="/">← Back to portfolio</Link><p className="eyebrow">ADMIN / PROJECTS</p><h1>Add a project</h1><p className="admin-intro">Use a hosted image URL. Files stored on a serverless filesystem will not persist between deployments.</p><form onSubmit={submit}><label>Title<input name="title" required /></label><div className="form-row"><label>Category<input name="category" placeholder="Web app" /></label><label>Role<input name="role" placeholder="Full-stack developer" /></label></div><label>Short description<textarea name="short_description" required rows={3} /></label><label>Full description<textarea name="full_description" rows={6} /></label><div className="form-row"><label>Status<select name="status"><option>Completed</option><option>In Progress</option></select></label><label>Cover image URL<input name="cover_image" type="url" required placeholder="https://..." /></label></div><div className="form-row"><label>GitHub URL<input name="github_url" type="url" /></label><label>Demo URL<input name="demo_url" type="url" /></label></div><button className="button button-primary" disabled={pending}>{pending ? 'Saving...' : 'Save project →'}</button>{message && <p className="form-message">{message}</p>}</form></main>;
}
