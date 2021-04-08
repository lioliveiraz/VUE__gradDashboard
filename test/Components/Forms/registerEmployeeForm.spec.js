import Vuex from 'vuex';
import RegisterEmployeeForm from '../../../components/Register/RegisterEmployeeForm.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import BaseInput from '../../../components/BaseInput.vue';
import { validateTruthiness, validateLength, validateObjectDataType, validateObjectToHaveProperty } from './../../utils/index';


jest.mock('../../../store');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('<RegisterEmployeeForm/>', () => {
    let wrapper, mockedData, errors;
    mockedData = {};
    errors = {};
    beforeEach(async () => {
        wrapper = await shallowMount(RegisterEmployeeForm, {
            store: store,
            localVue
        });
    });
    it('should render correctly', () => {
        const elements = [".g-form-wrapper", ".g-form-wrapper--inner", '.g-base-btn-submit'];
        elements.forEach((id) => validateTruthiness(wrapper.find(id)));
        expect(wrapper).toMatchSnapshot();

    });
    it('child components render correctly', () => {
        const baseInput = wrapper.findComponent(BaseInput);
        const inputs = wrapper.findAllComponents(BaseInput);
        validateTruthiness(baseInput.exists());
        validateLength(inputs, 3);
    });
    it('data initialize correctly', () => {
        const employeeOvj = RegisterEmployeeForm.data().employeeObj;
        const errors = RegisterEmployeeForm.data().errors;
        const key = RegisterEmployeeForm.data().key;
        validateObjectDataType(employeeOvj);
        validateObjectDataType(errors);
        expect(key).toEqual(0);
    });

    it("should return an object with errors", async () => {
        const form = wrapper.find('form');
        mockedData = {
            name: "!",
            empId: "!"
        };

        await wrapper.setData({
            employeeObj: mockedData
        });

        await form.trigger("submit");
        errors = {
            name: expect.any(String),
            empId: expect.any(String)
        };
        const wrapperErrors = wrapper.vm.errors;
        validateObjectDataType(wrapperErrors);
        validateObjectToHaveProperty(wrapperErrors, "name");
        validateObjectToHaveProperty(wrapperErrors, "empId");

    });

    it("should NOT return an object with errors", async () => {
        const form = wrapper.find('form');
        const wrapperErrors = wrapper.vm.errors;

        mockedData = {
            name: "name",
            empId: "123456"
        };

        await wrapper.setData({
            employeeObj: mockedData
        });

        await form.trigger("submit");
        errors = {};
        expect(wrapperErrors).toEqual(errors);
        validateObjectDataType(wrapperErrors);
    });

    it("should change the date once the method is called", async () => {
        await wrapper.vm.getUserInput("value", "name");
        let object = {
            name: "value"
        };
        expect(wrapper.vm.employeeObj).toEqual(expect.objectContaining(object));

    });


});