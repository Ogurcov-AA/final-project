<template>
<div>
  <form action="" class="createNews">
    <input type="text" placeholder="author" minlength="6" required>
    <input type="text" placeholder="title" minlength="6" required>
    <input type="text" placeholder="description" minlength="6" required>
    <input type="text" placeholder="urlToImage" minlength="6" required>
    <input type="datetime-local" placeholder="publishedAt" required>
    <textarea cols="30" rows="5" placeholder="content" minlength="6" required style="margin-bottom: 10%"></textarea>
    <div class="buttMenu">
      <input type="submit" class="butt" value="Add">
      <input type="reset" class="butt" value="Clear">
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "addNews"
}
</script>

<style scoped>
.createNews{
  display: flex;
  flex-direction: column;
  width: 15%;
  margin: 0 auto;
}
input{
  margin-bottom: 10%;
  height: 30px;
  border: 1px solid black;
}
.buttMenu{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.butt{
  background: transparent;
  height: 40px;
  width: 47%;
}
</style>
