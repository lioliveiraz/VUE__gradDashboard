import BaseButton from '../../components/Style/BaseButton.vue';
import { shallowMount } from '@vue/test-utils';

describe('<BaseButton>', () => {
    let wrapper, handleClick, value;
    handleClick = jest.fn();
    value = 'value';
    beforeEach(async () => {

        wrapper = await shallowMount(BaseButton, {
            propsData: { handleClick, value }, mocks: {
                $t: (msg) => msg,

            }
        });
    });
    it('should render correctly', () => {

        expect(wrapper.find("g-base-btn-blue")).toBeTruthy();
        expect(wrapper).toMatchSnapshot();

    });
    it('should receive props correctly', () => {
        expect(wrapper.props()).toEqual({ handleClick, value });

    });
});