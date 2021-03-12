import ScoreTable from '../../components/Scores/ScoresTable.vue';
import { shallowMount } from '@vue/test-utils';

describe("<ScoreTable>", () => {
    let scores, wrapper;
    beforeEach(async () => {
        scores = [{
            code: "847843",
            score: "3"
        }];
        wrapper = await shallowMount(ScoreTable, { propsData: { scores } });
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('score_table')).toBeTruthy();
        expect(wrapper.find('score_table--code')).toBeTruthy();
        expect(wrapper.find('score_table--score')).toBeTruthy();

    });
    it('receive props correctly', () => {

        expect(wrapper.props()).toEqual({ scores });
        expect(wrapper.text()).toContain("847843");
    });
});