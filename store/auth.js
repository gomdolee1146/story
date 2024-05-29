import nuxtStorage from "nuxt-storage";

const storage = {
  userInfoFetch() {
    if (process.client) {
      if (localStorage.length > 0) {
        let data = JSON.parse(localStorage.getItem("userInfo"));
        return data
      }
    }
  },
};

export const state = () => ({
  userInfo: storage.userInfoFetch() || [],
});

export const mutations = {
  getUserInfo(state) {
    const userList = storage.userInfoFetch() || [];
    state.userInfo = userList;
  },
  addUserInfo(state, userInfo) {
    let userList = _.cloneDeep(state.userInfo);
    userList.push(userInfo);

    nuxtStorage.localStorage.setData("userInfo", userList);
    state.userInfo = userList;
  },
  removeUserInfo(state, payload) {
    localStorage.removeData(payload.userInfo);
    state.userInfo.splice(payload.index, 1);
  },
};

export const actions = {};

export const getters = {
  getUserInfo(state) {
    return state.userInfo;
  },
};
