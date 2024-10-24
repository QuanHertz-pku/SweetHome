<template>
  <div ref="editorjs" class="editorjs-container"></div>
</template>

<script>
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Image from '@editorjs/image';
import Paragraph from '@editorjs/paragraph';

export default {
  name: 'EditorComponent',
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.initializeEditor();
  },
  beforeUnmounted() {
    if (this.editor) {
      this.editor.destroy();
    }
  },
  methods: {
    initializeEditor() {
      this.editor = new EditorJS({
        holder: this.$refs.editorjs,
        tools: {
          header: Header,
          list: List,
          image: Image,
          paragraph: Paragraph,
        },
        data: {
          time: 1550476186479,
          blocks: [
            {
              type: 'header',
              data: {
                text: 'Welcome to Editor.js',
                level: 2,
              },
            },
            {
              type: 'paragraph',
              data: {
                text: 'This is a paragraph block.',
              },
            },
          ],
          version: '2.12.4',
        },
      });
    },
  },
};
</script>

<style scoped>
.editorjs-container {
  border: 1px solid #ccc;
  padding: 10px;
  min-height: 300px;
}
</style>