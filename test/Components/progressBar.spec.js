import ProgressBar from '../../components/ProgressBar.vue';
import { shallowMount } from '@vue/test-utils';

describe("<ProgressBar/>", () => {
    let circle, wrapper;
    beforeEach(async () => {
        circle = {
            size: '100',
            strokeWidth: '6',
            text: 0,
            strokeColor: "#38b2ac"
        };
        wrapper = await shallowMount(ProgressBar, { propsData: { circle } });

    });

    it('should render correctly', () => {
        expect(wrapper.find('svg')).toBeTruthy();
        expect(wrapper.find('svg--text')).toBeTruthy();
    });
    it('should receive props correctly', () => {
        expect(wrapper.props()).toEqual({ circle });
        expect(wrapper.text()).toContain('0h');
    });

});