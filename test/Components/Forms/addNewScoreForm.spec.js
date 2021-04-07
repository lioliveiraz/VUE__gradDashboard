import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import AddNewScoreForm from '../../../components/Scores/AddNewScoreForm.vue';
import BaseInput from '../../../components/BaseInput.vue';

jest.mock('../../../store');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('<AddNewScoreForm/>', () => {
    let wrapper;
    beforeEach(async () => {
        wrapper = await shallowMount(AddNewScoreForm, {
            store: store,
            localVue
        });
    });
    it('should render correctly', () => {
        const idArr = [".g-form-wrapper", ".g-form-wrapper--inner", '.g-selector', ".g-selector--options", ".g-base-btn-submit"];
        idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy());
        expect(wrapper).toMatchSnapshot();

    });
    it('child components render correctly', () => {
        const baseInput = wrapper.findComponent(BaseInput);

        expect(baseInput.exists()).toBeTruthy();


    });
    it("should change the date once the method is called", async () => {
        await wrapper.vm.getUserInput("value", "name");
        let object = {
            name: "value"
        };
        expect(wrapper.vm.userInput).toEqual(expect.objectContaining(object));

    });

});