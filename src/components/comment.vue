<template>
  <div>
    <div class="container">
      <h3><span>{{name}}</span>
        <img id="deleteNews" v-if="$store.getters.isAdmin" src="https://image.flaticon.com/icons/png/512/1483/1483063.png" alt="" class="delete-icon">
      </h3>
         <p>{{comments}}</p>
     </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: ["name","comments"]
}
</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 5px; /* скругление углов блока */
  padding: 5px 0 5px 3px; /* внутренние поля */
  margin: 5px; /* внешние отступы */
}
.container p{
  display: inline-block;
  width: 90%;
}
.container span{
  display: inline-block;
  width: 95%;
}

.delete-icon{
  height: 3%;
  width: 4%;

}

.delete-icon:hover{
  opacity: 0.6;
}
.delete-icon:active{
  width: 3%;
  height: 2%;
}
</style>
