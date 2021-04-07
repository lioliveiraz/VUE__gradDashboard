import DashboardHeader from '../../components/Style/DashboardHeader.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { __createMocks as createStoreMocks, store } from '../../store/__mocks__';

jest.mock('../../store/__mocks__');

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
    it('should render correctly', () => {

        let idsArr = [
            ".g-dashboard--top", "img"];
        idsArr.forEach(id => {
            expect(wrapper.find(id)).toBeTruthy();

        });
        expect(wrapper).toMatchSnapshot();

    });
});