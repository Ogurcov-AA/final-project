<template>
  <div>
    <news v-bind:title="randNews.title"
          v-bind:description="randNews.description"
          v-bind:url="randNews.urlToImage"
          v-bind:author="authorNews(randNews)"
          v-bind:publishedAt="formatDate(randNews.publishedAt)"
          @click.native="$router.push({name: 'news', params: {id: randNews.source.name}})"/>
  </div>
</template>

<script>
import news from "@/components/news";

export default {
  name: "randomNews",
  components: {
    news
  },
  data() {
    return {
      newsList: '',
      randNews: ''
    }
  },
  created() {
    this.getRandomNews()
    this.timer()
  },
  methods: {
    timer(){
      setInterval(this.getRandomNews,30000)
    },
    getRandomNews(){
      this.getList()
      this.randNews = this.random(this.newsList)
    },
    getList() {
      this.newsList = this.$store.getters.getNewsList
    },
    random(arr) {
      let key = this.getRandomInt(0, arr.length - 1);
      return arr[key];
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    authorNews(news){
      return news.author?news.author:news.source.name
    },
    formatDate(date){
      return new Date(date).toLocaleDateString()
    }
  }
}
</script>

<style scoped>

</style>
