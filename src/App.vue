<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style lang='scss' scope>
  * {
  margin: 0;
  padding: 0;
}

html,
body,
#app,
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  font-family: 'PingFang SC', 'Helvetica Neue', Helvetica, 'microsoft yahei',
    arial, STHeiTi, sans-serif;
}

a {
  text-decoration: none;
}

ul,
li {
  list-style: none;
}

.content-box {
  position: absolute;
  left: 65px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
}

@media (min-width: 1200px) {
  .content-box {
    left: 200px;
  }
}

.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}

.content-collapse {
  left: 65px;
}

.container {
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.clearfix:after {
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}

.clearfix {
  zoom: 1;
}

.right {
  text-align: right;
}

.center {
  text-align: center;
}

/* 项目公用样式 */
.page {
  padding: 20px;
  background: #fff;
}

.pagination {
  margin: 20px 0;
  position: relative;
  text-align: center;
}

.refresh-btn {
  color: #616469;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

/* table样式 */
.table-center {
  thead {
    th {
      color: #000;
      font-weight: 500;
      background: #82bfff
    }
  }

  .cell {
    text-align: center;
  }
}

.el-select {
  width: 100%;
}

.el-tooltip__popper {
  min-width: 200px !important;
  max-width: 400px !important;
}

.oper-btn {
  margin-left: 4px;
  border-bottom: 1px solid #1989fa;
  border-color: inherit;
}

.el-table td, .el-table th {
            text-align: center !important
        }

.popper__arrow {
  bottom:0 !important;
  left:8px !important
}

.apply {
  height:98%
}


</style>
