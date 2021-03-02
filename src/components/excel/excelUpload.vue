<template>
  <div>
    <div v-if="currentFile" class="progress">
      <div
        class="progress-bar progress-bar-info progress-bar-striped"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>


    <label class="btn btn-default">
      <input
        type="file"
        ref="file"
        @change="selectFile"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      />
    </label>
    <button class="btn btn-success" :disabled="!selectedFiles" @click="upload">
      Upload
    </button>

    <div class="alert alert-light" role="alert">{{ message }}</div>

  </div>
</template>

<script>
import crudService from "../../services/crudService";

export default {
  name: "excel-upload",
  data() {
    return {
      route: "",
      ctime: "",

      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      dataList: [],
      fileInfos: [],
      excelJsonData: [],
    };
  },
  props :{

  },
  created() {
    this.route = this.$route.path + '/import'
    // inv/trx/excel
  },
  mounted() {
    // crudService.fileDown('/files', 'filename').then((response) => {
    //   this.fileInfos = response.data;
    // });
  },
  methods: {
    upload() {
      this.progress = 0;

      this.currentFile = this.selectedFiles.item(0);
      crudService.upload(this.currentFile, (event) => {
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
        .then((response) => {
          this.message = response.data.message;
          return crudService.getFiles();
        })
        .then((files) => {
          this.fileInfos = files.data;
        })
        .catch(() => {
          this.progress = 0;
          this.message = "Could not upload the file!";
          this.currentFile = undefined;
        });

      this.selectedFiles = undefined;
    },
    selectFile() {
      this.selectedFiles = this.$refs.file.files;
    },
  },
};
</script>
