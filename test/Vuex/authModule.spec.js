import auth from '../../store/modules/auth';




describe("vuex store auth module", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    let state;

    const { token, user_id, user_isAdm, user_name } = auth.state;
    const { SET_TOKEN, SET_ID, SET_ADM, SET_NAME } = auth.mutations;
    const { isLoggedIn, getToken, isAdm, getName } = auth.getters;
    const { login, logout } = auth.actions;

    describe('test state', () => {
        it('should initial state be null', () => {
            expect(token).toBeFalsy();
            expect(user_id).toBeFalsy();
            expect(user_isAdm).toBeFalsy();
            expect(user_name).toBeFalsy();
        });
    });

    describe('test mutation', () => {
        it('update state with payload', async () => {
            state = {
                token: null,
                user_name: null,
                user_isAdm: null,
                user_id: null
            };
            await SET_TOKEN(state, "newValue");
            await SET_ID(state, "newValue");
            await SET_ADM(state, "newValue");
            await SET_NAME(state, "newValue");

            expect(state.token).toEqual("newValue");
            expect(state.user_name).toEqual("newValue");
            expect(state.user_isAdm).toEqual("newValue");
            expect(state.user_id).toEqual("newValue");

        });
    });

    describe("test getters", () => {

        it("should return false", async () => {
            await SET_TOKEN(state, null);
            await SET_ADM(state, null);
            const loggedIn = await isLoggedIn(state);
            const adm = await isAdm(state);

            expect(loggedIn).toBeFalsy();
            expect(adm).toBeFalsy();

        });
        it("should return true", async () => {
            await SET_TOKEN(state, 'token');
            await SET_ADM(state, "adm");

            const loggedIn = await isLoggedIn(state);
            const adm = await isAdm(state);

            expect(loggedIn).toBeTruthy();
            expect(adm).toBeTruthy();

        });
        it('should return the right value', async () => {
            await SET_TOKEN(state, "token");
            await SET_NAME(state, "Joao");

            const token = await getToken(state);
            const name = await getName(state);

            expect(token).toStrictEqual("token");
            expect(name).toStrictEqual("Joao");


        });

    });
    describe('testing actions', () => {
        const commit = jest.fn();

        describe('authentication', () => {
            let data = {
                access_token: "token",
                user: {

                    id: 1,
                    role: ["ADM"],
                    name: 'names'
                }
            };

            it('should call mutations 4 times', async () => {
                await login({ commit }, data);

                expect(commit).toHaveBeenCalledTimes(4);
            });


        });
        describe('logout', () => {
            const commit = jest.fn();

            it('should call mutations 4 times', async () => {
                await logout({ commit });
                expect(commit).toHaveBeenCalledTimes(4);
            });


        });

    });
});
