package com.example.cmlab;

import com.example.cmlab.content.ContentRepository;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class ContentRepositoryTest {
  @Test
  void draftArticleIsHiddenWithoutPreview() {
    ContentRepository repository = new ContentRepository();
    assertThat(repository.articleById("a-300", false)).isEmpty();
    assertThat(repository.articleById("a-300", true)).isPresent();
  }
}
