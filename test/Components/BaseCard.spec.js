import BaseCard from '../../components/BaseCard.vue';
import { shallowMount, } from '@vue/test-utils';
import { validateTruthiness, validateMatchingStringValues, validateObjectDataType } from '../utils';

describe('<BaseCard/>', () => {
    let graduated, wrapper, elements;
    beforeEach(async () => {
        graduated = {
            name: "name",
            empId: "123456"
        };
        wrapper = await shallowMount(BaseCard, {
            propsData: { graduated },
            mocks: {
                $t: (msg) => msg
            }
        });
    });

    it('should all elements render correctly', () => {
        elements = ['.g-adm-dashboard-card--title', '.g-adm-dashboard-card--subtitle'];
        expect(wrapper).toMatchSnapshot();
        elements.forEach(el =>
            validateTruthiness(wrapper.get(el)));

    });
    it('should receive props correctly', () => {
        const props = wrapper.props();
        const text = wrapper.text();
        validateObjectDataType(props);
        validateMatchingStringValues(text, "name");
    });

});