
<template>
  <div id="item">
    <table class="table table-striped table-bordered" id="dataTable">
      <tbody>
        <tr
          v-for="data in dataList"
          v-bind:key="data.seq"
        >
          <td class="d-none d-sm-block">{{ data.organization_id  }}</td>
          <td class="d-none d-sm-block">{{ data.group_id  }}</td>
          <td class="d-none d-sm-block">{{ data.line_num  }}</td>
          <td class="d-none d-sm-block">{{ data.seq  }}</td>
          <td class="d-none d-sm-block">{{ data.subinventory_code  }}</td>
          <td class="d-none d-sm-block">{{ data.transaction_type_id  }}</td>
          <td class="d-none d-sm-block">{{ data.transaction_action_id  }}</td>
          <td class="d-none d-sm-block">{{ data.transaction_date  }}</td>
          <td class="d-none d-sm-block">{{ data.code_combination_id  }}</td>
          <td class="d-none d-sm-block">{{ data.dept_code  }}</td>
          <td class="d-none d-sm-block">{{ data.item_code  }}</td>
          <td class="d-none d-sm-block">{{ data.transaction_quantity  }}</td>
          <td class="d-none d-sm-block">{{ data.creation_date  }}</td>
          <td class="d-none d-sm-block">{{ data.created_by }}</td>
          <td class="d-none d-sm-block">{{ data.interface_id }}</td>
          <td class="d-none d-sm-block">{{ data.erp_process_sts }}</td>
          <td class="d-none d-sm-block">{{ data.to_subinventory_code }}</td>
          <td class="d-none d-sm-block">{{ data.vendor_site_id }}</td>
          <td class="d-none d-sm-block">{{ data.to_orgid }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import crudService from "../../../services/crudService";

export default {
  name: "invTrxList",
  data() {
    return {
      route: "inv/trx/excel",
      ctime: "",
      rtime: "",
      datepicker: new Date(),
      querydate: "",
      dataList: [],
    };
  },
  watch: {
    $route: "getData",
  },
  methods: {
    getData() {
      var data = {
        // params: {
        //   stat: "01",
        // },
      };

      crudService
        .getDataByParam(this.route, data)
        .then((response) => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    this.getData();
  },
  mounted: function () {},
};
</script>
