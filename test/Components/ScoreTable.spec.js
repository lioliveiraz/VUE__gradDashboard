import ScoresTable from '../../components/Scores/ScoresTable.vue';
import { shallowMount } from '@vue/test-utils';
import { validateTruthiness, validateObjectDataType, validateMatchingStringValues } from './../utils/index';

describe("<ScoresTable>", () => {
    let scores, wrapper;
    beforeEach(async () => {
        scores = [{
            code: "847843",
            score: "3"
        }];
        wrapper = await shallowMount(ScoresTable, {
            propsData: { scores }, mocks: {
                $t: (msg) => msg
            }
        });
    });

    it('should render correctly', () => {
        const elements = [".g-table-wrapper", ".g-table-cell"];
        elements.forEach(el => {
            validateTruthiness(wrapper.get(el));
        });
        expect(wrapper).toMatchSnapshot();
    });
    it('receive props correctly', () => {
        const props = wrapper.props();
        const text = wrapper.text();
        validateObjectDataType(props);
        expect(props).toEqual({ scores });
        validateMatchingStringValues(text, "847843");

    });
});