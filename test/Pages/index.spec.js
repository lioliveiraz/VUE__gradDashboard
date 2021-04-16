import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../store/__mocks__';
import Index from '../../pages';
import VueMeta from 'vue-meta';
import { validateTruthiness } from './../utils/index';
import axios from 'axios';
import { handleLogin } from './../../api/requests/post';

jest.mock('../../store');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

jest.mock('axios', () => ({

    defaults: {
        baseUrl: "http://localhost:4020/",
    },

    interceptors: {
        request: {
            use: jest.fn(),
        },
        response: {
            use: jest.fn()
        }
    },
    post: jest.fn(() => Promise.resolve({})),
    post: jest.fn(() => Promise.rejects({}))

}));
describe('<Index/>', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallowMount(Index, {
            store: store,
            mocks: {
                $t: (msg) => msg,
                $router: [],
                get: jest.fn(() => Promise.resolve({}))
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
        const isFormValid = Index.data().isFormValid;
        validateTruthiness(loginUserData);
        expect(isFormValid).toBeFalsy();

    });

    it('button should be disabled', async () => {
        await wrapper.setData({
            isFormValid: false
        });
        expect(wrapper.get('.g-disabled')).toBeTruthy();
    });

    it('button should NOT be disabled', async () => {
        await wrapper.setData({
            isFormValid: true
        });
        expect(wrapper.get('.g-base-btn-green')).toBeTruthy();


    });
    it("should return title 'Welcome'", () => {
        expect(wrapper.vm.$metaInfo.title).toBe('Welcome');

    });
    it("should change the date once the method is called", async () => {
        await wrapper.vm.getUserInput("111111", "empId");
        let object = {
            empId: "111111"
        };
        expect(wrapper.vm.loginUserData).toEqual(expect.objectContaining(object));

    });
    it("computed should return the right data", () => {
        expect(wrapper.vm.button_input).toBe("BUTTON_LOGIN");

    });
    it("getUserInput should change the data for true", async () => {
        let object = {
            password: '123456'
        };

        await wrapper.setData({
            isFormValid: false,
            loginUserData: object
        });

        await wrapper.vm.getUserInput('empId', "111111");

        const data = wrapper.vm.isFormValid;
        expect(data).toBeTruthy();

    });
    it("getUserInput should change the data for false", async () => {

        await wrapper.vm.getUserInput('empId', "111111");

        const data = wrapper.vm.isFormValid;
        expect(data).toBeFalsy();

    });

    it("form should return null",async ()=>{
        const form = wrapper.find('form')
        
        await wrapper.setData({
            isFormValid: false,
        });
        await form.trigger('submit')

       const e = {preventDefault:jest.fn()}
        const submit = await wrapper.vm.handleSubmit(e)

        expect(submit).toBeNull()

    })


});