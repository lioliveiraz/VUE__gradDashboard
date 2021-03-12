
const state = {
    token: window.localStorage.getItem('token'),
    user_id: window.localStorage.getItem('user_id'),
    user_isAdm: window.localStorage.getItem('user_isAdm'),
    user_name: window.localStorage.getItem('user_name')
};
const getters = {
    isLoggedIn: state => !!state.token,
    getToken: state => state.token,
    isAdm: state => !!state.user_isAdm,
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

        if (role[0] === "ADM") {
            commit('SET_ADM', role[0]);
            window.localStorage.setItem('user_isAdm', role[0]);
        } else {

            commit('SET_ADM', null);
        }

    },

    logout: ({ commit }) => {
        commit('SET_TOKEN', null);
        commit('SET_ID', null);
        commit('SET_ADM', null);
        commit('SET_NAME', null);

        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user_id');
        window.localStorage.removeItem('user_isAdm');
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
    SET_ADM: (state, isAdm) => {
        state.user_isAdm = isAdm;
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