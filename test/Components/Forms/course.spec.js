import Vuex from 'vuex';
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks as createStoreMocks, store } from '../../../store/__mocks__';
import AddNewCourseForm from '../../../components/Courses/AddNewCourseForm.vue';


jest.mock('../../../store/__mocks__');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('<AddNewCourseForm/>', () => {
    let wrapper;
    beforeEach(async () => {
        wrapper = await shallowMount(AddNewCourseForm, {
            store: store,
            localVue
        });
    });

    it('should render correctly', () => {
        const idArr = ["course_form", "course_form-title"];
        idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy());
        expect(wrapper).toMatchSnapshot();
    });

});