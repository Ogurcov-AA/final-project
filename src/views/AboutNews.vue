<template>
  <div>
    <div class="aboutNews" v-if="isFetching">
      <div>
        <h1 class="title-info" v-if="!changeMod">{{ currentNews.title }}</h1>
        <textarea class="changed-title-info" v-else v-model="bufferNews.title" max-cols="3"></textarea>
      </div>
      <div class="news-icon" v-if="!changeMod">
        <img v-bind:src="currentNews.urlToImage" alt=""
             class="image">
      </div>
      <div class="news-icon" v-else>
        <img v-bind:src="bufferNews.urlToImage" alt=""
             class="image">
        <input type="text" class="changed-image-info" v-if="changeMod" v-model="bufferNews.urlToImage">
      </div>
      <div class="description">
        <h3 v-if="!changeMod">{{ currentNews.description }}</h3>
        <textarea class="changed-description-info" v-else v-model="bufferNews.description"></textarea>

      </div>
      <div style="display: inline-block">
        <p v-if="!changeMod">{{ currentNews.content }}</p>
        <textarea class="changed-content-info" v-else v-model="bufferNews.content"></textarea>

      </div>
      <div v-if="!changeMod" class="copyright">
        <a v-if="currentNews.url" v-bind:href="currentNews.url">Read all</a>
        <h4 v-if="currentNews.author">{{ currentNews.author }}</h4>
        <h4 v-else> {{ currentNews.source.name }}</h4>
        <h4>{{ new Date(currentNews.publishedAt).toLocaleDateString() }}</h4>
      </div>
      <div v-else class="copyright">
        <input type="text" v-model="bufferNews.url"/>
        <input type="text" v-model="bufferNews.author"/>
        <input type="date" v-bind:value="new Date(bufferNews.publishedAt).toISOString().slice(0,10)"/>
      </div>
      <div>
        <img v-if="$store.getters.isAdmin" src="https://image.flaticon.com/icons/png/512/1483/1483063.png" alt=""
             class="delete-icon" @click="deleteNews">
        <img v-if="$store.getters.isAdmin"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADY2Njs7Ox0dHRwcHDn5+f6+vr19fXe3t69vb3V1dV+fn52dnZWVlby8vKcnJw+Pj5ra2tGRkatra3j4+NPT082NjYbGxvMzMyKiorGxsaZmZmzs7PPz8+RkZEsLCwhISEqKipfX1+kpKRLS0uurq4RERGGhoZkZGQ6OjqzGJBKAAADu0lEQVR4nO2dWVfqMBRGE5ChgJVBRZkVlOH//8DbBsgA8eJDJO3Xbz9xWl3r7JWVDuHkIAQhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ8jvqs2UnacfO4u+o7aRiO2nGTuVP6A6kYQg4kA/S5T12QoGpb+Ulz7FzCkr9yi/jO3ZWATkJpomruIidVzBOgnMheq5iK3ZmgTgJ1rKPbdfwMXZqYbAEhdi4ivXIuQXBERRi5Bguo6YWhgtB0XIMV/ESC8WloBBNRzFeZoG4Frx4uCn7A6pP8NEZw5dYqYXhpxHs9kDG0Cc4zA4k2XvUF8I8/I9gRvM5PzmKklkgfIJ7a+Z18rObCImF4pagUKdL/B7sE1zbV5Y0P927f2KhuCnYUOfL+27hE0yvBTv3zywQPsFXab1JHAV3988sEL8UfLh/ZoHwCeY3+KdzgCg4omCJ8AkOpNzqWzui4AFdcCzlG7ygfnRBFFxJ+YEs2PqU8hNa8KMCgisdIQq+STnWEaBge1sBwYOOAAWfsnigI1BBs1JIwYLjEcwPfekIVPBVR6CCqY4ABZtVEFzrCFDwpQqCex0BCiZVEBzqCFSwoSNAwZojBCjYlXYlHqig+UqXggXHI7iQ9heegILvVRCc6AhQcCrtUlgKFhyPYF69NdMRBQvOD4J9HQEKzqVdX0jBguMR/Jb2DjRAwWd0wXyDj9lgByo41xEFC45HsC/tAlhAwRkFy4RHcJnFUx0BCk6qIGjaBQAK7qogaPbRAwrmOwe7OqJgwfEIPjoxoOADumCulDgRmOAQXXBfBUGzeR5QcF0FQdMcAFAwpWCZ+EHQNAMCFHxFFOxbh5wtvKUXPLZycDbKj7AEzx3jTLsKMMFjr7G9tZFgACaoLirjjSnydfYoIwiqabic6s4/BzjBvPJHTsW5/MfZowwhqNayZSufjQshpit7jzKGYD5o6ipzOF1SP9AEVWPKvDamfVRM0QSPvamOa4XJNEmB6mTOqD5xOlqbUicUQXWvMPtderruHkZQNaU01SPz83jCCKryGGstppUNaPbA9jKEEVSraXYfw7k0QAiqaei0iOuACdaUi9u6uP+pDoK0bO4rma2+yy+WY6gRPK5WyFObgGSTos1BoRcwZKPTkDYwgu/SyxrnFwwm13aDWff2/5WHlWv3tpuWt/WmlydbrzGH6Hfvou/u6Sa5/ddlRPURPyxxflPjiuyBrVPitsW3aZW8+zshhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQUmX8dYCaAYueOQgAAAABJRU5ErkJggg=="
             alt="" class="delete-icon" @click="changeModActive">
        <button v-if="changeMod" @click="saveChange">Save</button>
      </div>
      <commentsFrame/>
    </div>

  </div>
</template>

<script>
import commentsFrame from "@/components/commentsFrame";

export default {
  name: "AboutNews",
  data() {
    return {
      isFetching: false,
      currentNews: '',
      bufferNews: '',
      changeMod: false
    }
  },
  components: {
    commentsFrame
  },
  created() {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      this.$store.getters.getNewsList.forEach(item => {
        if (item.source.id === this.$route.params.id) {
          this.currentNews = item
          if (this.$store.getters.isAdmin)
            this.bufferNews = Object.assign({}, item)
          this.isFetching = true
        }
      })
    },
    deleteNews() {
      this.$store.dispatch('removeNews', this.currentNews.source.id)
          .then(() => this.$router.push('/'))
    },
    changeModActive() {
      this.changeMod = !this.changeMod
    },
    saveChange() {
      this.currentNews = this.bufferNews
      this.$store.dispatch('editNews',this.currentNews).then((r)=>console.log(r))
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

.changed-title-info {
  margin-left: 20%;
  width: 80%;
}

.description {
  display: inline-block;
  float: right;
  margin-right: 15%;
  width: 50%;
  text-align: center;
}

.news-icon {
  display: inline-block;
  width: 30%;
  margin: 2%;
}

.image {
  width: 100%;
}

.changed-image-info {
  width: 100%;
}

.changed-description-info {
  margin-top: 10%;
  width: 100%;
  height: 7.5rem;
}

.changed-content-info {
  width: 100%;
  height: 7.5rem;
}

.aboutNews {
  width: 90%;
}

.copyright {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.copyright h4 {
  margin: 0;
}

.delete-icon {
  height: 3%;
  width: 4%;
  margin-top: 5%;
}

.delete-icon:hover {
  opacity: 0.6;
}

.delete-icon:active {
  width: 3%;
  height: 2%;
}
</style>
