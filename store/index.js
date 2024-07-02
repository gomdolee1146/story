const storage = {
  myInfoFetch() {
    if (process.client) {
      let data = {};
      if (sessionStorage.length > 0) {
        data = JSON.parse(sessionStorage.getItem("userInfo"));
      }
      return data;
    }
  },
};

export const state = () => ({
  user: storage.myInfoFetch() || {},
});

export const mutations = {
  updateUserInfo(state, userInfo) {
    state.user = userInfo;
    sessionStorage.setItem("userInfo", userInfo);
  },
};

export const actions = {
  LOGIN({ commit }, userInfo) {
    commit("updateUserInfo", userInfo);
  },
  LOGOUT({ commit }) {
    commit("updateUserInfo", "");
  },
};
