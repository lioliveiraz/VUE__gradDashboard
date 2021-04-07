import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import AddNewCourseForm from '../../../components/Courses/AddNewCourseForm.vue';
import BaseButton from '../../../components/Style/BaseButton.vue';
import BaseInput from '../../../components/BaseInput.vue';

jest.mock('../../../store/__mocks__');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('<AddNewCourseForm/>', () => {
    let wrapper;
    let toggleComponent = jest.fn();
    beforeEach(async () => {
        wrapper = await shallowMount(AddNewCourseForm, {
            propsData: { toggleComponent },
            store: store,
            localVue
        });
    });

    it('should render correctly', () => {
        const idArr = ["h3", "form", '.g-addNewcourse-buttons'];
        idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy());
        expect(wrapper).toMatchSnapshot();

    });
    it('child components render correctly', () => {
        const baseButton = wrapper.findComponent(BaseButton);
        const baseInput = wrapper.findComponent(BaseInput);
        const inputs = wrapper.findAllComponents(BaseInput);

        expect(baseButton.exists()).toBeTruthy();
        expect(baseInput.exists()).toBeTruthy();
        expect(inputs).toHaveLength(6);

    });
    it('should receive props correctly', () => {
        expect(wrapper.props()).toEqual({ toggleComponent });

    });
    it('data initialize correctly', () => {
        let courseDataMock = {
            assessment: expect.any(Boolean), link: expect.any(String)
        };
        expect(AddNewCourseForm.data().courseData).toEqual(expect.objectContaining(courseDataMock));
        expect(AddNewCourseForm.data().errors).toEqual({});
        expect(AddNewCourseForm.data().key).toEqual(0);

    });
    it("should return an object with errors", async () => {
        let courseMock = {

            week: 10,
            course_code: "!!!",
            course_name: "Wro3#gN04Me",
            assessment: false,
            source: "udemy",
            duration: 7,
            link: "https://giphy.com/gifs/makespace-cat-yoga-xUPGcyi4YxcZp8dWZq/tile"
        };
        const form = wrapper.find('form');

        await wrapper.setData({
            courseData: courseMock
        });

        await form.trigger("submit");
        let error = {
            course_code: expect.any(String),
            course_name: expect.any(String)
        };
        expect(wrapper.vm.errors).toEqual(error);
    });
    it("should not return an object with errors", async () => {
        let courseMock = {

            week: 10,
            course_code: "123456",
            course_name: "Right name",
            assessment: false,
            source: "udemy",
            duration: 7,
            link: "https://giphy.com/gifs/makespace-cat-yoga-xUPGcyi4YxcZp8dWZq/tile"
        };
        const form = wrapper.find('form');

        await wrapper.setData({
            courseData: courseMock
        });

        await form.trigger("submit");
        let error = {

        };
        expect(wrapper.vm.errors).toEqual(error);
    });


});