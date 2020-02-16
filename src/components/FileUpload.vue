<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form-file v-on:change="getFile($event)" browse-text="选择文件" placeholder="请选择需要上传的文件..."></b-form-file>
      </b-col>
      <b-col cols="1">
        <b-button variant="success" v-on:click="uploadFile($event)">上传</b-button>
      </b-col>
      <b-col cols="2">
        <b-button variant="info" @click="uploadFiles()">批量上传</b-button>
      </b-col>
    </b-row>
    <b-row id="Progress" v-bind:style="{visibility:visibilityParams}">
      <b-col cols="8">
        <b-progress :value="value" :max="max" show-progress animated></b-progress>
      </b-col>
      <b-col cols="2">{{uploadProgress}}%</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "FileUpload",
  //   props: {
  //     isSuccess: Boolean
  //   },
  data() {
    return {
      isSuccess: false,
      visibilityParams: "hidden",
      uploadProgress: "0",
      value: 0,
      max: 100,
      uploadPath: ""
    };
  },
  methods: {
    getFile(event) {
      this.file = event.target.files[0];
    },
    uploadFile(event) {
      event.preventDefault();
      this.ProgressVisibility(true);
      this.isSuccess = false;
      this.upload(this.file, 0);
    },
    uploadFiles() {
      this.$router.push({ path: "/upload" });
    },
    upload(file, i) {
      var name = file.name;
      var size = file.size;
      var blockSize = 2 * 1024 * 1024; //2mb为一块
      var blockCount = Math.ceil(size / blockSize); //总的块数
      if (i >= blockCount) {
        return;
      }
      //计算每一块的开始start和结束end位置
      var start = i * blockSize;
      var end = Math.min(size, start + blockSize);
      let form = new FormData();
      form.append("data", file.slice(start, end)); //切出当前要上传的一部分
      form.append("fileSize", size); //当前是第几片
      form.append("lastModified", file.lastModified);
      form.append("fileName", name);
      form.append("total", blockCount); //总片数
      form.append("index", i + 1); //当前是第几片
      this.uploadPath = file.lastModified;
      this.$api.post("file/upload", form, r => {
        if (r != null) {
          let p = r.number++;
          this.uploadProgress = Math.ceil((p * 100) / blockCount);
          this.value = Math.ceil((p * 100) / blockCount);
          this.upload(file, p);
          if (r.mergeOk) {
            //成功后向父组件发送广播信号，并传递参数isSuccess，名字是successNotify
            this.isSuccess = true;
            this.ProgressVisibility(false);
            this.value = 0;
            this.uploadProgress = 0;
            this.$emit("successNotify", this.isSuccess);
          }
        }
      });
    },
    ProgressVisibility(isShow) {
      if (isShow) {
        this.visibilityParams = "visible";
      } else {
        this.visibilityParams = "hidden";
      }
    }
  }
};
</script>
<style>
#Progress {
  margin-top: 10px;
}
.hideProgress {
  visibility: hidden;
}
.showProgress {
  visibility: visible;
}
</style>