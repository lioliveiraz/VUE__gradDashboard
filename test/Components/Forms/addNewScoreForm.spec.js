import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import AddNewScoreForm from '../../../components/Scores/AddNewScoreForm.vue';
import BaseInput from '../../../components/BaseInput.vue';
import { validateTruthiness } from './../../utils/index';

jest.mock('../../../store');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('<AddNewScoreForm/>', () => {
    let wrapper;
    beforeEach(async () => {
        wrapper = await shallowMount(AddNewScoreForm, {
            store: store,
            mocks: {
                $t: (msg) => msg,
                $toast: (msg) => msg +"message"
            },
            localVue
        });
    });
    it('should render correctly', () => {
        const elements = [".g-form-wrapper", ".g-form-wrapper--inner", '.g-selector', ".g-selector--options", ".g-base-btn-green"];
        elements.forEach((id) => validateTruthiness(wrapper.find(id)));
        expect(wrapper).toMatchSnapshot();

    });
    it('child components render correctly', () => {
        const baseInput = wrapper.findComponent(BaseInput);
        validateTruthiness(baseInput.exists());
    });

    it("should change the date once the method is called", async () => {
        await wrapper.vm.getUserInput("value", "name");
        let object = {
            name: "value"
        };
        expect(wrapper.vm.userInput).toEqual(expect.objectContaining(object));
    });
    it("check if the computed render the correct data", () => {
        expect(wrapper.vm.scoreInput).toBe("SCORE_INPUT");

    });
    it("input should bind with data", async () => {
        const userInput = wrapper.vm.userInput;

        const mockedData = {
            code: "111111",
            score: "10"
        };

        await wrapper.setData({
            userInput: mockedData
        });
        const form = wrapper.find('form');
        await form.trigger("submit");

        expect(userInput).toEqual(expect.objectContaining(mockedData));

    });
  it("$toast has to be called with message", async ()=>{

    expect(wrapper.vm.$toast("toast ")).toBe("toast message")
  })

});