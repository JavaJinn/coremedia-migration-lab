import { Link, useSearchParams } from 'react-router-dom';

type Props = { headline: string; text?: string | null; articleId?: string | null };

export function Teaser({ headline, text, articleId }: Props) {
  const [params] = useSearchParams();
  const suffix = params.get('preview') === 'true' ? '?preview=true' : '';

  return (
    <article className="card">
      <h2>{headline}</h2>
      {text && <p>{text}</p>}
      {articleId && <Link to={`/artikel/${articleId}${suffix}`}>Artikel öffnen</Link>}
    </article>
  );
}
