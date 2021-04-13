import TheNav from '../../components/Nav/TheNav.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import BaseButton from '../../components/Style/BaseButton.vue';
import { validateTruthiness, validateStringDataType, validateObjectDataType, validateObjectToHaveProperty } from './../utils/index';
import { __createMocks, store } from '../../store/__mocks__';
import Vuex from 'vuex';

jest.mock('../../store');

const localVue = createLocalVue();
localVue.use(Vuex);

describe('<TheNav>', () => {
    let wrapper, links, username;
    links = [];
    username = 'username';
    beforeEach(async () => {
        wrapper = await shallowMount(TheNav, {
            store: store,
            propsData: { links, username }, mocks: {
                $t: (msg) => msg,
                $i18n: { locales: ['pt', 'en'] },
                $router: []
            },
            localVue

        });
    });
    it('should all elements render correctly', () => {
        const baseButton = wrapper.findComponent(BaseButton);

        let elements = [
            ".g-nav-wrapper", ".g-language-toggle", ".g-nav--profile", ".g-list", '.g-nav--profile'
        ];
        elements.forEach(id => {
            validateTruthiness(wrapper.find(id));
        });
        validateTruthiness(baseButton.exists());
        expect(wrapper).toMatchSnapshot();
    });

    it('should receive props correctly', () => {
        const props = wrapper.props();
        validateObjectDataType(props);
        validateStringDataType(props.username);
        validateObjectToHaveProperty(props, "links");
        validateObjectToHaveProperty(props, "username");
        validateObjectToHaveProperty(props, "isMenu");

    });

  
    it("handleLogout should be called", async () => {
        await wrapper.vm.handleLogout();
        expect(wrapper.vm.$router).toEqual(["/"]);
    });
});