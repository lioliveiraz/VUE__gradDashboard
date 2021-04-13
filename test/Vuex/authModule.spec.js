import auth from '../../store/modules/auth';




describe("vuex store auth module", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    let state;

    const { token, user_id, user_name } = auth.state;
    const { SET_TOKEN, SET_ID, SET_NAME } = auth.mutations;
    const { isLoggedIn, getToken, getName } = auth.getters;
    const { login, logout } = auth.actions;

    describe('test state', () => {
        it('should initial state be null', () => {
            expect(token).toBeNull();
            expect(user_id).toBeNull();
            expect(user_name).toBeNull();

        });
    });

    describe('test mutation', () => {
        it('update state with payload', async () => {
            state = {
                token: null,
                user_name: null,
                user_id: null
            };
            await SET_TOKEN(state, "newValue");
            await SET_ID(state, "newValue");
            await SET_NAME(state, "newValue");

            expect(state.token).toEqual("newValue");
            expect(state.user_name).toEqual("newValue");
            expect(state.user_id).toEqual("newValue");

        });
    });

    describe("test getters", () => {

        it("should return false", async () => {
            await SET_TOKEN(state, null);
            const loggedIn = await isLoggedIn(state);

            expect(loggedIn).toBeFalsy();

        });
        it("should return true", async () => {
            await SET_TOKEN(state, 'token');

            const loggedIn = await isLoggedIn(state);

            expect(loggedIn).toBeTruthy();

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
                    name: 'names'
                }
            };

            it('should call mutations 4 times', async () => {
                await login({ commit }, data);

                expect(commit).toHaveBeenCalledTimes(3);
            });


        });
        describe('logout', () => {
            const commit = jest.fn();

            it('should call mutations 4 times', async () => {
                await logout({ commit });
                expect(commit).toHaveBeenCalledTimes(3);
            });


        });

    });
});
