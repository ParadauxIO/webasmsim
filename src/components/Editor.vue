<template>
  <div class="container">
    <div class="editor item">
      <h1> Editor </h1>
      <v-ace-editor
          v-model:value="content"
          @init="editorInit"
          lang="html"
          theme="chrome"
          style="height: 50rem"/>
    </div>
    <div class="register-view item">
      <h1> Registers </h1>
      <table>
        <tr>
          <th>Decimal</th>
          <th>Hex</th>
          <th>Char</th>
          <th>Binary</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {VAceEditor} from 'vue3-ace-editor';
import {ref} from "@vue/reactivity";

export default {
  name: "Editor",
  data() {
    let content = ref(null);
    let editorInit = ref(null);

    return {content, editorInit}
  },
  components: {
    VAceEditor,
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 100%;
  max-height: 100%;
  padding-left: 3%;
  padding-right: 3%;
}

.item {
  margin:3%;
}

.editor {
  flex: 4;
}

.register-view {

}
</style>