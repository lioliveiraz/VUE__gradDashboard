import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks as createStoreMocks, store } from '../../../store/__mocks__';
import Dashboard from '../../../pages/adm/Dashboard.vue';
import VueMeta from 'vue-meta';
import BaseCard from '../../../components/BaseCard.vue';

jest.mock('../../../store/__mocks__');

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
        const idArr = [".g-dashboard", ".g-dashboard--top", ".g-dashboard--top"];
        idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy());
        expect(wrapper).toMatchSnapshot();
    });
    it('data should initialize correctly', () => {
        expect(Dashboard.data().grads).toBeTruthy();
        expect(Dashboard.data().grads).toEqual([]);

    });
    it("testing metaInfo", () => {
        expect(wrapper.vm.$metaInfo.title).toBe('Dashboard');

    });
});