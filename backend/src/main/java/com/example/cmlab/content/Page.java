package com.example.cmlab.content;

import java.util.List;

public record Page(String id, String path, String title, ContentStatus status, List<PageComponent> components) {}
