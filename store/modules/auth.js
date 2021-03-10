
const state = {
    token: window.localStorage.getItem('token'),
    user_id: window.localStorage.getItem('user_id'),
    isAdm: window.localStorage.getItem('adm'),
    name: window.localStorage.getItem('user_name')
};
const getters = {
    isLoggedIn: state => !!state.token,
    token: state => state.token,
    adm: state => state.isAdm,
    name: state => state.name

};
const actions = {
    actionLogin: ({ commit }, data) => {
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
            window.localStorage.setItem('adm', role[0]);
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
        window.localStorage.removeItem('adm');
        window.localStorage.removeItem('user_name');

    },


};
const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
    setId: (state, id) => {
        state.id = id;
    },
    setAdm: (state, isAdm) => {
        state.isAdm = isAdm;
    },
    setName: (state, name) => {
        state.name = name;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};