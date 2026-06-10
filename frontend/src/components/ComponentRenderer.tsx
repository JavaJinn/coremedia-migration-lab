import type { PageComponent } from '../types/content';
import { Hero } from './Hero';
import { Teaser } from './Teaser';

export function ComponentRenderer({ component }: { component: PageComponent }) {
  if (component.type === 'hero') {
    return <Hero headline={component.headline} text={component.text} imageUrl={component.imageUrl} />;
  }
  if (component.type === 'teaser') {
    return <Teaser headline={component.headline} text={component.text} articleId={component.articleId} />;
  }
  return <pre>Unbekannte Komponente: {component.type}</pre>;
}
