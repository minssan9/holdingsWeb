<template>
  <div id="app">
    <div
      class="container"
      style="width:600px"
    > 

      <itemUpload />
      <itemList />
    </div>
  </div>
</template>

<script>
import itemUpload from '@/components/item/itemUpload';
import itemList from '@/components/item/itemUploadList';

export default {
  name: "itemView",
  components: {
    itemUpload,
    itemList
  }
};
</script>
