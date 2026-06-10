package com.example.cmlab.migration;

public record LegacyArticle(String legacyId, String headline, String teaser, String htmlBody, String creator, boolean publishable) {}
