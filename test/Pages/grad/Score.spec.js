import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks as createStoreMocks, store } from '../../../store/__mocks__';
import Score from '../../../pages/graduate/Scores.vue';
import VueMeta from 'vue-meta';
import AddNewScore from '../../../components/Scores/AddNewScoreForm.vue';
import ScoresTable from '../../../components/Scores/ScoresTable.vue';

jest.mock('../../../store');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('<Index/>', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallowMount(Score, {
            store: store,
            mocks: {
                $t: (msg) => msg
            },
            localVue
        });
    });
    afterEach(() => {
        if (wrapper) {
            wrapper.destroy();
        }
    });
    it('should render correctly', () => {
        const addNewScore = wrapper.findComponent(AddNewScore);
        const scoreTable = wrapper.findComponent(ScoresTable);

        const idArr = [".g-scores", ".g-scores--container", ".g-scores--form", "g-scores--table", "g-scores--table--inner"];
        idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy());
        expect(wrapper).toMatchSnapshot();
        expect(scoreTable).toBeTruthy();
        expect(addNewScore).toBeTruthy();

    });
    it("testing metaInfo", () => {
        expect(wrapper.vm.$metaInfo.title).toBe('Scores');

    });
});