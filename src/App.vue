<template>
  <div id="app">
    <HeaderElem/>
    <div v-if="isFetching">
      <router-view/>
    </div>
    <div v-else>
      <loading/>
    </div>
  </div>
</template>

<script>
import HeaderElem from "@/components/headerComponent";
import loading from "@/components/loading";

export default {
  name: 'App',
  components: {
    HeaderElem,
    loading
  }, data() {
    return {isFetching: false}
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$store.dispatch('getNews')
          .then(() => this.isFetching = true)
    },
  }
}
</script>

<style>
#app {
  margin: 0 5%;
}

</style>
