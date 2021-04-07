import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import id from '../../../pages/adm/GradScores/_id.vue';
import VueMeta from 'vue-meta';


jest.mock('../../../store/__mocks__');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('<id/>', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallowMount(id, {
            store: store,
            mocks: {
                $t: (msg) => msg,
                $route: { params: { id: 1 } }
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
        const idArr = [".employeeScore", ".employee-text"];
        idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy());
        expect(wrapper).toMatchSnapshot();

    });

    it("testing metaInfo", () => {
        expect(wrapper.vm.$metaInfo.title).toBe('Employee: 1');

    });
});