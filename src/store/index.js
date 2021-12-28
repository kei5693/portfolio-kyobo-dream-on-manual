import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detailPageData: [
      {
        title: "공통(로그인/메인화면) 업무",
        subPage: 10,
      },
      {
        title: "고객정보 업무",
        subPage: 11,
      },
      {
        title: "가입업무",
        subPage: 34,
      },
      {
        title: "계약 및 유지관리 업무",
        subPage: 15,
      },
      {
        title: "지급업무",
        subPage: 13,
      },
      {
        title: "활동지원 업무",
        subPage: 23,
      },
      {
        title: "리크루팅/양성 업무",
        subPage: 7,
      },
      {
        title: "단체업무<span>*22년 1월 중 오픈예정</span>",
        subPage: 0,
      },
    ]
  },
  getters: {
    getMenuMain:(state) => {
      return state.detailPageData.map(d=>d.title);
    },
    getContentSubPage:(state) => (mainMenuIndex) => {
      return state.detailPageData[mainMenuIndex].subPage;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
