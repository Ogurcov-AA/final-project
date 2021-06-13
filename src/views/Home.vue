<template>
  <div class="body" v-if="isFetching">
    <div class="tab">
      <div class="newsTab">
        <div v-for="item in getPage  " :key="item.source.id">
          <news v-bind:title="item.title"
                v-bind:description="item.description"
                v-bind:url="item.urlToImage"
                v-bind:author="authorNews(item)"
                v-bind:publishedAt="formatDate(item.publishedAt)"
                @click.native="$router.push({name: 'news', params: {id: item.source.name}})"/>
        </div>
      </div>
      <div class="randomNews" v-if="!$store.getters.isAdmin">
        <randomNews />
      </div>
      <div class="addNews" v-else>
        <img src="https://img.icons8.com/pastel-glyph/2x/plus.png" alt="" class="addNews-icon"
             @click="$router.push('/createnews')">
      </div>
    </div>
    <div class="nextPages">
      <pagination v-bind:count="this.newsList.length/this.countNewsInPage"/>
    </div>
  </div>
</template>

<script>
import news from "@/components/news"
import randomNews from "@/components/randomNews";
import pagination from "@/components/pagination";

export default {
  name: "Home",
  components: {
    news,
    randomNews,
    pagination
  },
  data() {
    return {
      newsList: '',
      isFetching: false,
      countNewsInPage: 15,
      newsPage: '',
      pagination: this.$route.params.page,
    }
  },
  created() {
    this.getList()
  },
  beforeRouteUpdate(to, from, next){
    console.log(this.pagination)
    this.pagination = to.params.page
    next()
  },
  computed: {
    getPage() {
      if (this.newsList.length < 15) {
        return this.newsList
      }
      else {
        if(this.pagination === 1)
        return this.newsList.slice(0,this.countNewsInPage)
        else {
          return this.newsList.slice((this.pagination-1)*this.countNewsInPage+1,this.pagination*this.countNewsInPage)
        }
      }
    },
  },
  methods: {
    getList() {
      this.$store.dispatch('getNews')
          .then(resp => {
            this.newsList = resp
            this.newsPage = this.getPage
            this.isFetching = true
          })
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
.tab {
  display: flex;
  justify-content: space-between;
}

.newsTab {
  display: inline-block;
  max-width: 60%;
}

.randomNews {
  width: 60%;
}

.addNews {
  display: inline-block;
}

.addNews-icon {
  width: 40px;
  height: 40px;
}

.addNews-icon:hover {
  opacity: 0.6;
}

.addNews-icon:active {
  width: 30px;
  height: 30px;
}


</style>
