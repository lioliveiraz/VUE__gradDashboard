import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks as createStoreMocks, store } from '../../../store/__mocks__';
import Dashboard from '../../../pages/graduate/Dashboard.vue';
import VueMeta from 'vue-meta';
import { validateTruthiness, validateObjectDataType, validateObjectToHaveProperty } from '../../utils';

jest.mock('../../../store');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('<Dashboard/>', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallowMount(Dashboard, {
            store: store,
            mocks: {
                $t: (msg) => msg,
                $toast: (msg) => msg,
                $i18n: { locales: 'pt' },
            },
            localVue
        });
    });
    afterEach(() => {
        if (wrapper) {
            wrapper.destroy();
        }
    });
    it('should render correctly', () => {
        const idArr = [".g-dashboard", ".g-dashboard--middle"];
        idArr.forEach((id) => validateTruthiness(wrapper.get(id)));
        expect(wrapper).toMatchSnapshot();
    });
    it('data should initialize correctly', () => {
        const courses = wrapper.vm.courses;
        const cognizantTopics = wrapper.vm.cognizantTopics;
        const techTopics = wrapper.vm.techTopics;
        const receivedArrays = [courses, cognizantTopics, techTopics];

        receivedArrays.forEach(el => expect(el).toEqual([]));


    });
    it("testing metaInfo", () => {
        expect(wrapper.vm.$metaInfo.title).toBe('Dashboard');

    });
    it("calculate hours should return the right value", async () => {
        expect(wrapper.vm.calculateCourseHours).toEqual(3);
    });
});