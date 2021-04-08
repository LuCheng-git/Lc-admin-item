<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-side></v-side>
    <main class="content-box" :class="{'content-collapse':collapse}">
      <div class="content">
        <app-main></app-main>
      </div>
    </main>
  </div>
</template>

<script>
import VHead from './head' 
import VSide from './side'
import AppMain from './appMain'
export default {
  components: {VHead, VSide, AppMain},
  data() {
    return {
      collapse: false,
    };
  },
  computed: {},
  methods: {},
  created() {
    this.$bus.on("collapse", state => {
      this.collapse = state;
    });
  },
};
</script>
<style scoped></style>
