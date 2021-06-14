<template>
  <div id="app" v-if="isFetching">
    <HeaderElem/>
    <router-view/>
  </div>
</template>

<script>
import HeaderElem from "@/components/headerComponent";


export default {
  name: 'App',
  components: {
    HeaderElem,
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
