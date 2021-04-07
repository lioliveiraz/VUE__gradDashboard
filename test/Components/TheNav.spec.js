import TheNav from '../../components/Nav/TheNav.vue';
import { shallowMount } from '@vue/test-utils';
import BaseButton from '../../components/Style/BaseButton.vue';

describe('<TheNav>', () => {
    let wrapper, links, username;
    links = [];
    username = 'username';
    beforeEach(async () => {

        wrapper = await shallowMount(TheNav, {
            propsData: { links, username }, mocks: {
                $t: (msg) => msg,
                $i18n: { locales: ['pt', 'en'] }
            }
        });
    });
    it('should render correctly', () => {
        const baseButton = wrapper.findComponent(BaseButton);

        let idsArr = [
            ".g-nav-wrapper", ".g-language-toggle", ".g-nav--profile", ".g-list", '.g-nav--profile'
        ];
        idsArr.forEach(id => {
            expect(wrapper.find(id)).toBeTruthy();

        });
        expect(baseButton.exists()).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });
    it('should receive props correctly', () => {
        expect(wrapper.props()).toEqual({ links, username });

    });
    it('data initialize correctly', () => {

        expect(TheNav.data().isMenu).toEqual(expect.any(Boolean));


    });
});