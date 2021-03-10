
const state = {
    token: window.localStorage.getItem('token'),
    user_id: window.localStorage.getItem('user_id'),
    user_isAdm: window.localStorage.getItem('user_isAdm'),
    user_name: window.localStorage.getItem('user_name')
};
const getters = {
    isLoggedIn: state => !!state.token,
    getToken: state => state.token,
    getAdm: state => !!state.user_isAdm,
    getName: state => state.user_name

};
const actions = {
    login: ({ commit }, data) => {
        const token = data["access_token"];
        const id = data['user']['id'];
        const role = data['user']['role'];
        const name = data['user']['name'];

        commit('setToken', token);
        commit('setId', id);
        commit('setName', name);
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user_id', id);
        window.localStorage.setItem('user_name', name);

        if (role[0] === "ADM") {
            commit('setAdm', role[0]);
            window.localStorage.setItem('user_isAdm', role[0]);
        } else {

            commit('setAdm', null);
        }

    },

    actionLogout: ({ commit }) => {
        commit('setToken', null);
        commit('setId', null);
        commit('setAdm', null);
        commit('setName', null);

        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user_id');
        window.localStorage.removeItem('user_isAdm');
        window.localStorage.removeItem('user_name');

    },


};
const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
    setId: (state, id) => {
        state.user_id = id;
    },
    setAdm: (state, isAdm) => {
        state.user_isAdm = isAdm;
    },
    setName: (state, name) => {
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