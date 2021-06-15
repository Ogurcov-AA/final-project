<template>
  <div class="news">
    <img v-bind:src="url" alt=""
         class="news-icon">
    <div class="news-info">
      <h4>{{ title }}</h4>
      <p>{{ restrictionStr }}</p>
      <h5><span>{{ author }}</span>{{ publishedAt }}</h5>
    </div>
    <img id="deleteNews" v-if="$store.getters.isAdmin" src="https://image.flaticon.com/icons/png/512/1483/1483063.png"
         alt="" class="delete-icon" @click="deleteNews" >
  </div>
</template>

<script>
export default {
  name: "news",
  props: ["title", "description", "url", "author", "publishedAt", "id"],
  methods: {
    deleteNews() {
      event.stopPropagation()
      this.$store.dispatch('removeNews', this.id).then(() => console.log(this.$store.getters.getNewsList))
    }
  },
  computed: {
    restrictionStr(){
      if(this.description.length>300){
        return this.description.slice(0,300) + "..."
      }else return this.description
    }
  }
}
</script>

<style scoped>
.news {
  display: flex;
  margin: 0 0 2% 2%;
  border: 1px solid black;
}

.news-icon {
  max-width: 50%;
  min-width: 40%;
  margin: 2%;
}

.news-info {
  flex-direction: column;
}

.delete-icon {
  height: 5%;
  width: 5%;
  margin: 3% 3% 0 0;
}

.delete-icon:hover {
  opacity: 0.6;
}

.delete-icon:active {
  width: 4%;
  height: 4%;
}

.news-info h5 {
  margin-top: 15%;
}

.news-info h5 span {
  margin-right: 15%;
}
</style>
