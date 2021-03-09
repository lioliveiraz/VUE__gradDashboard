import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import courses from './modules/courses';

Vue.use(Vuex);


const store = () => {
    return new Vuex.Store({
        modules: { auth, courses }
    });
};

export default store;