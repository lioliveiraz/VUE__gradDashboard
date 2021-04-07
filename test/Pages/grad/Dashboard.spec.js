import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks as createStoreMocks, store } from '../../../store/__mocks__';
import Dashboard from '../../../pages/graduate/Dashboard.vue';
import VueMeta from 'vue-meta';

jest.mock('../../../store');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('<ADMDashboard/>', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallowMount(Dashboard, {
            store: store,
            mocks: {
                $t: (msg) => msg,
                $toast: (msg) => msg
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
        const idArr = [".g-dashboard", ".g-dashboard--middle", ".g-dashboard--bottom"];
        idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy());
        expect(wrapper).toMatchSnapshot();
    });
    it('data should initialize correctly', () => {
        expect(Dashboard.data().circle).toEqual({
            text: 0,
        });
        expect(Dashboard.data().courses).toEqual([]);
        expect(Dashboard.data().cognizantTopics).toEqual([]);
        expect(Dashboard.data().techTopics).toEqual([]);

    });
    it("testing metaInfo", () => {
        expect(wrapper.vm.$metaInfo.title).toBe('Dashboard');

    });
    it("calculate hours should return the right value", async () => {
        await wrapper.vm.calculateCourseHours();
        expect(wrapper.vm.circle.text).toEqual(3);
    });
});