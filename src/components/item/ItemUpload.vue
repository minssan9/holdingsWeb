<template>
  <div>
    <div
      v-if="currentFile"
      class="progress"
    >
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
        ref="file"
        type="file"
        @change="selectFile"
      >
    </label>

    <button
      class="btn btn-success"
      :disabled="!selectedFiles"
      @click="upload"
    >
      Upload
    </button>

    <div
      class="alert alert-light"
      role="alert"
    >
      {{ message }}
    </div>

    <div class="card">
      <div class="card-header">
        List of Files
      </div>
      <ul class="list-group list-group-flush">
        <li
          v-for="(file, index) in fileInfos"
          :key="index"
          class="list-group-item"
        >
          <a :href="file.url">{{ file.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import crudService from "@/services/crudService";

export default {
  name: "ItemFileUpload",
  data() {
    return {
      route:"item/upload",
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      dataList: [],
      fileInfos: [],
    };
  },
  mounted() {
    crudService.getRequest(this.route)
      .then(response => {
        this.dataList = response.data;
        console.log(response);
      })
      .catch(e => {console.log(e);});
    // crudService.fileDown('/files', 'filename').then((response) => {
    //   this.fileInfos = response.data;
    // });
  },
  methods: {
    upload() {
      this.progress = 0;
      this.currentFile = this.selectedFiles.item(0);
      crudService.upload(this.route + '/excel', this.currentFile, (event) => {
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
