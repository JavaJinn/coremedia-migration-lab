import { useQuery } from '@tanstack/react-query';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchPage } from '../api/queries';
import { ComponentRenderer } from '../components/ComponentRenderer';

export function PageView() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const preview = searchParams.get('preview') === 'true';
  const query = useQuery({ queryKey: ['page', location.pathname, preview], queryFn: () => fetchPage(location.pathname, preview) });

  if (query.isLoading) return <p className="container">Lade Seite...</p>;
  if (query.error) return <p className="container error">{query.error.message}</p>;
  if (!query.data?.pageByPath) return <p className="container">Seite nicht gefunden.</p>;

  return (
    <div>
      {query.data.pageByPath.components.map((component, index) => (
        <ComponentRenderer key={`${component.type}-${index}`} component={component} />
      ))}
    </div>
  );
}
