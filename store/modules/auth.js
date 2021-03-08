
export const state = {
    token: window.localStorage.getItem('token'),
    user_id: window.localStorage.getItem('user_id')
};
export const getters = {
    isLoggedIn: state => !!state.token,
    token: state => state.token

};
export const actions = {
    actionLogin: ({ commit }, data) => {
        const token = data["access_token"];
        const id = data['user']['id'];
        commit('setToken', token);
        commit('setId', id);
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user_id', id);

    },

    actionLogout: ({ commit }) => {
        commit('setToken', null);
        commit('setId', null);
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user_id');
    }
};
export const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
    setId: (state, id) => {
        state.id = id;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};