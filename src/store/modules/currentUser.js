const user = {
    state: {
        name: (JSON.parse(sessionStorage.getItem('userInfo')))?.name || '',
        surname: (JSON.parse(sessionStorage.getItem('userInfo')))?.surname || '',
        email: (JSON.parse(sessionStorage.getItem('userInfo')))?.email || '',
    },
    mutations: {
        auth_user(state, data) {
            state.name = data.name
            state.surname = data.surname
            state.email = data.email
        },
        logout_user(state) {
            state.name = ''
            state.surname = ''
            state.email = ''
        }
    },
    actions: {
        setUser({commit}, user) {
            commit('auth_user', user)
            sessionStorage.setItem("userInfo", JSON.stringify(user))
        },
        logout({commit}) {
            commit('logout_user')
            sessionStorage.removeItem('userInfo')
        }
    },
    getters: {
        getName: state => state.name,
        getSurName: state => state.surname,
        getEmail: state => state.email,
    }
}

export default user
