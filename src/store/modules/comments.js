import List from '@/helper/comment.json'

const comment = {
    state: {
        commentList: List.Comment,
        currentNews: '',
        comments: []
    },
    mutations: {
        getComm(state, newsID) {
            state.currentNews = newsID
            state.comments = []
            for (let i = 0; i < state.commentList.length; i++) {
                if (Number(state.commentList[i].newsId) === Number(newsID)) {
                    state.commentList[i].comments.forEach(item => state.comments.push(item))
                }
            }
        },
        addComm(state, commentData) {
            let {newsId, message, author} = commentData
            let flag = false
            for (let i = 0; i < state.commentList.length; i++) {
                if (Number(state.commentList[i].newsId) === Number(newsId)) {
                    flag = true
                    state.commentList[i].comments.push({
                        id: state.commentList[i].comments.length.toString(),
                        message,
                        author
                    })
                }
            }
            if (!flag) {
                let comments = [{
                    id: "0",
                    message,
                    author
                }]
                state.commentList.push({
                    newsId: newsId.toString(),
                    comments
                })
            }
        }
    },
    actions: {
        getCommentList({commit}, newsId) {
            return new Promise((resolve) => {
                commit('getComm', newsId)
                resolve('ok')
            })
        },
        addComment
            ({commit}, commentData) {
            return new Promise((resolve) => {
                commit('addComm', commentData)
                resolve('ok')
            })
        }
    },
    getters: {
        getComment: state => state.comments,
        getCurrentNews: state => state.currentNews
    }
}

export default comment
