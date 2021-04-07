import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import RegisterEmployee from '../../../pages/adm/RegisterEmployee.vue';
import VueMeta from 'vue-meta';
import RegisterEmployeeForm from '../../../components/Register/RegisterEmployeeForm.vue';

jest.mock('../../../store/__mocks__');

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

        const idArr = [".g-register", ".g-register--form", "login_button"];
        idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy());
        expect(wrapper).toMatchSnapshot();
        expect(form.exists()).toBeTruthy();


    });
    it("testing metaInfo", () => {
        expect(wrapper.vm.$metaInfo.title).toBe('Register employee');

    });
});