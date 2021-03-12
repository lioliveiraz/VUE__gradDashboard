import Input from '../../components/Input.vue';
import { shallowMount } from '@vue/test-utils';


describe('<Input>', () => {
    let wrapper, attributeObj;

    beforeEach(async () => {
        attributeObj = {
            type: "type",
            name: "name",
            placeholder: "placeholder",
            required: true
        };

        wrapper = shallowMount(Input, { propsData: { attributeObj } });

    });

    it('should render correctly', () => {
        let label = wrapper.find('label');
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input')).toBeTruthy();
        expect(wrapper.find('label')).toBeTruthy();
        expect(label.text()).toBe(attributeObj.name.toUpperCase());

    });

    it('value should initialize as an empty string', () => {
        expect(Input.data().currentValue).toEqual("");
    });
    it('data should bind to input', async () => {
        const input = wrapper.find('input');

        await wrapper.setData({
            currentValue: "value"
        });
        expect(input.element.value).toEqual("value");
    });
    it('input should bind to data', async () => {
        const input = wrapper.find('input');

        input.element.value = 'value';
        await input.trigger('input');
        expect(wrapper.vm.currentValue).toEqual("value");
    });
});