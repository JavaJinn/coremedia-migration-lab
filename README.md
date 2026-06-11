# CoreMedia Migration Lab

Ein lauffähiges Fullstack-Lernprojekt für ein Profil mit Java, JavaScript, TypeScript, React, HTML5, CMS-Migration, CoreMedia-naher Headless-Architektur und Jira-Workflow.

## Was ist enthalten?

- `backend/`: Spring Boot 3, Java 17, GraphQL, REST, Preview-/Publish-Logik, Migration Report
- `frontend/`: React 18, TypeScript, Vite, React Router, TanStack Query
- Beispiel-Content für Seiten, Artikel, Teaser, Kampagnen und Drafts
- CoreMedia-nahe Konzepte: Content Types, Page Components, Headless Delivery, Preview Mode, Migration Report

## Voraussetzungen

Installieren:

1. **Java JDK 17 oder neuer**
2. **Maven 3.9+**
3. **Node.js 20 LTS oder neuer**
4. **npm** kommt normalerweise mit Node.js
5. Optional: **Docker Desktop**
6. Optional: **IntelliJ IDEA** oder **VS Code**

Prüfen:

```bash
java -version
mvn -version
node -v
npm -v
```

## Projekt starten

### 1. Backend starten

```bash
cd backend
mvn spring-boot:run
```

Backend läuft danach auf:

```text
http://localhost:8081
```

Health Check:

```text
http://localhost:8081/api/health
```

GraphiQL:

```text
http://localhost:8081/graphiql
```

Beispiel-Query:

```graphql
query {
  pageByPath(path: "/", preview: false) {
    title
    components {
      type
      headline
      text
      articleId
    }
  }
}
```

Preview-Beispiel:

```graphql
query {
  articleById(id: "a-300", preview: true) {
    title
    status
  }
}
```

### 2. Frontend starten

In einem zweiten Terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend läuft danach auf:

```text
http://localhost:5173
```

Preview-Modus:

```text
http://localhost:5173/?preview=true
http://localhost:5173/artikel/a-300?preview=true
```

## Tests ausführen

Backend:

```bash
cd backend
mvn test
```

Frontend:

```bash
cd frontend
npm test
```

## Projektstruktur

```text
coremedia-migration-lab/
├── backend/
│   ├── src/main/java/com/example/cmlab/
│   │   ├── content/        # Content-Modelle und Repository
│   │   ├── graphql/        # GraphQL Controller
│   │   ├── migration/      # Legacy-/Migration-Modelle
│   │   └── web/            # REST, CORS
│   └── src/main/resources/graphql/schema.graphqls
├── frontend/
│   ├── src/api/            # GraphQL Client und Queries
│   ├── src/components/     # Hero, Teaser, Renderer, Layout
│   ├── src/pages/          # Page, Article, Migration Report
│   └── src/types/          # TypeScript Content Types
└── README.md
```

## Lernziele

### Java / Spring Boot

- REST Controller verstehen
- GraphQL Query Resolver bauen
- Records, Enums und Repository-Strukturen üben
- Tests mit JUnit schreiben
- CORS für Frontend-Integration konfigurieren

### CMS / CoreMedia-nahe Konzepte

- Content Types modellieren
- Seiten aus Komponenten zusammensetzen
- Draft und Published Content trennen
- Headless Delivery API verstehen
- Migration Report und Validierungswarnungen erzeugen

### React / TypeScript

- Komponentenbasiertes Rendering
- API-Typen sauber modellieren
- Routing mit React Router
- Server State mit TanStack Query
- Rich Text Rendering und Preview-Modus

## Jira-Ticket-Backlog

Nutze diese Tickets als Übungsplan:

### CMS-001: Persistenz einführen

Ersetze das In-Memory-Repository durch PostgreSQL oder H2 mit Spring Data JPA.

Akzeptanzkriterien:

- Artikel und Seiten liegen in einer Datenbank
- Flyway-Migrationen legen Tabellen an
- Tests laufen weiter

### CMS-002: Legacy Import Endpoint bauen

Erstelle einen REST Endpoint `/api/migration/import`, der Legacy-Daten importiert.

Akzeptanzkriterien:

- Ungültige Legacy-Inhalte werden übersprungen
- Migration Report enthält Fehler und Warnungen
- Import ist idempotent

### CMS-003: Rich Text Sanitizing

Baue eine Sanitizing-Schicht für Rich Text.

Akzeptanzkriterien:

- Gefährliche Tags werden entfernt
- Erlaubte Tags bleiben erhalten
- Unit Tests prüfen XSS-Fälle

### CMS-004: Component Registry im Frontend

Ersetze die `if`-Logik im `ComponentRenderer` durch eine Registry.

Akzeptanzkriterien:

- Neue Komponenten können einfach registriert werden
- Unbekannte Komponenten zeigen eine Fallback-Komponente

### CMS-005: Storybook ergänzen

Installiere Storybook und dokumentiere Hero, Teaser und Article Header.

Akzeptanzkriterien:

- Komponenten sind isoliert testbar
- Beispielzustände für Published und Preview existieren

### CMS-006: Performance verbessern

Optimiere Bilder und Routen.

Akzeptanzkriterien:

- Lazy Loading für Artikelrouten
- Lighthouse Performance über 90
- Bilder besitzen sinnvolle Größen

### CMS-007: Jira-Arbeitsweise simulieren

Lege Branches nach Ticketnummern an.

Beispiel:

```bash
git checkout -b feature/CMS-004-component-registry
```

Definition of Done:

- Code gebaut
- Tests grün
- README ergänzt
- Pull Request Beschreibung geschrieben

## Typische Interview-Erklärung

Dieses Projekt simuliert die Modernisierung einer bestehenden CMS-Plattform. Das Backend stellt eine CoreMedia-nahe Headless Delivery API über GraphQL bereit. Legacy-Inhalte werden in moderne Content Types transformiert. Das React/TypeScript-Frontend rendert Seiten dynamisch aus CMS-Komponenten und unterstützt einen Preview-Modus für unveröffentlichte Inhalte. Dadurch werden CMS-Migration, moderne Frontend-Architektur, Java-Backend-Entwicklung und agile Ticketarbeit realistisch trainiert.
