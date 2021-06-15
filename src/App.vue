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
import HeaderElem from "./components/headerComponent.vue";
import loading from "./components/loading.vue";

export default {
  name: 'App',
  components: {
    HeaderElem,
    loading
  },
  data() {
    return {isFetching: false}
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$store.dispatch('getNews')
          .then(() => this.isFetching = true)
          .catch(re=>alert(re))
    },
  }
}
</script>

<style>
#app {
  margin: 0 5%;
}

</style>
