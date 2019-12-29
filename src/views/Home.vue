<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img-lazy>
        </b-col>
        <b-col>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=55" alt="Image 1"></b-img-lazy>
        </b-col>
        <b-col>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=56" alt="Image 1"></b-img-lazy>
        </b-col>
        <b-col>
          <b-img-lazy thumbnail fluid src="https://picsum.photos/250/250/?image=57" alt="Image 1"></b-img-lazy>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
