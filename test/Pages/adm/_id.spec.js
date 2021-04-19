import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import id from '../../../pages/adm/GradScores/_id.vue';
import VueMeta from 'vue-meta';
import { validateTruthiness, validateMatchingStringValues } from './../../utils/index';
import axios from 'axios';


jest.mock('../../../store');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('<id/>', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallowMount(id, {
            store: store,
            mocks: {
                $t: (msg) => msg,
                $route: { params: { id: 1 } },
                $toast: "",
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
        const elements = [".g-employee-score--content", ".g-employee-text",".g-employee-score"];
        elements.forEach((id) => validateTruthiness(wrapper.get(id)));
        expect(wrapper).toMatchSnapshot();

    });

    it("should have title 'Employee' + number ", () => {
        const title = wrapper.vm.$metaInfo.title;
        const mockedValue = 'Employee: 1';
        validateMatchingStringValues(title, mockedValue);

    });

   

});