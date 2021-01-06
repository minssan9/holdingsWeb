<template>
  <div id="app">
    <div class="container" style="width:600px">
      <div style="margin: 20px">
        <h3>Halla Holdings</h3>
        <h4>xxe_item_spec_info_tmp</h4>
        <h4>item upload Files</h4>
      </div>

      <item-file-upload></item-file-upload>
    </div>
  </div>
</template>

<script>
import ItemFileUpload from "../../components/item/ItemFileUpload.vue";

export default {
  name: "ItemView",
  components: {
    ItemFileUpload
  }
};
</script>