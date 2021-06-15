<template>
  <div class="comment-area">
    <h1>Comments</h1>
    <div class="comment-frame" v-if="$store.getters.isAuth">
      <form action="" class="newComment" v-if="!$store.getters.isAdmin">
        <input type="text" placeholder="Add new comment" v-model="message">
        <input type="button" value="Add" @click="addNewComment">
      </form>
      <div v-if="isFetching">
        <p v-if="comments.length===0">Write the first comment</p>
        <div v-for="item in comments" :key="item.id">
          <comment v-bind:name="item.author"
                   v-bind:comments="item.message"
                   v-bind:id="item.id"
                    @update="getList"/>
        </div>
      </div>
      <div v-else>
        <loading/>
      </div>
    </div>
    <div v-else>
      <p>You can't see or add comments. Please Sign In or Sign up</p>
    </div>
  </div>
</template>

<script>
import comment from "./comment.vue";
import loading from "./loading.vue";

export default {
  name: "commentsFrame",
  components: {
    comment,
    loading
  },
  data() {
    return {
      message: '',
      comments: [],
      isFetching: false
    }
  },
  props: ["newsId"],
  created() {
    this.getList()
  },
  methods: {
    addNewComment() {
      let newsId = this.newsId
      let name = this.$store.getters.getName + " " + this.$store.getters.getSurName
      let message = this.message
      this.$store.dispatch('addComment', {newsId, author: name, message}).then(() => {
        this.getList()
      })
    },
    getList() {
      this.$store.dispatch('getCommentList', this.newsId).then(() => {
        this.comments = this.$store.getters.getComment
        this.isFetching = true
      })
    }
  }
}
</script>

<style scoped>
.comment-frame {
  min-height: 100px;
  border: 1px solid black;
}

.comment-area {
  margin-top: 5%;
  margin-bottom: 10%;
  width: 70%;
  min-height: 30%;
}

.newComment {
  margin: 2%;
  width: 40%;
}

input[type="text"] {
  width: 70%;
}

input[type="button"] {
  background: transparent;
  outline: none;
}

::placeholder {
  color: black;
}

</style>
