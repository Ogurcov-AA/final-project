<template>
  <div class="sign">
    <h3>Sign In</h3>
    <form @submit.prevent="signin" class="authForm">
      <span id="signin-email-message" class="error-message error-message-email">No such user</span>
      <input id="signin-email" type="email" v-model="email" placeholder="Email" required>
      <span id="signin-pass-message" class="error-message error-message-pass">Invalid password</span>
      <input id="signin-pass" type="password" v-model="password" placeholder="Password" required>
      <div class="buttMenu">
        <input type="submit" class="butt" value="Sign">
        <input type="button" class="butt" value="Registration" @click="$router.push('/login/signup')">
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

      let email = this.email
      let password = this.password
      this.$store.dispatch('setUser', {email, password})
          .then(()=>this.$router.push('/'))
          .catch(err => {
            switch (err) {
              case "email":
                document.getElementById('signin-email').classList.add('error-field')
                  document.getElementById('signin-email-message').classList.remove('error-message-email')
                break
              case "password":
                document.getElementById('signin-pass').classList.add('error-field')
                document.getElementById('signin-pass-message').classList.remove('error-message-pass')
                break
            }
          })
    },
  },
  watch: {
    email(){
      document.getElementById('signin-email').classList.remove('error-field')
      document.getElementById('signin-email-message').classList.add('error-message-email')
    },
    password(){
      document.getElementById('signin-pass').classList.remove('error-field')
      document.getElementById('signin-pass-message').classList.add('error-message-pass')
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
.error-field{
  border: 3px solid #8d1818;
}
.error-message{
color: #8d1818;
  font-size: 20px;
  font-weight: bold;
  font-family: Arial;
}
.error-message-email{
  opacity: 0;
  height: 0px;
}

.error-message-pass{
  height: 0px;
  opacity: 0;
}
</style>
