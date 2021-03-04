<template>
  <div id="app">
    <div
      class="container"
      style="width:600px"
    >
      <div style="margin: 20px">
        <h3>bezkoder.com</h3>
        <h4>Vue.js upload Files</h4>
      </div>

      <ItemFileUpload />
    </div>
  </div>
</template>

<script>
import ItemFileUpload from "@/components/item/ItemUpload.vue";

export default {
  name: "ItemView",
  components: {
    ItemFileUpload
  }
};
</script>
