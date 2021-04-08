import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../store/__mocks__';
import Index from '../../pages';
import VueMeta from 'vue-meta';
import { validateTruthiness } from './../utils/index';


jest.mock('../../store');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('<Index/>', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallowMount(Index, {
            store: store,
            mocks: {
                $t: (msg) => msg,
                $router: [],
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
        const elements = ["login_form", "login_img", "login_button"];
        elements.forEach((id) => validateTruthiness(wrapper.find(id)));
        expect(wrapper).toMatchSnapshot();

    });

    it('data should initialize correctly', () => {
        const loginUserData = Index.data().loginUserData;
        const errors = Index.data().errors;
        validateTruthiness(loginUserData);
        validateTruthiness(errors);
    });

    it('form should NOT  return error', async () => {
        const form = wrapper.find('form');
        await wrapper.setData({
            loginUserData: {
                empId: "123456",
                password: "123456"
            }
        });
        await form.trigger('submit');

        expect(wrapper.vm.errors).toStrictEqual({});
    });
    it("data is not correct should return error object", async () => {
        const form = wrapper.find("form");
        await wrapper.setData({
            loginUserData: {
                empId: "maria",
                password: "123456"
            }
        });
        let error = {
            empId: expect.any(String)
        };
        await form.trigger("submit");
        expect(wrapper.vm.errors).toEqual(expect.objectContaining(error));

    });
    it("testing metaInfo", () => {
        expect(wrapper.vm.$metaInfo.title).toBe('Welcome');

    });
    it("should change the date once the method is called", async () => {
        await wrapper.vm.getUserInput("111111", "empId");
        let object = {
            empId: "111111"
        };
        expect(wrapper.vm.loginUserData).toEqual(expect.objectContaining(object));

    });
    it("", () => {
        expect(wrapper.vm.button_input).toBe("BUTTON_LOGIN");

    });



});