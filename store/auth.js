const storage = {
  fetch() {
    if (typeof window !== 'undefined'){
      const arr = [];
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.Key !== 'loglevel:webpack-dev-server') {
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          }
        }
      }
      return arr;
    }
  },
};

export const state = () => ({
  userInfo: storage.fetch()
})

export const mutations = {
  addUserInfo(state, userInfo){
    const userObj = {user:userInfo};
    localStorage.setItem('userInfo', JSON.stringify(userObj))
    state.userInfo.push(userObj)
  },
  removeUserInfo(state,payload){
    localStorage.removeItem(payload.userInfo);
    state.userInfo.splice(payload.index, 1);
  }
}


export const actions = {
 
}

export const getters = {
  getUserInfo(state){
    return state.userInfo;
  }
}
 