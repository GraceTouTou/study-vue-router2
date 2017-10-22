import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    scoresSum: 0,
    questionNum: 1,
    questionDetail: [{
        "question_id": 1,
        "question_name": "第一题",
        "question_content": "如果你生活在四周都是人的环境，你能适应吗？",
        "question_answer": [{
            "answer_id": 1,
            "answer_content": "可以，我能适应。",
            "answer_score": 1
        },{
            "answer_id": 2,
            "answer_content": "我无法适应。",
            "answer_score": 0
        }]
    },{
        "question_id": 2,
        "question_name": "第二题",
        "question_content": "如果你的朋友很少，你会感到孤独吗？",
        "question_answer": [{
            "answer_id": 1,
            "answer_content": "有时会。",
            "answer_score": 0
        },{
            "answer_id": 2,
            "answer_content": "不会。",
            "answer_score": 1
        }]
    }]
}

const mutations = {
    rememberScore (state, itemScore) {
        state.scoresSum += itemScore
    },
    initData (state) {
        state.scoresSum = 0,
        state.questionNum = 1
    }
}

// const actions = {
//     rememberScore ()
// }

export default new Vuex.Store({
    state,
    actions,
    mutations,
})