<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col id="imageCol">
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=55" alt="Image 2"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=56" alt="Image 3"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=57" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=60" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=61" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=62" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=63" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=64" alt="Image 1"></b-img-lazy>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Bus from "@/assets/js/bus";

export default {
  name: "home",
  components: { HelloWorld },
  data() {
    return {};
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
  destroyed() {
    Bus.$off("fileAdded");
    Bus.$off("fileSuccess");
  }
};
</script>

<style>
#imageCol {
  text-align: center;
}
</style>