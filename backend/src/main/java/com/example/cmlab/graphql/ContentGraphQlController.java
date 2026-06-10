package com.example.cmlab.graphql;

import com.example.cmlab.content.*;
import com.example.cmlab.migration.MigrationReport;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ContentGraphQlController {
  private final ContentRepository repository;

  public ContentGraphQlController(ContentRepository repository) {
    this.repository = repository;
  }

  @QueryMapping
  public List<Page> pages() { return repository.pages(false); }

  @QueryMapping
  public Page pageByPath(@Argument String path, @Argument Boolean preview) {
    return repository.pageByPath(path, Boolean.TRUE.equals(preview)).orElse(null);
  }

  @QueryMapping
  public Article articleById(@Argument String id, @Argument Boolean preview) {
    return repository.articleById(id, Boolean.TRUE.equals(preview)).orElse(null);
  }

  @QueryMapping
  public List<NavigationItem> navigation() { return repository.navigation(); }

  @QueryMapping
  public MigrationReport migrationReport() { return repository.migrationReport(); }
}
