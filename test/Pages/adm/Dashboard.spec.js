import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks as createStoreMocks, store } from '../../../store/__mocks__';
import Dashboard from '../../../pages/adm/Dashboard.vue';
import VueMeta from 'vue-meta';
import BaseCard from '../../../components/BaseCard.vue';
import { validateTruthiness, validateArrayDataType, validateStringDataType, validateMatchingStringValues } from './../../utils/index';

jest.mock('../../../store');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('<ADM Dashboard/>', () => {
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
        const elements = [".g-dashboard", ".g-dashboard--top"];
        elements.forEach((id) => validateTruthiness(wrapper.get(id)));
        expect(wrapper).toMatchSnapshot();
    });

    it('data should initialize correctly', () => {
        const data = Dashboard.data().grads;
        validateTruthiness(data);
        expect(data).toEqual([]);
    });

    it("should have title 'Dashboard'", () => {
        const title = wrapper.vm.$metaInfo.title;
        const mockedValue = 'Dashboard';
        validateStringDataType(title);
        validateMatchingStringValues(title, mockedValue);
    });
});