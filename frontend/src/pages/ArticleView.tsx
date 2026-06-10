import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchArticle } from '../api/queries';

export function ArticleView() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const preview = searchParams.get('preview') === 'true';
  const query = useQuery({ queryKey: ['article', id, preview], queryFn: () => fetchArticle(id!, preview), enabled: Boolean(id) });

  if (query.isLoading) return <p className="container">Lade Artikel...</p>;
  if (query.error) return <p className="container error">{query.error.message}</p>;
  const article = query.data?.articleById;
  if (!article) return <p className="container">Artikel nicht gefunden. Für Drafts nutze <code>?preview=true</code>.</p>;

  return (
    <article className="article container">
      {article.imageUrl && <img src={article.imageUrl} alt="" />}
      <p className="eyebrow">{article.status} · {article.author}</p>
      <h1>{article.title}</h1>
      {article.subtitle && <p className="lead">{article.subtitle}</p>}
      <div className="richtext" dangerouslySetInnerHTML={{ __html: article.body }} />
      <div className="tags">{article.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}
