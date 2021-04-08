<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-side></v-side>
    <main class="content-box">
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
    return {};
  },
  computed: {},
  methods: {},
  created() {},
};
</script>
<style scoped></style>
