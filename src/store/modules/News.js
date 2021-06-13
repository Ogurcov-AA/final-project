import axios from 'axios'

const news = {
    state: {
        newsList: [],
        searchNewsList: ''
    },
    mutations: {
        setNewsList(state, data) {
            state.newsList = data
        },
        delNews(state, newsID) {

            let index = -1
            for (let i = 0; i < state.newsList.length; i++) {
                if (state.newsList[i].source.id === newsID) {
                    index = i
                    break
                }
            }
            console.log(index)
            if (index !== -1)
                state.newsList.splice(index, 1)
        }
    },
    actions: {
        getNews({commit}) {
            return new Promise((resolve) => axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d072f63afae64577a8b7493df55cf7c3')
                .then(response => {
                        let list = response.data.articles
                        let i = 0
                        Array.from(list).forEach(item => {

                            item.source.id = i
                            i++
                        })
                        console.log(list)
                        commit('setNewsList', list)
                        resolve(list)
                    }
                ))
        },
        removeNews({commit}, newsID) {
            return new Promise((resolve) => {
                console.log("+")
                commit('delNews', newsID)
                resolve('ok')

            })
        }
    },
    getters: {
        getNewsList: state => state.newsList
    }
}

export default news
