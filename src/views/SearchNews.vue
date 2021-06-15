<template>
  <div v-if="isFetching">
    <div v-if="sortedList.length===0">
      <h2 class="error-search">No news for this search</h2>
    </div>
    <input type="button" value="reset" class="reset-search" @click="$router.push('/')">
    <div v-for="item in sortedList" :key="item.author">
      <news v-bind:title="item.title"
            v-bind:description="item.description"
            v-bind:url="item.urlToImage"
            v-bind:author="authorNews(item)"
            v-bind:publishedAt="formatDate(item.publishedAt)"
            @click.native="$router.push({name: 'news', params: {id: item.source.name}})"/>
    </div>
  </div>
</template>

<script>
import news from "../components/news.vue";

export default {
  name: "SearchNews",
  data() {
    return {
      isFetching: false,
      newsList: [],
      sortedList: [],
      countNewsInPage: 15,
      searchString: this.$route.params.tittle
    }
  },
  components: {
    news,
  },
  beforeRouteUpdate(to, from, next) {
    this.searchString = to.params.tittle
    this.sortedList = []
    this.getList()
    next()
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$store.dispatch('getNews')
          .then(resp => {
            this.newsList = resp
            this.newsPage = this.getPage
            this.sortNews()
          })
    },
    sortNews() {
      this.newsList.forEach(item => {
        if ((item.title.toLowerCase().indexOf(this.searchString.toLowerCase())) > -1 || (item.description.toLowerCase().indexOf(this.searchString.toLowerCase())) > -1) {
          this.sortedList.push(item)
        }
      })
      this.isFetching = true
    },
    authorNews(news) {
      return news.author ? news.author : news.source.name
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.error-search{
  text-align: center;
  margin-top: 15%;
  opacity: 0.8;
}
.reset-search{
  margin: 5%;
  width: 90%;
  height: 50px;
  background: transparent;
  outline: none;
}
  input[type='button']:hover{
  background: #d9d7d7;
}
</style>
