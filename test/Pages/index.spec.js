import Vuex from 'vuex';
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks as createStoreMocks, store } from '../../store/__mocks__';
import Index from '../../pages';
import VueMeta from 'vue-meta';


jest.mock('../../store/__mocks__');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('<Index/>', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallowMount(Index, {
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
        const idArr = ["login_form", "login_img", "login_button"];
        idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy());
        expect(wrapper).toMatchSnapshot();

    });
    it('data should initialize correctly', async () => {
        expect(Index.data().loginUserData).toBeTruthy();
        expect(Index.data().errors).toBeTruthy();



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
    it("testing metaInfo", () => {
        expect(wrapper.vm.$metaInfo.title).toBe('Welcome');

    });


});