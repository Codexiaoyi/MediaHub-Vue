<template>
  <div class="t-container">
    <b-form-file
      v-on:change="getCoverImage($event)"
      browse-text="选择文件"
      placeholder="上传封面"
    ></b-form-file>
    <button @click="addAlbum()">确定</button>
    <div class="t-album-wall">
      <div class="t-album" v-for="album in albums" :key="album.cover.id">
        <div class="t-album-image">
          <img :src="album.coverImage" alt="Image"/>
        </div>
        <p class="t-album-message">{{album.cover.coverMessage}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albums: []
    };
  },
  methods: {
    getAlbums(userId) {
      let result = new Array();
      this.$api.get("albums?userId=" + userId, null, r => {
        r.forEach(a => {
          //请求相应的封面
          this.$api.get(
            "albums/cover?albumId=" + a.id,
            null,
            o => {
              //图片blob转换为本地的地址
              let img = window.URL.createObjectURL(o);
              //新对象放入数组
              result.push({ cover: a, coverImage: img });
            },
            null,
            "blob"
          );
        });
      });
      this.albums = result;
    },
    getCoverImage(event) {
      this.coverImage = event.target.files[0];
    },
    addAlbum() {
      var formData = new FormData();
      formData.append("coverImage", this.coverImage);
      formData.append("userId", window.localStorage.getItem("Amigo"));
      formData.append("coverMessage", "testtset");
      this.$api.post("albums", formData, r => {});
    }
  },
  created() {
    let userId = window.localStorage.getItem("Amigo");
    this.getAlbums(userId);
  }
};
</script>

<style>
@import url("../assets/css/album.css");
</style>