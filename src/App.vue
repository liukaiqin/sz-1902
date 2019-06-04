<template>
  <div id="app">
    <router-view></router-view>
    <TabBar/>
  </div>
</template>
<script>
import TabBar from "./common/tabBar/tabBar"
export default {
  name:"App",
  components:{
    TabBar
  }
}
</script>


<style>

</style>
