import CoursesTable from '../../components/Courses/CoursesTable.vue';
import { shallowMount } from '@vue/test-utils';



describe('<Table>', () => {
    let courses, wrapper;
    const idsArr = [
        'course_table',
        'course_table-week',
        'course_table-code',
        'course_table-name',
        'course_table-assessment',
        'course_table-source',
        'course_table-duration',
        'course_table-link'];


    beforeEach(async () => {
        courses = [{
            week: 1,
            course_code: "988709",
            course_name: "name",
            assessment: false,
            source: "source",
            duration: 4,
            link: "link"
        }];
        wrapper = await shallowMount(CoursesTable, {
            propsData: { courses }, mocks: {
                $t: (msg) => msg
            }
        });
    });

    it('should render correctly', () => {

        idsArr.forEach(id => {
            expect(wrapper.find(id)).toBeTruthy();

        });
    });
    it('should receive props correctly', () => {
        expect(wrapper.props()).toEqual({ courses });
        expect(wrapper.text()).toContain("self-paced");
    });

    it('should renders according to props', () => {
        courses[0].assessment = true;
        wrapper = shallowMount(CoursesTable, {
            propsData: { courses }, mocks: {
                $t: (msg) => msg
            }
        });
        expect(wrapper.text()).toContain('ASSESSMENTS_VALUE');
    });



});

