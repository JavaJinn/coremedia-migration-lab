package com.example.cmlab.content;

import com.example.cmlab.migration.MigrationReport;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ContentRepository {
  private final List<Article> articles = List.of(
    new Article("a-100", "Migration auf CoreMedia 12 vorbereiten", "Content-Modelle sauber transformieren", "<p>Dieses Beispiel simuliert typische CMS-Migrationen: Legacy-Inhalte werden bereinigt, validiert und als moderne Headless-Content-API ausgeliefert.</p><p>Wichtig sind Mapping-Regeln, Fehlertoleranz und eine klare Preview-/Publish-Trennung.</p>", "Benni Oreo", ContentStatus.PUBLISHED, "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80", List.of("CoreMedia", "Migration", "Java")),
    new Article("a-200", "React-Komponenten für Headless CMS", "Komponenten statt Templates", "<p>Frontend-Architekturen in CMS-Projekten profitieren von isolierten Komponenten, typisierten API-Modellen und sauberem Routing.</p>", "Product Team", ContentStatus.PUBLISHED, "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80", List.of("React", "TypeScript", "Frontend")),
    new Article("a-300", "Draft: Personalisierte Kampagnen", "Nur im Preview-Modus sichtbar", "<p>Dieser Inhalt ist absichtlich ein Draft und erscheint nur mit preview=true.</p>", "Editorial", ContentStatus.DRAFT, "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80", List.of("Preview", "CMS"))
  );

  private final List<Page> pages = List.of(
    new Page("p-home", "/", "CoreMedia Migration Lab", ContentStatus.PUBLISHED, List.of(
      new PageComponent("hero", "Modernisiere eine CMS-Plattform", "Java, GraphQL, React und TypeScript in einem realistischen Migrationsprojekt.", null, "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"),
      new PageComponent("teaser", "Migration auf aktuelle CoreMedia-Version", "Legacy Content wird in ein neues Headless-Modell transformiert.", "a-100", null),
      new PageComponent("teaser", "Frontend-Komponenten", "React-Komponenten konsumieren die Content Delivery API.", "a-200", null)
    )),
    new Page("p-campaign", "/kampagne", "Kampagne", ContentStatus.PUBLISHED, List.of(
      new PageComponent("hero", "Sommerkampagne 2026", "Landingpage mit wiederverwendbaren Content-Komponenten.", null, "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"),
      new PageComponent("teaser", "Preview-Inhalt testen", "Dieser Teaser verweist auf einen Draft-Artikel.", "a-300", null)
    ))
  );

  public List<Article> articles(boolean preview) {
    return articles.stream().filter(a -> preview || a.status() == ContentStatus.PUBLISHED).toList();
  }

  public Optional<Article> articleById(String id, boolean preview) {
    return articles(preview).stream().filter(a -> a.id().equals(id)).findFirst();
  }

  public List<Page> pages(boolean preview) {
    return pages.stream().filter(p -> preview || p.status() == ContentStatus.PUBLISHED).toList();
  }

  public Optional<Page> pageByPath(String path, boolean preview) {
    return pages(preview).stream().filter(p -> p.path().equals(path)).findFirst();
  }

  public List<NavigationItem> navigation() {
    return List.of(new NavigationItem("Home", "/"), new NavigationItem("Kampagne", "/kampagne"));
  }

  public MigrationReport migrationReport() {
    return new MigrationReport(3, 1, List.of(
      "legacy_article_404 übersprungen: kein Titel vorhanden",
      "Rich-Text wurde normalisiert: <font>-Tags entfernt",
      "Draft-Inhalte sind nur mit preview=true sichtbar"
    ));
  }
}
