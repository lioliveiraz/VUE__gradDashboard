import Vue from 'vue';
import Vuex from 'vuex';
import {jest} from '@jest/globals'

Vue.use(Vuex);

export const getters = {
    isLoggedIn: jest.fn().mockReturnValue(true),
    getToken: jest.fn().mockReturnValue({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkFETSJdLCJpYXQiOjE2MTgzMjc3NjksImV4cCI6MTYxODM2Mzc2OX0.MFwvLw2P3cel1jGha7ueaYDkVqVH1Z1tYtomgyhULuI" }),
    getName: jest.fn().mockReturnValue(),
    getCourses: jest.fn().mockReturnValue([{ name: "course", duration: 1 }, { name: "course", duration: 2 }]),
    getAssessments: jest.fn().mockReturnValue([{ name: "assessments" }]),
    getScores: jest.fn().mockReturnValue([{ name: "scores" }])

};

export const mutations = {
    SET_TOKEN: jest.fn(),
    SET_ID: jest.fn(),
    SET_NAME: jest.fn(),
    SET_COURSES: jest.fn(),
    SET_ASSESSMENTS: jest.fn(),
    SET_SCORES: jest.fn(),
    ADD_COURSE: jest.fn(),
    ADD_ASSESSMENT: jest.fn(),
    ADD_SCORE: jest.fn()
};

export const actions = {
    login: jest.fn(),
    logout: jest.fn(),
    fetchCourses: jest.fn(),
    fetchScores: jest.fn(),
    handleAddCourse: jest.fn(),
    handleAddScore: jest.fn()


};

export const state = {
    token: "token",
    user_id: 1,
    user_name: "name",
    courses: [{ name: "course" }],
    assessments: [{ name: "assessments" }],
    scores: [{ name: "scores" }]
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
            modules: {
                auth: {
                    namespaced: true,
                    getters: mockGetters,
                    mutations: mockMutations,
                    actions: mockActions,
                    state: mockState,
                },
                courses: {
                    namespaced: true,
                    getters: mockGetters,
                    mutations: mockMutations,
                    actions: mockActions,
                    state: mockState,
                }
            }

        }),
    };
}

export const store = __createMocks().store;