import BaseCard from '../../components/BaseCard.vue';
import { shallowMount, mount } from '@vue/test-utils';
import { createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.directive("t", () => { });



describe('<BaseCard/>', () => {
    let graduated, wrapper;
    beforeEach(async () => {
        graduated = {
            name: "name",
            empId: "123456"
        };
        wrapper = await shallowMount(BaseCard, { propsData: { graduated }, localVue });
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('graduate_name')).toBeTruthy();
        expect(wrapper.find('graduate_empID')).toBeTruthy();

    });
    it('should receive props correctly', () => {
        expect(wrapper.props()).toEqual({ graduated });
        expect(wrapper.text()).toContain("name");
    });

});