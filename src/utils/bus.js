const install = (Vue) => {
  const bus = new Vue({
    methods: {
      emit(event, ...args){
        this.$emit(event,...args)
      },
      on(event, ...args){
        this.$on(event,...args)
      },
      off(event, callback){
        this.$off(event,callback)
      }
    }
  })
  Vue.prototype.$bus = bus
}

export default install