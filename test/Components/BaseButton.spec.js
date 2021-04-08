import BaseButton from '../../components/Style/BaseButton.vue';
import { shallowMount } from '@vue/test-utils';
import { validateTruthiness } from '../utils';

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

    it(' Should all elements render correctly', () => {
        const button = wrapper.get(".g-base-btn-blue");
        validateTruthiness(button);
        expect(wrapper).toMatchSnapshot();

    });
    it('should receive props correctly', () => {
        expect(wrapper.props()).toEqual({ handleClick, value });
    });
});