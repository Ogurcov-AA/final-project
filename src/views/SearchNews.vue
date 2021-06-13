<template>
  <div v-if="isFetching">
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
import news from "@/components/news";

export default {
  name: "SearchNews",
  data() {
    return {
      isFetching: false,
      newsList: [],
      sortedList: [],
      searchString: this.$route.params.tittle
    }
  },
  components: {
    news
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
        if ((item.title?.toLowerCase()?.indexOf(this.searchString?.toLowerCase())) > -1 || (item.description?.toLowerCase().indexOf(this.searchString?.toLowerCase())) > -1) {
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

</style>
