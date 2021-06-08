import userInfo from "@/helper/auth.json";

const moduleAuth = {
    state: {
        user: userInfo
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getUserList: state => state.user
    }
}

export default moduleAuth
