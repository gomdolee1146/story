export const state = () => ({
  user: {
    id: 'aaa123',
    nick: '곰돌곰돌'
  },
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  updateUserInfo(state, userInfo) {
    state.user = userInfo;
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
