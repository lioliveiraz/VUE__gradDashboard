import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import RegisterEmployee from '../../../pages/adm/RegisterEmployee.vue';
import VueMeta from 'vue-meta';
import RegisterEmployeeForm from '../../../components/Register/RegisterEmployeeForm.vue';
import { validateTruthiness, validateStringDataType, validateMatchingStringValues } from './../../utils/index';

jest.mock('../../../store');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('<RegisterEmployee/>', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallowMount(RegisterEmployee, {
            store: store,
            mocks: {
                $t: (msg) => msg
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
        const form = wrapper.findComponent(RegisterEmployeeForm);
        const elements = [".g-register", ".g-register--form"];
        elements.forEach((id) => validateTruthiness(wrapper.get(id)));
        expect(wrapper).toMatchSnapshot();
        validateTruthiness(form.exists());
    });

    it("should have title 'Register employee'", () => {
        const title = wrapper.vm.$metaInfo.title;
        const mockedValue = 'Register employee';
        validateStringDataType(title);
        validateMatchingStringValues(title, mockedValue);


    });
});