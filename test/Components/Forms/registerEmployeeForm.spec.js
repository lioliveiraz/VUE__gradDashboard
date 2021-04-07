import Vuex from 'vuex';
import RegisterEmployeeForm from '../../../components/Register/RegisterEmployeeForm.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import BaseInput from '../../../components/BaseInput.vue';


jest.mock('../../../store/__mocks__');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('<RegisterEmployeeForm/>', () => {
    let wrapper, mockedData, errors;
    mockedData = {

    };
    errors = {};
    beforeEach(async () => {
        wrapper = await shallowMount(RegisterEmployeeForm, {
            store: store,
            localVue
        });
    });
    it('should render correctly', () => {
        const idArr = [".g-form-wrapper", ".g-form-wrapper--inner", '.g-base-btn-submit'];
        idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy());
        expect(wrapper).toMatchSnapshot();

    });
    it('child components render correctly', () => {
        const baseInput = wrapper.findComponent(BaseInput);
        const inputs = wrapper.findAllComponents(BaseInput);

        expect(baseInput.exists()).toBeTruthy();
        expect(inputs).toHaveLength(3);

    });
    it('data initialize correctly', () => {

        expect(RegisterEmployeeForm.data().employeeObj).toEqual(mockedData);
        expect(RegisterEmployeeForm.data().errors).toEqual({});
        expect(RegisterEmployeeForm.data().key).toEqual(0);

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
        expect(wrapper.vm.errors).toEqual(errors);
    });

    it("should NOT return an object with errors", async () => {
        const form = wrapper.find('form');

        mockedData = {
            name: "name",
            empId: "123456"
        };

        await wrapper.setData({
            employeeObj: mockedData
        });

        await form.trigger("submit");
        errors = {
        };
        expect(wrapper.vm.errors).toEqual(errors);

    });

    it("should change the date once the method is called", async () => {
        await wrapper.vm.getUserInput("value", "name");
        let object = {
            name: "value"
        };
        expect(wrapper.vm.employeeObj).toEqual(expect.objectContaining(object));

    });


});