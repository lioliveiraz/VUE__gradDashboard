
const state = {
    token: window.localStorage.getItem('token'),
    user_id: window.localStorage.getItem('user_id'),
    user_name: window.localStorage.getItem('user_name')
};
const getters = {
    isLoggedIn: state => !!state.token,
    getToken: state => state.token,
    getName: state => state.user_name

};
const actions = {
    login: ({ commit }, data) => {

        const token = data["access_token"];
        const id = data['user']['id'];
        const role = data['user']['role'];
        const name = data['user']['name'];

        commit('SET_TOKEN', token);
        commit('SET_ID', id);
        commit('SET_NAME', name);
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user_id', id);
        window.localStorage.setItem('user_name', name);


    },

    logout: ({ commit }) => {
        commit('SET_TOKEN', null);
        commit('SET_ID', null);
        commit('SET_NAME', null);

        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user_id');
        window.localStorage.removeItem('user_name');

    },


};
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_ID: (state, id) => {
        state.user_id = id;
    },
    SET_NAME: (state, name) => {
        state.user_name = name;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};