<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />-->
    <b-container fluid class="p-4 bg-dark">
      <div class="image-wall">
        <b-card-group columns>
          <b-card img-src="http://image.dbbqb.com/02Kwo" img-alt="Image" overlay></b-card>
          <b-card img-src="http://image.dbbqb.com/Qz3n4" img-alt="Image" overlay></b-card>
          <b-card img-src="http://image.dbbqb.com/EN42j" img-alt="Image" overlay></b-card>
          <b-card img-src="http://image.dbbqb.com/pNAWX" img-alt="Image" overlay></b-card>
          <b-card img-src="http://image.dbbqb.com/z2xEW" img-alt="Image" overlay></b-card>
          <b-card img-src="https://picsum.photos/250/250/?image=59" img-alt="Image" overlay></b-card>
          <b-card img-src="https://picsum.photos/250/250/?image=60" img-alt="Image" overlay></b-card>
          <b-card img-src="https://picsum.photos/250/250/?image=61" img-alt="Image" overlay></b-card>
          <b-card img-src="https://picsum.photos/250/250/?image=62" img-alt="Image" overlay></b-card>
        </b-card-group>
      </div>
    </b-container>
    <!-- <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col id="image-col">
          <b-img-lazy thumbnail fluid src="http://image.dbbqb.com/02Kwo" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="http://image.dbbqb.com/Qz3n4" alt="Image 2"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="http://image.dbbqb.com/EN42j" alt="Image 3"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="http://image.dbbqb.com/pNAWX" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=60" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=61" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=62" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=63" alt="Image 1"></b-img-lazy>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=64" alt="Image 1"></b-img-lazy>
        </b-col>
      </b-row>
    </b-container>-->
  </div>
</template>

<script>
// @ is an alias to /src
import Bus from "@/assets/js/bus";

export default {
  name: "home",
  components: {},
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
.image-wall {
  margin: 0px 100px;
}

#image-col * {
  text-align: center;
  margin: 5px;
}
</style>