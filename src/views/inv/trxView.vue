<template>
  <div id="app">
    <div class="container" style="width:600px">
      <div style="margin: 20px">
        <h4>Vue.js upload Files</h4>
      </div>

      <itemList></itemList>

      <inv-file-upload></inv-file-upload>
    </div>
  </div>
</template>

<script>
import ExcelUpload from "../../components/excel/excelUpload.vue";
import InvTrxList from "../../components/inv/trx/invTrxList.vue";

export default {
  name: "InvTrxView",
  data() {
    return {
      viewName: "defaultViewName",
      functionName: "defaultFunctionName"
    };
  },
  created() {
    this.viewName =this.$route.path
  },
  components: {
    ExcelUpload,
    InvTrxList
  }
};
</script>
