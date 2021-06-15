import axios from 'axios'

const news = {
    state: {
        newsList: [],
        searchNewsList: '',
        lastIndex: 0
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
        },
        newNews(state, news) {
            news.source = {name: news.author, id: state.newsList[state.newsList.length - 1].source.id + 1}
            console.log(news)
            state.newsList.unshift({...news})
            console.log(state.newsList)
        },
        edNews(state, news) {
            for (let i = 0; i < state.newsList.length; i++) {
                if (state.newsList[i].source.id === news.source.id) {
                    state.newsList[i] = news
                }
            }
        }
    },
    actions: {
        getNews({commit}) {
            return new Promise((resolve, reject) => axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d072f63afae64577a8b7493df55cf7c3')
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
                })
                .catch(()=>reject("error getting data, try again later")))
        },
        removeNews({commit}, newsID) {
            return new Promise((resolve) => {
                console.log("+")
                commit('delNews', newsID)
                resolve('ok')

            })
        },
        addNews({commit}, news) {
            return new Promise((resolve) => {
                commit('newNews', news)
                resolve('ok')
            })
        },
        editNews({commit}, news) {
            return new Promise((resolve) => {
                commit('edNews', news)
                resolve('ok')
            })
        }
    },
    getters: {
        getNewsList: state => state.newsList
    }
}

export default news

