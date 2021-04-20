import BaseInput from '../../components/BaseInput.vue';
import { shallowMount } from '@vue/test-utils';
import { validateTruthiness, validateMatchingStringValues } from './../utils/index';


describe('<BaseInput>', () => {
    let wrapper, attributeObj;

    beforeEach(async () => {
        attributeObj = {
            type: "type",
            name: "name",
            placeholder: "placeholder",
            required: true
        };

        wrapper = shallowMount(BaseInput, {
            propsData: { attributeObj },
            mocks: {
                $t: (msg) => msg
            }

        });

    });

    it('should all elements render correctly', () => {
        const label = wrapper.find('label');
        const input = wrapper.find('input');
        const text = attributeObj.name.toUpperCase();
        validateTruthiness(label);
        validateTruthiness(input);
        expect(wrapper).toMatchSnapshot();
        validateMatchingStringValues(label.text(), text);
    });

    it('value should initialize as an empty string', () => {
        const currentValue = BaseInput.data().currentValue;
        validateMatchingStringValues(currentValue, "");
    });

    it('data should bind to input', async () => {
        const input = wrapper.find('input');
        await wrapper.setData({
            currentValue: "value"
        });
        validateMatchingStringValues(input.element.value, "value");
    });
    it('input should bind to data', async () => {
        const input = wrapper.find('input');
        input.element.value = 'value';
        await input.trigger('input');
        validateMatchingStringValues(wrapper.vm.currentValue, "value");
    });
    it("errorMessage should return the right value", async ()=>{
        await wrapper.setData({
            userError: {name:"value"}
        });
         await wrapper.vm.getErrorMessage() 

        expect(wrapper.vm.errorMessage).toBe("value")

    })
  
});