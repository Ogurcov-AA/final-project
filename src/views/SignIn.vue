<template>
<div class="sign">
  <h3>Sign In</h3>
  <form action="" class="authForm">
    <input type="email" placeholder="Email" required>
    <input type="password" placeholder="Password" required>
   <div class="buttMenu">
    <input type="submit" class="butt" value="Sign">
    <input type="button" class="butt" value="Registration">
   </div>
  </form>
</div>
</template>

<script>
export default {
name: "SignIn"
}
</script>

<style scoped>
.sign{
  text-align: center;
}
h3{
  margin-bottom: 3%;
}
.authForm{
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 20%;
}
input{
  margin-bottom: 5%;
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
