import Vuex from 'vuex';
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { _createMocks as createStoreMocks } from '../../store';
import Index from '../../pages';


jest.mock('../../store');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('<Index/>', () => {
    let storeMocks, wrapper;

    beforeEach(async () => {
        storeMocks = createStoreMocks();
        wrapper = await shallowMount(Index, {
            store: storeMocks.store,
            localVue
        });
    });

    it('should render correctly', () => {
        /*  const idArr = ["login_form", "login_img", "login_button"];
         idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy()); */

        expect(wrapper).toEqual();
    });
});