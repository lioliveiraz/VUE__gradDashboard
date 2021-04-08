import _vue from '../../pages/_.vue';
import { validateTruthiness } from './../utils/index';
import { shallowMount } from '@vue/test-utils';


describe('<_vue/>', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallowMount(_vue, {
            mocks: {
                $router: []
            },

        });
    });
    afterEach(() => {
        if (wrapper) {
            wrapper.destroy();
        }
    });
    it('should render correctly', () => {
        validateTruthiness(wrapper.get(".g-login-box"));
        expect(wrapper).toMatchSnapshot();

    });

});