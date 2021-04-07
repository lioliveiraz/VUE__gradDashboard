import Courses from '../../components/Courses/Courses.vue';
import { shallowMount } from '@vue/test-utils';
import BaseButton from '../../components/Style/BaseButton.vue';
import CoursesTable from '../../components/Courses/CoursesTable.vue';

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
        const button = wrapper.find("button");

        const baseButton = wrapper.findComponent(BaseButton);

        let idsArr = [
            ".g-courses-wrapper", ".g-tables-inner"];
        idsArr.forEach(id => {
            expect(wrapper.find(id)).toBeTruthy();

        });


        expect(baseButton.exists()).toBeTruthy();
        expect(courseTable.exists()).toBeTruthy();
        expect(tables).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();

    });
    it('function should be called', async () => {
        await wrapper.vm.toggleCourses();
        expect(wrapper.vm.isCourse).toBe(false);
    });
});
