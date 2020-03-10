<template>
  <div class="t-upload">
    <uploader
      :options="options"
      :file-status-text="statusText"
      @file-complete="fileComplete"
      @complete="complete"
      class="t-uploader"
      ref="uploader"
    >
      <uploader-drop>
        <p>文件拖放至此处或</p>
        <uploader-btn>选择文件</uploader-btn>
        <uploader-btn :attrs="attrs">选择图片</uploader-btn>
        <!-- <uploader-btn :directory="true">选择文件夹</uploader-btn> -->
      </uploader-drop>
      <uploader-list></uploader-list>
    </uploader>
  </div>
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
    complete() {},
    fileComplete() {
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


<style lang="scss" scoped>
@import url("../assets/css/upload.css");

/deep/.uploader-file-icon {
  &:before {
    content: "" !important;
  }
  // &[icon="image"] {
  //   background: url(./images/image-icon.png);
  // }
  // &[icon="video"] {
  //   background: url(./images/video-icon.png);
  // }
  // &[icon="document"] {
  //   background: url(./images/text-icon.png);
  // }
}
</style>
