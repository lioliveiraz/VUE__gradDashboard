import DashboardHeader from '../../components/Style/DashboardHeader.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { __createMocks as createStoreMocks, store } from '../../store/__mocks__';
import { validateTruthiness } from './../utils/index';

jest.mock('../../store');

const localVue = createLocalVue();
localVue.use(Vuex);

describe('<DashboardHeader>', () => {
    let wrapper, links, username;
    links = [];
    username = 'username';
    beforeEach(async () => {
        wrapper = await shallowMount(DashboardHeader, {
            store: store,
            mocks: {
                $t: (msg) => msg,
            },
            localVue
        });
    });
    it('should all elements render correctly', () => {

        const elements = [".g-dashboard--top", "img"];
        elements.forEach(id => {
            validateTruthiness(wrapper.get(id));

        });
        expect(wrapper).toMatchSnapshot();

    });
});