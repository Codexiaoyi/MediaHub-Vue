<template>
  <div class="file">
    <b-container>
      <b-row>
        <b-col cols="8">
          <b-form-file v-on:change="getFile($event)" browse-text="选择文件" placeholder="请选择需要上传的文件..."></b-form-file>
        </b-col>
        <b-col cols="4">
          <b-button variant="success" v-on:click="submitForm($event)">上传</b-button>
        </b-col>
      </b-row>
    </b-container>
    <div class="file_table">
      <b-table striped hover :items="items" :fields="fields">
        <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>
        <template v-slot:cell(actions)="data">
          <b-button size="sm" variant="danger" @click="deleteFile(data.item.id)">删除</b-button>
          <b-button size="sm" variant="success" @click="downloadFile(data.item.id)">下载</b-button>
        </template>
        <template v-slot:cell(fileName)="data">{{ data.item.fileName }}</template>
        <template v-slot:cell(fileSize)="data">{{ data.item.fileSize }}</template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notice: "",
      items: [],
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
    getFile(event) {
      this.file = event.target.files[0];
    },
    submitForm(event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append("file", this.file);
      this.$api.post("file/upload", formData, r => {
        this.$api.get("file/files", null, r => {
          this.items = r.result;
        });
      });
    },
    deleteFile(id) {
      let sendId = id;
      this.$api.delete("file/delete", sendId, r => {
        alert("删除成功");
        this.$api.get("file/files", null, r => {
          this.items = r.result;
        });
      });
    },
    downloadFile(id) {
      // this.$api.get('file/download?id=' + id, null, r => {
      //         console.log(r)
      //         Window.
      //             //window.location.href = 'file/download';
      //     })
      window.location.href = "http://localhost:5000/api/file/download?id=" + id;
    }
  },
  beforeCreate() {
    this.$api.get("file/files", null, r => {
      this.items = r.result;
    });
  }
};
</script>

<style>
.file {
  margin: 20px 50px;
}
.file_table{
  margin-top: 20px;
}
</style>