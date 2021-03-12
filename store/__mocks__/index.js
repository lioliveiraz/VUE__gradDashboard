import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const getters = {
    isLoggedIn: jest.fn().mockReturnValue(true),
    getToken: jest.fn().mockReturnValue({ token: "token" }),
    isAdm: jest.fn().mockReturnValue(),
    getName: jest.fn().mockReturnValue()
};

export const mutations = {
    SET_TOKEN: jest.fn(),
    SET_ID: jest.fn(),
    SET_ADM: jest.fn(),
    SET_NAME: jest.fn()
};

export const actions = {
    login: jest.fn(),
    LOGO_IMAGEut: jest.fn()
};

export const state = {
    token: "token",
    user_id: 1,
    user_isAdm: "adm",
    user_name: "name"
};

export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
    const mockGetters = Object.assign({}, getters, custom.getters);
    const mockMutations = Object.assign({}, mutations, custom.mutations);
    const mockActions = Object.assign({}, actions, custom.actions);
    const mockState = Object.assign({}, state, custom.state);

    return {
        getters: mockGetters,
        mutations: mockMutations,
        actions: mockActions,
        state: mockState,
        store: new Vuex.Store({
            getters: mockGetters,
            mutations: mockMutations,
            actions: mockActions,
            state: mockState,
        }),
    };
}

export const store = __createMocks().store;