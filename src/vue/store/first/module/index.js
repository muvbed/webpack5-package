import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
const cookiesConfig = JSON.stringify({
  expireTimes: "30d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "Lax",
});

export default {
  state: {
    msg: "",
  },
  getters: {
    getMsg(state) {
      return state.msg;
    },
  },
  actions: {
    setMsg({ commit }) {
      commit("SET_MSG", "Vue 3 && Vuex && VueRouter");
    },
  },
  mutations: {
    SET_MSG(state, msg) {
      state.msg = msg;
      cookies.set("msg", JSON.stringify(msg), cookiesConfig);
    },
  },
};
