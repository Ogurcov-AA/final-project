import axios from 'axios'

const news = {
    state: {
        newsList: ''
    },
    mutations: {
        setNewsList(state,data){
            state.newsList = data
        }
    },
    actions: {
        getNews({commit}) {
           return new Promise((resolve) => axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d072f63afae64577a8b7493df55cf7c3')
                .then(response => {console.log(response.data.articles)
                commit('setNewsList', response.data.articles)
                    resolve(response.data.articles)
                }))
        }
    },
    getters: {
        getNewsList: state => state.newsList
    }
}

export default news
