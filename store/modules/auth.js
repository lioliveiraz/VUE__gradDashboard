
const state = {
    token: window.localStorage.getItem('token'),
    user_id: window.localStorage.getItem('user_id'),
    isAdm: window.localStorage.getItem('adm')
};
const getters = {
    isLoggedIn: state => !!state.token,
    token: state => state.token,
    adm: state => state.isAdm

};
const actions = {
    actionLogin: ({ commit }, data) => {
        const token = data["access_token"];
        const id = data['user']['id'];
        const role = data['user']['role'];

        commit('setToken', token);
        commit('setId', id);

        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user_id', id);


        if (role[0] === "ADM") {
            commit('setAdm', role[0]);
            window.localStorage.setItem('adm', role[0]);
        } else {
            commit('setAdm', null);
        }

    },

    actionLogout: ({ commit }) => {
        commit('setToken', null);
        commit('setId', null);
        commit('setAdm', null);

        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user_id');
        window.localStorage.removeItem('adm');

    },


};
const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
    setId: (state, id) => {
        state.id = id;
    },
    setAdm: (state, adm) => {
        state.adm = adm;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};