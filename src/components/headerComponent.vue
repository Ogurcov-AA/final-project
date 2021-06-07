<template>
  <div class="header">
    <div class="home">
      <img src="https://img.icons8.com/ios/452/home-page.png" alt="" class="home-icon">
    </div>
    <div class="search">
      <input type="text" class="search-field">
      <img src="https://image.flaticon.com/icons/svg/49/49116.svg" alt="" class="search-icon">
      <input type="button" class="search-button" value="Find">
    </div>
    <div class="auth">
      <input type="button" value="Sign In/Sign Up" class="authButton">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.search {
  display: inline-flex;
  border: 1px solid black;
  height: 30px;
}

.search-icon {
  width: 5%;
  height: 80%;
  margin: 2px 2px;
  order: -1;
}

.search-field {
  width: 300px;
  border: 0;
  outline: none;
}

.search-button {
  background-color: transparent;
  outline: none;
  border-top: 0;
  border-bottom: 0;
  border-right: 0;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5% 10% 5% 10%;
  align-items: center;

}

.home-icon {
  width: 45px;
  height: 45px;
  order: -1;

}

.authButton {
  background: transparent;
  height: 45px;
  outline: none;
}

</style>
