<template>
  <div id="app">
    <div class="container" style="width:600px">
      <div style="margin: 20px">
        <h3>{{ viewName }}</h3>
        <h4>{{ functionName }}</h4>
      </div>

      <excel-upload></excel-upload>
    </div>
  </div>
</template>

<script>
import ExcelUpload from "../../components/excel/excelUpload.vue";

export default {
  name: "InvView",
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
    ExcelUpload
  }
};
</script>
