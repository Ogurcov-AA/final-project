import userInfo from '../../helper/auth.json'

const user = {
  state: {
    name: function () {
      if ((JSON.parse(sessionStorage.getItem('userInfo'))) !== null) return (JSON.parse(sessionStorage.getItem('userInfo'))).name
      return ''
    }(),
    surname: function () {
      if ((JSON.parse(sessionStorage.getItem('userInfo'))) !== null) return (JSON.parse(sessionStorage.getItem('userInfo'))).surname
      return ''
    }(),
    email: function () {
      if ((JSON.parse(sessionStorage.getItem('userInfo'))) !== null) return (JSON.parse(sessionStorage.getItem('userInfo'))).email
      return ''
    }(),
  },
  mutations: {
    auth_user (state, data) {
      state.name = data.name
      state.surname = data.surname
      state.email = data.email
    }
    ,
    logout_user (state) {
      state.name = ''
      state.surname = ''
      state.email = ''
    }
  }
  ,
  actions: {
    setUser ({commit}, user) {
      return new Promise((resolve, reject) => {
        for (let i = 0; i < userInfo.User.length; i++) {
          if (userInfo.User[i].email === user.email) {
            if (userInfo.User[i].password === user.password) {
              commit('auth_user', userInfo.User[i])
              sessionStorage.setItem('userInfo', JSON.stringify(userInfo.User[i]))
              resolve('ok')
            } else {
              reject('password')
            }
          }
        }
        reject('email')
      })
    }
    ,
    register ({commit}, regUser) {
      return new Promise((resolve, reject) => {
        console.log(regUser)
        for (let i = 0; i < userInfo.User.length; i++) {
          console.log(userInfo.User[i].email, regUser.email)
          if (userInfo.User[i].email === regUser.email) {
            reject('email')
            return
          }

        }
        commit('auth_user', regUser)
        sessionStorage.setItem('userInfo', JSON.stringify(regUser))
        resolve('ok')
      })
    }
    ,
    logout ({commit}) {
      commit('logout_user')
      sessionStorage.removeItem('userInfo')
    }
  }
  ,
  getters: {
    getName: state => state.name,
    getSurName: state => state.surname,
    getEmail: state => state.email,
    isAdmin: state => state.email === 'admin@root',
    isAuth: state => state.name !== ''
  }
}

export default user
