import Vuex from 'vuex';
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks as createStoreMocks, store } from '../../store/__mocks__';
import Index from '../../pages';


jest.mock('../../store/__mocks__');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('<Index/>', () => {
    let wrapper;
    beforeEach(async () => {
        wrapper = await shallowMount(Index, {
            store: store,
            localVue
        });
    });

    it('should render correctly', () => {
        const idArr = ["login_form", "login_img", "login_button"];
        idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy());

    });
});