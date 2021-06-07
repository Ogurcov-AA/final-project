<template>
  <div class="sign">
    <h3>Registration</h3>
    <form action="" class="authForm">
      <input type="text" placeholder="Name" required>
      <input type="text" placeholder="Surname" required>
      <input type="password" placeholder="Password" required>
      <input type="password" placeholder="Confirm Password" required>
      <input type="email" placeholder="Email" required>
      <div class="buttMenu">
        <input type="submit" class="butt" value="Sign Up">
        <input type="reset" class="butt" value="Clear">
      </div>
    </form>
  </div>

</template>

<script>
export default {
  name: "SingUp"
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
  width: 15%;
}
input{
  margin-bottom: 5%;
  height: 20px;
  border: 1px solid black;
}
::placeholder{
  color: black;
  font-size: 10px;
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
