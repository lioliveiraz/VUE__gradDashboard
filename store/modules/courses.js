import { getCourses, getScores } from '../../api/requests/get';

const state = {
    courses: [],
    assessments: [],
    scores: []
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
                commit('SET_COURSES', courses);
                commit('SET_ASSESSMENTS', assessments);

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
                commit('SET_SCORES', res.scores);

            } catch (error) {
                console.log(error);
            }
        }
    },

    handleAddCourse({ commit }, course) {
        if (course['assessment'] === true) {
            commit('ADD_ASSESSMENT', course);

        } else {
            commit('ADD_COURSE', course);

        }

    },

    handleAddScore({ commit }, score) {
        commit('ADD_SCORE', score);

    }



};
const mutations = {
    SET_COURSES: (state, courses) => {
        state.courses = courses;
    },
    SET_ASSESSMENTS: (state, assessments) => {
        state.assessments = assessments;
    },
    SET_SCORES: (state, scores) => {
        state.scores = scores;
    },
    ADD_COURSE: (state, course) => {
        state.courses = [...state.courses, { ...course }];

    },
    ADD_ASSESSMENT: (state, course) => {
        state.assessments = [...state.assessments, { ...course }];

    },
    ADD_SCORE: (state, score) => {
        state.scores = [...state.scores, { ...score }];

    }


};



export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};