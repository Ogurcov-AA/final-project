<template>
  <div id="app">
   <HeaderElem/>
      <router-view/>
  </div>
</template>

<script>
import HeaderElem from "@/components/headerComponent";


export default {
  name: 'App',
  components:{
    HeaderElem,
  },
}
</script>

<style>
#app {
  margin: 0 5%;
}

</style>
