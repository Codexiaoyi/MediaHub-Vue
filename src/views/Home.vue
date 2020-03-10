<template>
  <div class="t-container">
    <!-- <Upload></Upload> -->
    <div class="t-image-wall">
      <div class="t-image" v-for="msrc in msrcs" :key="msrc.id">
        <img :src="msrc" alt />
        <a class="t-watch" :href="msrc" target="view_blank">
          <div class="t-shade">
            <i class="fa fa-camera-retro fa-4x" aria-hidden="true"></i>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Upload from "../components/Upload.vue";

export default {
  name: "home",
  components: {},
  data() {
    return {
      msrcs: ["https://picsum.photos/250/250/?image=60"]
    };
  },
  computed: {},
  methods: {},
  components: {
    Upload
  },
  created() {
    let imageSrc = new Array();
    for (let i = 1; i <= 39; i++) {
      imageSrc.push("https://picsum.photos/500/500/?image=" + i.toString());
    }
    this.msrcs = imageSrc;
  }
};
</script>

<style>
@import url("../assets/css/home.css");
</style>