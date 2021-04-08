import Courses from '../../components/Courses/Courses.vue';
import { shallowMount } from '@vue/test-utils';
import BaseButton from '../../components/Style/BaseButton.vue';
import CoursesTable from '../../components/Courses/CoursesTable.vue';
import { validateTruthiness, validateLength } from '../utils/index';

describe('<Courses>', () => {
    let wrapper, coursesArr, assessmentsArr;
    coursesArr = [];
    assessmentsArr = [];

    beforeEach(async () => {
        wrapper = await shallowMount(Courses, {
            propsData: { coursesArr, assessmentsArr }, mocks: {
                $t: (msg) => msg
            }
        });
    });
    it('should render correctly', () => {
        const courseTable = wrapper.findComponent(CoursesTable);
        const tables = wrapper.findAllComponents(CoursesTable);
        const baseButton = wrapper.findComponent(BaseButton);

        const elements = [".g-courses-wrapper", ".g-tables-inner"];
        elements.forEach(id => {
            validateTruthiness(wrapper.get(id));
        });

        validateTruthiness(courseTable.exists());
        validateTruthiness(baseButton.exists());
        validateTruthiness(courseTable.exists());
        validateLength(tables, 1);
        expect(wrapper).toMatchSnapshot();

    });
    it('function should be called', async () => {
        await wrapper.vm.toggleCourses();
        expect(wrapper.vm.isCourse).toBeFalsy();
    });
});
