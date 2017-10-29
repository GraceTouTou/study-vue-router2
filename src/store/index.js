import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    scoresSum: 0,
    questionNum: 1,
    questionDetail: [{
        "question_id": 1,
        "question_name": "第一题",
        "question_content": "你能否在一个人口密集到爆炸的城市中愉快的生存？",
        "question_answer": [{
            "answer_id": 1,
            "answer_content": "不能，人太多会使我感到无法呼吸。",
            "answer_score": 0
        },{
            "answer_id": 2,
            "answer_content": "能，在哪我都能生活的很好。",
            "answer_score": 1
        }]
    },{
        "question_id": 2,
        "question_name": "第二题",
        "question_content": "当你不和朋友联系时，会感到难过或者寂寞吗？",
        "question_answer": [{
            "answer_id": 1,
            "answer_content": "有时会。",
            "answer_score": 0
        },{
            "answer_id": 2,
            "answer_content": "一点都不会。",
            "answer_score": 1
        }]
    }]
}

const mutations = {
    rememberScore (state, itemScore) {
        console.log(itemScore)
        state.scoresSum += itemScore
    },
    addQuestionId (state) {
        state.questionNum += 1
    },
    initData (state) {
        state.scoresSum = 0,
        state.questionNum = 1
    }
}

const actions = {
    gotoNextQuestion ({commit, state}, itemScore) {
        commit('rememberScore',itemScore)
        if (state.questionNum != state.questionDetail.length) {
            commit('addQuestionId')
        }
    },
    initializeData ({commit,state}){
        commit('initData')
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