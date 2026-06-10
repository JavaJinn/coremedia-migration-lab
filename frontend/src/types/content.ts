export type ContentStatus = 'DRAFT' | 'PUBLISHED';

export type PageComponent = {
  type: 'hero' | 'teaser' | string;
  headline: string;
  text?: string | null;
  articleId?: string | null;
  imageUrl?: string | null;
};

export type Page = {
  id: string;
  path: string;
  title: string;
  status: ContentStatus;
  components: PageComponent[];
};

export type Article = {
  id: string;
  title: string;
  subtitle?: string | null;
  body: string;
  author: string;
  status: ContentStatus;
  imageUrl?: string | null;
  tags: string[];
};

export type NavigationItem = { label: string; path: string };
export type MigrationReport = { imported: number; skipped: number; warnings: string[] };
