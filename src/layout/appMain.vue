<template>
  <transition
    name="move"
    mode="out-in"
  >
    <router-view :key="key" />  
  </transition>
</template>

<script>
export default ({
  computed: {
    key(){
      return this.$route.path
    }
  }
})
</script>
