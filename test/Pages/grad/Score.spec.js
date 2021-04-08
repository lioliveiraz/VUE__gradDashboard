import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks as createStoreMocks, store } from '../../../store/__mocks__';
import Score from '../../../pages/graduate/Scores.vue';
import VueMeta from 'vue-meta';
import AddNewScore from '../../../components/Scores/AddNewScoreForm.vue';
import ScoresTable from '../../../components/Scores/ScoresTable.vue';
import { validateTruthiness, validateStringDataType, validateMatchingStringValues } from '../../utils';
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

        const elements = [".g-scores", ".g-scores--container", ".g-scores--form", "g-scores--table", "g-scores--table--inner"];
        elements.forEach((id) => validateTruthiness(wrapper.find(id)));
        validateTruthiness(scoreTable);
        validateTruthiness(addNewScore);

        expect(wrapper).toMatchSnapshot();


    });
    it("testing metaInfo", () => {
        const title = wrapper.vm.$metaInfo.title;
        validateMatchingStringValues(title, "Scores");
        validateStringDataType(title);
    });
});