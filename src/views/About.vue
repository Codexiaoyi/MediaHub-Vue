<template>
  <uploader
    :options="options"
    :file-status-text="statusText"
    @file-complete="fileComplete"
    @complete="complete"
    class="uploader-example"
  >
    <uploader-unsupport></uploader-unsupport>
    <uploader-drop>
      <p>文件拖放至此处或</p>
      <uploader-btn>选择文件</uploader-btn>
      <uploader-btn :attrs="attrs">选择图片</uploader-btn>
      <uploader-btn :directory="true">选择文件夹</uploader-btn>
    </uploader-drop>
    <uploader-list></uploader-list>
  </uploader>
</template>

<script>
import qs from "qs";

export default {
  data() {
    return {
      options: {
        // 可通过 https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js 示例启动服务
        target: this.$api.getRoot() + "/file/upload/chunk",
        testChunks: false,
        chunkSize: 10 * 1024 * 1024
      },
      attrs: {
        accept: "image/*"
      },
      statusText: {
        success: "上传成功",
        error: "上传失败",
        uploading: "上传中",
        paused: "暂停",
        waiting: "等待"
      }
    };
  },
  methods: {
    //整体上传完成
    complete() {
      console.log("complete", arguments);
    },
    fileComplete() {
      console.log("file complete", arguments);
      const file = arguments[0].file;
      this.$api.post(
        "/file/upload/merge",
        qs.stringify({
          filename: file.name,
          identifier: arguments[0].uniqueIdentifier,
          totalSize: file.size,
          type: file.type
        }),
        r => {
          console.log(r);
        }
      );
    }
  }
};
</script>

<style>
.uploader-example {
  width: 880px;
  padding: 15px;
  margin: 40px auto 0;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.uploader-example .uploader-btn {
  margin-right: 4px;
}
.uploader-example .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>