const user = {
  name: "user",
  state: {
    visitedViews: [],
    cachedViews: [],
    token: sessionStorage.getItem("username")
      ? sessionStorage.getItem("username")
      : "",
    password: sessionStorage.getItem("password")
      ? sessionStorage.getItem("password")
      : "",
  },
  getters: {
    getTags: (state) => state.visitedViews,
    cachedViews: (state) => state.cachedViews,
    getToken: (state) => state.token,
    getPassword: (state) => state.password,
  },
  mutations: {
    putTags(state, { data }) {
      console.log('xxxxx')
      if (state.visitedViews.some((v) => v.path === data.path)) return;
      state.visitedViews.push(
        Object.assign({}, data, {
          title: data.meta.title || "no-name",
        })
      );
      if (state.cachedViews.includes(data.name)) return;
      if (!data.meta.noCache) {
        state.cachedViews.push(data.name);
      }
    },
    deleteView(state, data) {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === data.path) {
          state.visitedViews.splice(i, 1);
          break;
        }
      }
    },
    delCachedView(state, view) {
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i);
          state.cachedViews.splice(index, 1);
          break;
        }
      }
    },
    delOthersViews(state, view) {
      state.visitedViews = state.visitedViews.filter((v) => {
        return v.meta.affix || v.path === view.path;
      });
    },
    delOthersCachedViews(state, view) {
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i);
          state.cachedViews = state.cachedViews.slice(index, index + 1);
          break;
        }
      }
    },
    delAllVisitedViews(state) {
      // keep affix tags
      const affixTags = state.visitedViews.filter((tag) => tag.meta.affix);
      state.visitedViews = affixTags;
    },
    delAllCachedViews(state) {
      state.cachedViews = [];
    },
    updateVisitedView: (state, view) => {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view);
          break;
        }
      }
    },
    // 存储用户名
    SET_TOKEN(state, userInfo) {
      state.token = userInfo.username;
      state.password = userInfo.password;
    },
  },
  actions: {
    deleteView({ commit, state }, view) {
      return new Promise((resolve) => {
        commit("deleteView", view);
        commit("delCachedView", view);
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews],
        });
      });
    },
    delOthersViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit("delOthersViews", view);
        commit("delOthersCachedViews", view);
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews],
        });
      });
    },
    delAllVisitedViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit("delAllVisitedViews", view);
        commit("delAllCachedViews", view);
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews],
        });
      });
    },
    updateVisitedView({ commit }, view) {
      commit("updateVisitedView", view);
    },
    // 登录权限操作
    LoginByUsername({ commit }, userInfo) {
      return new Promise((resolve) => {
        commit("SET_TOKEN", userInfo);
        resolve();
      });
    },
  },
};
export default user;
