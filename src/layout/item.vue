<script>

export default {
  name: "MenuItem",
  //设置为函数化组件
	functional: true,
  props: {
    icon:{
      type: String,
      default:'',
    },
    title:{
      type:String,
      default:'',
    }
  },
  render(h,context){
    const {icon, title} = context.props
    const vnodes = []
    if(icon){
      vnodes.push(<svg-icon icon-class={icon}/>)
    }
    if(title){
      vnodes.push(<span slot='title' style="margin-left: 10px">{(title)}</span>)
    }
    return vnodes
  }
}
</script>
<style scoped lang="scss">
  i {
    margin-right: 10px;
    color: #fff import !important;
    font-weight: 700;
  }
</style>
