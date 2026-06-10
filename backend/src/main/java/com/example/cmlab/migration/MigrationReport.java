package com.example.cmlab.migration;

import java.util.List;

public record MigrationReport(int imported, int skipped, List<String> warnings) {}
