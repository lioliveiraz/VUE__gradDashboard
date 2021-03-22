import courseModule from '../../store/modules/courses';
import axios from 'axios';
jest.mock("axios");







describe('vuex store course module', () => {

    let state = {
        courses: null,
        assessments: null,
        scores: null,
    };

    const { courses, assessments, scores } = courseModule.state;
    const { getCourses, getAssessments, getScores } = courseModule.getters;
    const { fetchCourses, fetchScores } = courseModule.actions;
    const { SET_COURSES, SET_ASSESSMENTS, SET_SCORES } = courseModule.mutations;

    describe('test state', () => {
        it('should initial state be empty', () => {
            expect(courses).toEqual([]);
            expect(assessments).toEqual([]);
            expect(scores).toEqual([]);
        });
    });
    describe('test mutation', () => {
        it('update state with payload', async () => {

            await SET_COURSES(state, [{ key: 'value' }]);
            await SET_ASSESSMENTS(state, [{ key: 'value' }]);
            await SET_SCORES(state, [{ key: 'value' }]);

            expect(state.scores).toEqual(expect.arrayContaining([{ key: 'value' }]));
            expect(state.courses).toEqual(expect.arrayContaining([{ key: 'value' }]));
            expect(state.assessments).toEqual(expect.arrayContaining([{ key: 'value' }]));

        });
    });
    describe("test getters", () => {

        it('should return the correct value', async () => {

            const courses = await getCourses(state);
            const assessment = await getAssessments(state);
            const scores = await getScores(state);

            expect(courses).toStrictEqual([{ key: 'value' }]);
            expect(assessment).toStrictEqual([{ key: 'value' }]);
            expect(scores).toStrictEqual([{ key: 'value' }]);


        });

    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});