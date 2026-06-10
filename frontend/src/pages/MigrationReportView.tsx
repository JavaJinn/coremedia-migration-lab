import { useQuery } from '@tanstack/react-query';
import { fetchMigrationReport } from '../api/queries';

export function MigrationReportView() {
  const query = useQuery({ queryKey: ['migration-report'], queryFn: fetchMigrationReport });
  if (query.isLoading) return <p className="container">Lade Migration Report...</p>;
  const report = query.data?.migrationReport;
  return (
    <section className="container report">
      <h1>Migration Report</h1>
      <div className="stats">
        <strong>{report?.imported ?? 0}</strong><span>importiert</span>
        <strong>{report?.skipped ?? 0}</strong><span>übersprungen</span>
      </div>
      <h2>Warnungen</h2>
      <ul>{report?.warnings.map(warning => <li key={warning}>{warning}</li>)}</ul>
    </section>
  );
}
