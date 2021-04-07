import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import UpdatePath from '../../../pages/adm/UpdatePath.vue';
import VueMeta from 'vue-meta';

jest.mock('../../../store/__mocks__');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('<Index/>', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallowMount(UpdatePath, {
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
        const idArr = [".g-update-path", ".g-update-path-toggleButton", ".g-update-path--overlay", ".g-update-path--form"];
        idArr.forEach((id) => expect(wrapper.find(id)).toBeTruthy());
        expect(wrapper).toMatchSnapshot();
    });
    it('data should initialize correctly', () => {
        expect(UpdatePath.data().isFormOpen).toEqual(false);

    });
    it('function should be called', async () => {
        await wrapper.vm.toggleComponent();
        expect(wrapper.vm.isFormOpen).toBe(true);
    });


});