package com.example.cmlab.content;

import java.util.List;

public record Article(
  String id,
  String title,
  String subtitle,
  String body,
  String author,
  ContentStatus status,
  String imageUrl,
  List<String> tags
) {}
