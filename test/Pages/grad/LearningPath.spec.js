import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import LearningPath from '../../../pages/graduate/LearningPath.vue';
import VueMeta from 'vue-meta';
import Courses from '../../../components/Courses/Courses.vue';

jest.mock('../../../store');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('<Index/>', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallowMount(LearningPath, {
            store: store,

            localVue
        });
    });
    afterEach(() => {
        if (wrapper) {
            wrapper.destroy();
        }
    });
    it('should render correctly', () => {
        const courses = wrapper.findComponent(Courses);

        expect(wrapper.find("div")).toBeTruthy();
        expect(courses).toBeTruthy();

    });
    it("testing metaInfo", () => {
        expect(wrapper.vm.$metaInfo.title).toBe('Courses');

    });
    it('data should initialize correctly', () => {
        expect(LearningPath.data().isCourse).toBeTruthy();


    });

});