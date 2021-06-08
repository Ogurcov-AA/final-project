<template>
  <div class="sign">
    <h3>Sign In</h3>
    <form @submit.prevent="signin" class="authForm">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <div class="buttMenu">
        <input type="submit" class="butt" value="Sign">
        <input type="button" class="butt" value="Registration">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin() {
      let userList = this.$store.getters.getUserList.User
      if (this.checkValidPair(userList)) {
        this.$router.replace('/')
      }
    },
    checkValidPair(userList) {
      let userInfo = userList.find(user => user.email === this.email)
      if (userInfo) {
        if (userInfo.password === this.password) {
          this.$store.dispatch('setUser', userInfo)
          return userInfo
        } else {
          //modal window
          alert("incorrectly password")
          return false
        }
      } else {
        //modal window
        alert("user don't find")
        return false
      }
    }
  }
}
</script>

<style scoped>
.sign {
  text-align: center;
}

h3 {
  margin-bottom: 3%;
}

.authForm {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 20%;
}

input {
  margin-bottom: 5%;
  border: 1px solid black;
}

.buttMenu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.butt {
  background: transparent;
  height: 40px;
  width: 47%;
}
</style>
