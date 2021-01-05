<template>
  <div id="app">
    <div class="container" style="width:600px">
      <div style="margin: 20px">
        <h3>bezkoder.com</h3>
        <h4>Vue.js upload Files</h4>
      </div>

      <inv-file-upload></inv-file-upload>
    </div>
  </div>
</template>

<script>
import InvFileUpload from "../../components/inv/InvFileUpload.vue";

export default {
  name: "InvView",
  components: {
    InvFileUpload
  }
};
</script>