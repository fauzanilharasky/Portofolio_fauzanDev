export declare class Project {
    id: number;
    title?: string | null;
    slug: string;
    short_description: string | null;
    full_description: string | null;
    category: string | null;
    role: string | null;
    status: string | null;
    start_date: Date | null;
    end_date: Date | null;
    cover_image: string | null;
    github_url: string | null;
    demo_url: string | null;
    documentation_url: string | null;
    created_at: Date;
    updated_at: Date;
}
