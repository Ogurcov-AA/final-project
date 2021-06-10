<template>
  <div>
  <div class="aboutNews" v-if="isFetching">
   <div>
    <h1 class="title-info">{{currentNews.title}}</h1>

   </div>
    <div class="news-icon">
      <img v-bind:src="currentNews.urlToImage" alt=""
      class="image">
    </div>
    <div class="description">
      <h3>{{currentNews.description}}</h3>
    </div>
    <div>
      <p>{{currentNews.content}}</p>
    </div>
    <div class="copyright">
      <a v-bind:href="currentNews.url">Read all</a>
      <h4 v-if="currentNews.author">{{currentNews.author}}</h4>
      <h4 v-else> {{currentNews.source.name}}</h4>
      <h4>{{new Date(currentNews.publishedAt).toLocaleDateString()}}</h4>

    </div>
    <commentsFrame/>
  </div>
  </div>
</template>

<script>
import commentsFrame from "@/components/commentsFrame";

export default {
  name: "AboutNews",
  data(){
    return{
      isFetching: false,
      currentNews: ''
    }
  },
  components:{
    commentsFrame
  },
  created() {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData'
  },
  methods:{
    fetchData(){
      this.$store.dispatch('getNews').then(res =>{
      res.forEach(item =>{
        if(item.source.name === this.$route.params.id){
          this.currentNews = item
          this.isFetching = true
        }
      })
      })
    }
  }
}
</script>

<style scoped>
.news-info {
  display: flex;
}

.title-info {
  margin-left: 20%;
}

.description {
  display: inline-block;
  float: right;
  margin-right: 15%;
  width: 45%;
  text-align: center;
}
.news-icon {
  display: inline-block;
  width: 30%;
  margin: 2%;
}
.image{
  width: 100%;
}
.aboutNews{
  width: 90%;
}
.copyright{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.copyright h4{
  margin: 0;
}
</style>
