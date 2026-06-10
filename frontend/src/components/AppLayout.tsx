import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchNavigation } from '../api/queries';

export function AppLayout() {
  const [searchParams] = useSearchParams();
  const preview = searchParams.get('preview') === 'true';
  const nav = useQuery({ queryKey: ['navigation'], queryFn: fetchNavigation });
  const suffix = preview ? '?preview=true' : '';

  return (
    <div>
      <header className="topbar">
        <Link className="brand" to={`/${suffix}`}>CoreMedia Migration Lab</Link>
        <nav>
          {nav.data?.navigation.map(item => (
            <Link key={item.path} to={`${item.path}${suffix}`}>{item.label}</Link>
          ))}
          <Link to={`/migration-report${suffix}`}>Migration Report</Link>
        </nav>
        <span className={preview ? 'badge badge-preview' : 'badge'}>{preview ? 'Preview' : 'Published'}</span>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
