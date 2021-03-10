import { getCourses, getScores } from '../../api/requests';

const state = {
    coursesArr: [],
    assessmentsArr: [],
    scores: {}
};
const getters = {
    courses: state => state.coursesArr,
    assessmentsArr: state => state.assessmentsArr,
    scores: state => state.scores

};
const actions = {
    fetchCourses: async ({ commit }, token) => {
        if (token) {
            try {
                const res = await getCourses(token);
                const coursesArr = res.filter((course) => course.assessment === false);
                const assessmentsArr = res.filter(
                    (course) => course.assessment === true
                );
                commit('setCourses', coursesArr);
                commit('setAssessments', assessmentsArr);

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
        state.coursesArr = courses;
    },
    setAssessments: (state, assessments) => {
        state.assessmentsArr = assessments;
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