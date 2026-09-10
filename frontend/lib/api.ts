export type Project = {
  id: number;
  title?: string | null;
  slug: string;
  short_description?: string | null;
  full_description?: string | null;
  category?: string | null;
  role?: string | null;
  status?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  cover_image?: string | null;
  github_url?: string | null;
  demo_url?: string | null;
  documentation_url?: string | null;
};

const apiUrl = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${apiUrl}/api/projects`, {
    next: { revalidate: 60 },
  });
  if (!response.ok) throw new Error("Unable to load projects");
  return response.json();
}

export async function getProject(id: string): Promise<Project> {
  const response = await fetch(`${apiUrl}/api/projects/${id}`, {
    next: { revalidate: 60 },
  });
  if (!response.ok) throw new Error("Project not found");
  return response.json();
}

export async function createProject(data: Record<string, string>) {
  const response = await fetch(`${apiUrl}/api/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok)
    throw new Error(result.message || "Unable to create project");
  return result as Project;
}
