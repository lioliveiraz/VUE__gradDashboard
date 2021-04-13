import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks, store } from '../../../store/__mocks__';
import UpdatePath from '../../../pages/adm/UpdatePath.vue';
import VueMeta from 'vue-meta';
import { validateTruthiness, validateBooleanValues } from './../../utils/index';

jest.mock('../../../store');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('<UpdatePath/>', () => {
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

        expect(wrapper).toMatchSnapshot();
    });
    it('data should initialize correctly', () => {
        const isFormOpen = UpdatePath.data().isFormOpen;
        validateBooleanValues(isFormOpen, false);

    });
    it('function should be called', async () => {

        await wrapper.vm.toggleComponent();
        const isFormOpen = wrapper.vm.isFormOpen;

        validateBooleanValues(isFormOpen, true);
    });


});