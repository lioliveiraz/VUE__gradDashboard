import { getCourses, getScores } from '../../api/requests/get';

const state = {
    courses: [],
    assessments: [],
    scores: {}
};
const getters = {
    getCourses: state => state.courses,
    getAssessments: state => state.assessments,
    getScores: state => state.scores

};
const actions = {
    fetchCourses: async ({ commit }, token) => {
        if (token) {
            try {
                const res = await getCourses(token);
                const courses = res.filter((course) => course.assessment === false);
                const assessments = res.filter(
                    (course) => course.assessment === true
                );
                commit('setCourses', courses);
                commit('setAssessments', assessments);

            } catch (error) {
                console.log(error);
            }
        }
    },
    fetchScores: async ({ commit }, data) => {
        const { id, token } = data;
        if (token) {
            try {
                const res = await getScores(id, token);
                commit('setScores', res.scores);

            } catch (error) {
                console.log(error);
            }
        }
    },




};
const mutations = {
    setCourses: (state, courses) => {
        state.courses = courses;
    },
    setAssessments: (state, assessments) => {
        state.assessments = assessments;
    },
    setScores: (state, scores) => {
        state.scores = scores;
    }
};



export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};