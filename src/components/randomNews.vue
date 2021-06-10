<template>
  <div>
    <news v-bind:title="randNews.title"
          v-bind:description="randNews.description"
          v-bind:url="randNews.urlToImage"/>
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
    }
  }
}
</script>

<style scoped>

</style>
