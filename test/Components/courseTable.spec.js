import CoursesTable from '../../components/Courses/CoursesTable.vue';
import { shallowMount } from '@vue/test-utils';
import { validateTruthiness, validateObjectDataType, validateMatchingStringValues, validateObjectToHaveProperty } from '../utils';


describe('<Table>', () => {
    let courses, wrapper;
    const elements = [
        '.g-table-wrapper',
        '.g-table-cell',
    ];


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

        elements.forEach(id => {
            validateTruthiness(wrapper.get(id));

        });
    });
    it('should receive props correctly', () => {
        const props = wrapper.props();
        const text = wrapper.text();
        validateObjectDataType(props);
        validateObjectDataType(props, 'course_name');
        validateMatchingStringValues(text, "self-paced");
    });

    it('should renders according to props', () => {
        courses[0].assessment = true;
        wrapper = shallowMount(CoursesTable, {
            propsData: { courses }, mocks: {
                $t: (msg) => msg
            }
        });
        validateMatchingStringValues(wrapper.text(), 'ASSESSMENTS_VALUE');

    });



});

