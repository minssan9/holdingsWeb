<template>
  <div class="menuList">
    <router-link
      to="/general/itdamage/new"
      exact
    >
      New Post
    </router-link>
    <table
      id="menuTable"
      class="table table-striped table-bordered"
    >
      <tbody>
        <tr
          v-for="data in dataList"
          :key="data.rtime"
          @click="'tel:' + data.rtel"
        >
          <td class="d-none d-sm-block">
            {{ data.class1 }}
          </td>
          <td class="d-none d-sm-block">
            {{ data.co_gb }}
          </td>
          <td class="d-none d-sm-block">
            {{ data.rteam }}
          </td>
          <td class="d-none d-sm-block ">
            <a :href="'tel:' + data.rtel">{{ data.rname }}</a>
          </td>
          <td class="d-none d-sm-block">
            <a :href="'tel:' + data.rtel">{{ data.rtel }}</a>
          </td>
          <td class="">
            <a :href="'tel:' + data.rtel">{{ data.rtxt }}</a>
          </td>
          <td class="">
            <button
              v-show="data.attach"
              class="btn btn-indigo btn-sm"
              type="button"
              @click="fileDown(data)"
            >
              다운로드
            </button>
          </td>
          <td class="genre">
            <button
              id="endDamage"
              class="btn btn-indigo btn-sm"
              type="button"
              @click="enditdamage(data)"
            >
              완료
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import crudService from '../services/crudService'
export default {
  name: 'MenuList',
  props: {
    msg: String
  },
  data() {
    return {
      route:"general/itdamage",
      ctime: "",
      rtime: "",
      datepicker: new Date(),
      querydate: "",
      dataList: []
    };
  },
  methods: {
    getData() {
      var data = {
        params: {
          stat:'01'
        }}
      crudService.getDataByParam(this.route, data)
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {console.log(e);});
    },
    enditdamage(data) {
      crudService.update(this.route, data)
        .then(() => {
          this.getData();
        })
        .catch(e => {console.log(e);});
    },
    fileDown(data) {
      crudService.fileDown(this.route, data.attach);
    },
  }
}
</script>
