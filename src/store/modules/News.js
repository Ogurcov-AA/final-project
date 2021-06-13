import axios from 'axios'

const news = {
    state: {
        newsList: '',
        searchNewsList: ''
    },
    mutations: {
        setNewsList(state, data) {
            state.newsList = data
        }
    },
    actions: {
        getNews({commit}) {
            return new Promise((resolve) => axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d072f63afae64577a8b7493df55cf7c3')
                .then(response => {
                    let list = response.data.articles
                    Array.from(list).forEach(item => {
                        let i = 0
                        item.source.id = i
                        i++
                })
            console.log(list)
            commit('setNewsList', list)
            resolve(list)
        }
))
}
},
getters: {
    getNewsList: state => state.newsList
}
}

export default news
