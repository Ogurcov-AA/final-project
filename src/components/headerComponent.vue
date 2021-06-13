<template>
  <div class="header">
    <div class="home">
      <img src="https://img.icons8.com/ios/452/home-page.png" alt="" class="home-icon" @click="$router.push('/').catch(err => {})">
    </div>
    <div class="search">
      <input type="text" class="search-field" v-model="searchString">
      <img src="https://image.flaticon.com/icons/svg/49/49116.svg" alt="" class="search-icon">
      <input type="button" class="search-button" value="Find" @click="searchNews">
    </div>
    <div class="auth" v-if="$store.getters.getName===''">
      <input type="button" value="Sign In/Sign Up" @click="searchButton" class="authButton">
    </div>
    <div class="auth" v-else>
      <p class="login-text">{{ $store.getters.getName }}</p>
      <input type="button" value="Log Out" @click="logout()" class="authButton">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      searchString: ''
    }
  },
  methods: {
    logout() {
    this.$store.dispatch('logout')
    },
    searchNews(){
      if(this.searchString!=='')
      this.$router.push('/search/' + this.searchString).catch(() => {this.$router.replace('/search/' + this.searchString)})
    else {
      let el = document.getElementsByClassName('search-field')
        el[0].classList.add('search-error')
        el[0].setAttribute('placeholder','Введите слово')
      }
    },
    searchButton(){
      let el = document.getElementsByClassName('search-field')
      el[0].classList.add('search-error')
      el[0].setAttribute('placeholder','Введите слово')
      this.$router.push('/login').catch(()=>{})
    }
  }
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

.login-text {
  display: inline-block;
  margin-right: 40px;
  font-size: 26px;
}
.search-error{
  color: #8d1818;
  border: 1px solid #8d1818;
}


</style>
