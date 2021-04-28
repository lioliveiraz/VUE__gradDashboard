import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import {
  __createMocks as createStoreMocks,
  store
} from "../../../store/__mocks__";
import Dashboard from "../../../pages/graduate/Dashboard.vue";
import VueMeta from "vue-meta";
import { validateTruthiness } from "../../utils";
import flushPromises from "flush-promises";
import { getNewsFromApi } from "../../../api/newsApi/request";

jest.mock("../../../store");
jest.mock("../../../api/newsApi/request");

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: "head" });
localVue.use(Vuex);

describe("<Dashboard/>", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = await shallowMount(Dashboard, {
      store: store,
      mocks: {
        $t: msg => msg,
        $toast: msg => msg,
        $i18n: { locales: "pt" }
      },
      localVue
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    const idArr = [".g-dashboard", ".g-dashboard--middle"];
    idArr.forEach(id => validateTruthiness(wrapper.get(id)));
    expect(wrapper).toMatchSnapshot();
  });
  it("data should initialize correctly", () => {
    const courses = wrapper.vm.courses;
    const cognizantTopics = wrapper.vm.cognizantTopics;
    const techTopics = wrapper.vm.techTopics;
    const receivedArrays = [courses, cognizantTopics, techTopics];

    receivedArrays.forEach(el => expect(el).toEqual([]));
  });
  it("testing metaInfo", () => {
    expect(wrapper.vm.$metaInfo.title).toBe("Dashboard");
  });
  it("computed should return the right value", async () => {
    expect(wrapper.vm.calculateCourseHours).toEqual(3);
  });

  it("should call api once the component mounts", async () => {
    getNewsFromApi.mockResolvedValue({ articles: ["Success"] });

    await flushPromises();
    expect(getNewsFromApi).toHaveBeenCalledTimes(2);
  });
});
