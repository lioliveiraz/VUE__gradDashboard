import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import LearningPath from '../../../pages/graduate/LearningPath.vue';
import VueMeta from 'vue-meta';
import Courses from '../../../components/Courses/Courses.vue';
import { validateTruthiness, validateStringDataType, validateMatchingStringValues } from '../../utils/index';


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
        const div = wrapper.find("div");
        const courses = wrapper.findComponent(Courses);
        validateTruthiness(div);
        validateTruthiness(courses);
    });
    it("testing metaInfo", () => {
        const title = wrapper.vm.$metaInfo.title;
        validateStringDataType(title);
        validateMatchingStringValues(title, "Courses");

    });
    it('data should initialize correctly', () => {
        const isCourses = LearningPath.data().isCourse;
        validateTruthiness(isCourses);


    });

});