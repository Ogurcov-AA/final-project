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
      <div >
      <img v-if="$store.getters.isAdmin" src="https://image.flaticon.com/icons/png/512/1483/1483063.png" alt="" class="delete-icon" @click="deleteNews">
        <img v-if="$store.getters.isAdmin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADY2Njs7Ox0dHRwcHDn5+f6+vr19fXe3t69vb3V1dV+fn52dnZWVlby8vKcnJw+Pj5ra2tGRkatra3j4+NPT082NjYbGxvMzMyKiorGxsaZmZmzs7PPz8+RkZEsLCwhISEqKipfX1+kpKRLS0uurq4RERGGhoZkZGQ6OjqzGJBKAAADu0lEQVR4nO2dWVfqMBRGE5ChgJVBRZkVlOH//8DbBsgA8eJDJO3Xbz9xWl3r7JWVDuHkIAQhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ8jvqs2UnacfO4u+o7aRiO2nGTuVP6A6kYQg4kA/S5T12QoGpb+Ulz7FzCkr9yi/jO3ZWATkJpomruIidVzBOgnMheq5iK3ZmgTgJ1rKPbdfwMXZqYbAEhdi4ivXIuQXBERRi5Bguo6YWhgtB0XIMV/ESC8WloBBNRzFeZoG4Frx4uCn7A6pP8NEZw5dYqYXhpxHs9kDG0Cc4zA4k2XvUF8I8/I9gRvM5PzmKklkgfIJ7a+Z18rObCImF4pagUKdL/B7sE1zbV5Y0P927f2KhuCnYUOfL+27hE0yvBTv3zywQPsFXab1JHAV3988sEL8UfLh/ZoHwCeY3+KdzgCg4omCJ8AkOpNzqWzui4AFdcCzlG7ygfnRBFFxJ+YEs2PqU8hNa8KMCgisdIQq+STnWEaBge1sBwYOOAAWfsnigI1BBs1JIwYLjEcwPfekIVPBVR6CCqY4ABZtVEFzrCFDwpQqCex0BCiZVEBzqCFSwoSNAwZojBCjYlXYlHqig+UqXggXHI7iQ9heegILvVRCc6AhQcCrtUlgKFhyPYF69NdMRBQvOD4J9HQEKzqVdX0jBguMR/Jb2DjRAwWd0wXyDj9lgByo41xEFC45HsC/tAlhAwRkFy4RHcJnFUx0BCk6qIGjaBQAK7qogaPbRAwrmOwe7OqJgwfEIPjoxoOADumCulDgRmOAQXXBfBUGzeR5QcF0FQdMcAFAwpWCZ+EHQNAMCFHxFFOxbh5wtvKUXPLZycDbKj7AEzx3jTLsKMMFjr7G9tZFgACaoLirjjSnydfYoIwiqabic6s4/BzjBvPJHTsW5/MfZowwhqNayZSufjQshpit7jzKGYD5o6ipzOF1SP9AEVWPKvDamfVRM0QSPvamOa4XJNEmB6mTOqD5xOlqbUicUQXWvMPtderruHkZQNaU01SPz83jCCKryGGstppUNaPbA9jKEEVSraXYfw7k0QAiqaei0iOuACdaUi9u6uP+pDoK0bO4rma2+yy+WY6gRPK5WyFObgGSTos1BoRcwZKPTkDYwgu/SyxrnFwwm13aDWff2/5WHlWv3tpuWt/WmlydbrzGH6Hfvou/u6Sa5/ddlRPURPyxxflPjiuyBrVPitsW3aZW8+zshhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQUmX8dYCaAYueOQgAAAABJRU5ErkJggg==" alt="" class="delete-icon">
      </div>
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
     this.$store.getters.getNewsList.forEach(item =>{
        if(item.source.id === this.$route.params.id){
          this.currentNews = item
          this.isFetching = true
        }
      })
    },
    deleteNews(){
      this.$store.dispatch('removeNews',this.currentNews.source.id).then(()=> console.log(this.$store.getters.getNewsList))
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
.delete-icon{
  height: 3%;
  width: 4%;
  margin-top: 5%;
}

.delete-icon:hover{
  opacity: 0.6;
}
.delete-icon:active{
  width: 3%;
  height: 2%;
}
</style>
