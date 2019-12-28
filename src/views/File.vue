<template>
  <div class="file">
    <FileUpload v-on:successNotify="refreshItems"></FileUpload>
    <div class="file_table">
      <b-table striped hover :items="items" :fields="fields">
        <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>
        <template v-slot:cell(actions)="data">
          <b-button size="sm" variant="success" @click="downloadFile(data.item.id)">下载</b-button>
          <b-button class="ml-2" size="sm" variant="danger" @click="deleteFile(data.item.id)">删除</b-button>
        </template>
        <template v-slot:cell(fileName)="data">{{ data.item.fileName }}</template>
        <template v-slot:cell(fileSize)="data">{{ data.item.fileSize }}</template>
      </b-table>
    </div>
  </div>
</template>

<script>
import FileUpload from "@/components/FileUpload.vue";

export default {
  data() {
    return {
      notice: "",
      items: [],
      uploadProgress: "0",
      fields: [
        {
          key: "index",
          label: "序号"
        },
        {
          key: "fileName",
          label: "文件名"
        },
        {
          key: "fileSize",
          label: "文件大小"
        },
        {
          key: "actions",
          label: ""
        }
      ]
    };
  },
  methods: {
    refreshItems(isSuccess) {
      //当文件上传组件返回成功的时候才执行刷新界面操作
      if (isSuccess) {
        this.$api.get("file/files", null, r => {
          this.items = r.result;
        });
      }
    },
    deleteFile(id) {
      this.$api.delete("file/delete?id=" + id, null, r => {
        alert("删除成功");
        this.$api.get("file/files", null, r => {
          this.items = r.result;
        });
      });
    },
    downloadFile(id) {
      window.location.href = this.$api.getRoot() + "/file/download?id=" + id;
    }
  },
  beforeCreate() {
    this.$api.get("file/files", null, r => {
      this.items = r.result;
    });
  },
  components: {
    FileUpload
  }
};
</script>

<style>
.file {
  margin: 20px 100px;
}
.file_table {
  margin-top: 20px;
}
</style>