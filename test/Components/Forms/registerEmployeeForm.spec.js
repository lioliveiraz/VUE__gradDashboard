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
        const elements = [".g-form-wrapper", ".g-form-wrapper--inner", '.g-base-btn-green'];
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
        const key = RegisterEmployeeForm.data().key;
        validateObjectDataType(employeeOvj);
        expect(key).toEqual(0);
    });



    it("should change the date once the method is called", async () => {
        await wrapper.vm.getUserInput("value", "name");
        let object = {
            name: "value"
        };
        expect(wrapper.vm.employeeObj).toEqual(expect.objectContaining(object));

    });
    it("getUserInput should change the data for true", async () => {
        let employeeDataMock = {
            empId: '123456',
            password: '123456',
        };

        await wrapper.setData({
            isFormValid: false,
            employeeObj: employeeDataMock
        });

        await wrapper.vm.getUserInput('name', "name");

        const data = wrapper.vm.isFormValid;
        expect(data).toBeTruthy();

    });
    it("form should return null",async ()=>{
        const form = wrapper.find('form')
        
        await wrapper.setData({
            isFormValid: false,
        });
        await form.trigger('submit')

       const e = {preventDefault:jest.fn()}
        const submit = await wrapper.vm.handleSubmit(e)

        expect(submit).toBeNull()

    })

});