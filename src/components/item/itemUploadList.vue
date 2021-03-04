
<template>
  <div id="itemUpload">
    <table class="table table-striped table-bordered" id="dataTable">
      <tbody>
        <tr v-for="data in dataList" v-bind:key="data.item_number" v-on:click="'tel:' + data.item_number">
          <td class="d-none d-sm-block">{{data.item_number}}</td>
          <td class="d-none d-sm-block">{{data.group_id}}</td>
          <td class="d-none d-sm-block">{{data.before_number}}</td>
          <td class="d-none d-sm-block">{{data.before_compatible}}</td>
          <td class="d-none d-sm-block">{{data.before_effective_date}}</td>
          <td class="d-none d-sm-block">{{data.after_number}}</td>
          <td class="d-none d-sm-block">{{data.after_compatible}}</td>
          <td class="d-none d-sm-block">{{data.after_effective_date}}</td>
          <td class="d-none d-sm-block">{{data.ifflag}}</td>
          <td class="d-none d-sm-block">{{data.creation_date}}</td>
          <td class="d-none d-sm-block">{{data.created_by}}</td>
          <td class="d-none d-sm-block">{{data.last_update_date}}</td>
          <td class="d-none d-sm-block">{{data.last_updated_by}}</td>
          <!-- <td class="">
            <button
              v-show="data.attach"
              class="btn btn-indigo btn-sm"
              type="button"
              @click="fileDown(data)"
            >다운로드</button>
          </td>
          <td class="genre">
            <button
              class="btn btn-indigo btn-sm"
              type="button"
              id="endDamage"
              @click="enditdamage(data)"
            >완료</button>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import crudService from "@/services/crudService";

export default {
  name: "itemList",
  data() {
    return {
      route:"item/upload",
      datepicker: new Date(),
      dataList: []
    };
  },
  watch:{
    '$route':'getData'
  },
  methods: {
    getData() {

      crudService.getRequest(this.route)
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {console.log(e);});
    },
  },
  created() {
    this.getData();
  },
  mounted: function() {}
};
</script>
