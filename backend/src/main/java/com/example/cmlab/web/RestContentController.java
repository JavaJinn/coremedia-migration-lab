package com.example.cmlab.web;

import com.example.cmlab.content.ContentRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "${cors.allowed-origin}")
public class RestContentController {
  private final ContentRepository repository;

  public RestContentController(ContentRepository repository) { this.repository = repository; }

  @GetMapping("/health")
  public String health() { return "CoreMedia Migration Lab Backend läuft"; }

  @GetMapping("/migration-report")
  public Object migrationReport() { return repository.migrationReport(); }
}
