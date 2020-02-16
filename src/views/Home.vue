<template>
  <div class="home">
    <div class="m-container">
      <div class="m-image-wall">
        <div class="m-image" v-for="msrc in msrcs" :key="msrc.id">
          <img :src="msrc" alt />
          <a class="m-watch" :href="msrc" target="view_blank">
            <div class="m-shade">
              <i class="fa fa-camera-retro fa-4x" aria-hidden="true"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "@/assets/js/bus";

export default {
  name: "home",
  components: {},
  data() {
    return {
      msrcs: ["https://picsum.photos/250/250/?image=60"]
    };
  },
  mounted() {
    // 文件选择后的回调
    Bus.$on("fileAdded", () => {
      console.log("文件已选择");
    });

    // 文件上传成功的回调
    Bus.$on("fileSuccess", () => {
      console.log("文件上传成功");
    });
  },
  computed: {},
  methods: {
    upload() {
      // 打开文件选择框
      Bus.$emit("openUploader", {
        id: "1111" // 传入的参数
      });
    }
  },
  created() {
    let imageSrc = new Array();
    for (let i = 1; i <= 39; i++) {
      imageSrc.push("https://picsum.photos/500/500/?image=" + i.toString());
    }
    this.msrcs = imageSrc;
  },
  destroyed() {
    Bus.$off("fileAdded");
    Bus.$off("fileSuccess");
  }
};
</script>

<style>
@import url("../assets/css/home.css");
</style>