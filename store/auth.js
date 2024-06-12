import nuxtStorage from "nuxt-storage";
import userInfo from "@/data/user";

const storage = {
  userInfoFetch() {
    if (process.client) {
      let data = {};
      if (localStorage.length > 0) {
        data = JSON.parse(localStorage.getItem("userInfo"));
      }
      let user = _.reduceRight(
        userInfo,
        function (flattened, other) {
          return flattened.concat(other);
        },
        []
      );

      let userData = [];
      data ? (userData = _.concat(user, data.value)) : userData.push(user);
      return userData;
    }
  },
};

/**
 * userInfo
 * @param {string} id
 * @param {string} userId
 * @param {string} password
 * @param {string} nickname
 * @param {object} photoList
 */
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
  removeUserInfo(state, userInfo) {
    let userList = _.cloneDeep(state.userInfo);
    _.remove(userList, function (n) {
      return (n.userId = userInfo.userId);
    });

    nuxtStorage.localStorage.setData("userInfo", userList);
    state.userInfo = userList;
  },
};

export const actions = {};

export const getters = {
  getUserInfo(state) {
    return state.userInfo;
  },
};
