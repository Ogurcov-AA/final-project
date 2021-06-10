<template>
  <div class="comment-area">
    <h1>Comments</h1>
    <div class="comment-frame" v-if="$store.getters.isAuth">
      <form action="" class="newComment" v-if="!$store.getters.isAdmin">
        <input type="text" placeholder="Add new comment">
        <input type="button" value="Add">
      </form>

      <comment v-bind:name="'Sasha Ogur'"
               v-bind:comments="'good news'"/>

      <comment v-bind:name="'Sasha Ogur'"
               v-bind:comments="'good news'"/>

      <comment v-bind:name="'Sasha Ogur'"
               v-bind:comments="'good news'"/>

    </div>
    <div v-else>
      <p>You can't see or add comments. Please Sign In or Sign up</p>
    </div>
  </div>
</template>

<script>
import comment from "@/components/comment";

export default {
  name: "commentsFrame",
  components: {
    comment
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
