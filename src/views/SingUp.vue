<template>
  <div class="sign">
    <h3>Registration</h3>
    <form @submit.prevent="register" class="authForm">
      <input type="text" placeholder="Name" minlength="6" v-model="name" required>
      <input type="text" placeholder="Surname" minlength="6" v-model="surname" required>
      <input id="signUpPass" type="password" placeholder="Password" minlength="6" v-model="password" required>
      <span id="sugnup-error-pass" class="error-message error-hide">Password mismatch</span>
      <input id="signUpRePass" type="password" placeholder="Confirm Password" minlength="6" v-model="rePassword"
             required>
      <span id="signup-error-message" class="error-message error-hide">User with this email already exists</span>
      <input id="signUpEmail" type="email" placeholder="Email" v-model="email" required>
      <div class="buttMenu">
        <input type="submit" class="butt" value="Sign Up">
        <input type="reset" class="butt" value="Clear">
      </div>
    </form>
  </div>

</template>

<script>
export default {
  name: "SingUp",
  data() {
    return {
      name: null,
      surname: null,
      password: null,
      rePassword: null,
      email: null,
    }
  },
  methods: {

    register() {
      let name = this.name
      let surname = this.surname
      let password = this.password
      let email = this.email
      if (this.checkPairPassword()) {
        this.$store.dispatch('register', {name, surname, password, email})
            .then(() => this.$router.push('/'))
            .catch(() => {
              document.getElementById('signup-error-message').classList.remove("error-hide")
              this.errorBorder("signUpEmail", true)
            })
      } else {
        document.getElementById('sugnup-error-pass').classList.remove("error-hide")
        this.errorBorder("signUpPass", true)
        this.errorBorder("signUpRePass", true)
      }
    },

    checkPairPassword() {
      return this.password === this.rePassword
    },

    errorBorder(elemId, toAddFlag) {
      if (toAddFlag)
        document.getElementById(elemId).classList.add('errorBorder')
      else document.getElementById(elemId).classList.remove('errorBorder')
    }
  },
  watch: {
    email() {
      document.getElementById('signup-error-message').classList.add("error-hide")
      this.errorBorder("signUpEmail", false)
    },
    password() {
      this.errorBorder("signUpPass", false)
      this.errorBorder("signUpRePass", false)
      document.getElementById('sugnup-error-pass').classList.add("error-hide")
    },
    rePassword() {
      this.errorBorder("signUpPass", false)
      this.errorBorder("signUpRePass", false)
      document.getElementById('sugnup-error-pass').classList.add("error-hide")
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
  width: 15%;
}

input {
  margin-bottom: 5%;
  height: 20px;
  border: 1px solid black;
}

::placeholder {
  color: black;
  font-size: 10px;
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

.error-message {
  color: #8d1818;
  font-size: 20px;
  font-weight: bold;
  font-family: Arial;
}

.error-hide {
  opacity: 0;
  z-index: -1;
  height: 0px;
}

.errorBorder {
  border: 3px solid #8d1818;
}
</style>
