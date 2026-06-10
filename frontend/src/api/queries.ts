import { graphQlRequest } from './graphql';
import type { Article, MigrationReport, NavigationItem, Page } from '../types/content';

export function fetchNavigation() {
  return graphQlRequest<{ navigation: NavigationItem[] }>(`query { navigation { label path } }`);
}

export function fetchPage(path: string, preview: boolean) {
  return graphQlRequest<{ pageByPath: Page | null }>(`
    query PageByPath($path: String!, $preview: Boolean) {
      pageByPath(path: $path, preview: $preview) {
        id path title status
        components { type headline text articleId imageUrl }
      }
    }
  `, { path, preview });
}

export function fetchArticle(id: string, preview: boolean) {
  return graphQlRequest<{ articleById: Article | null }>(`
    query ArticleById($id: ID!, $preview: Boolean) {
      articleById(id: $id, preview: $preview) {
        id title subtitle body author status imageUrl tags
      }
    }
  `, { id, preview });
}

export function fetchMigrationReport() {
  return graphQlRequest<{ migrationReport: MigrationReport }>(`
    query { migrationReport { imported skipped warnings } }
  `);
}
