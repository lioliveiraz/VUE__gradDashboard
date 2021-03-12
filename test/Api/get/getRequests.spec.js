import { getCourses, getScores, getUsers } from '../../../api/requests/get';
import axios from 'axios';

jest.mock('axios', () => ({

    defaults: {
        baseUrl: "http://localhost:4020/",
    },

    interceptors: {
        request: {
            use: jest.fn(),
        },
        response: {
            use: jest.fn()
        }
    },
    get: jest.fn(() => Promise.resolve({})),
    get: jest.fn(() => Promise.rejects({}))

}));

describe('test axios get requests', () => {
    let response = {
        data: {
            courses: [
                { id: 1 }
            ]

        }
    };
    let token = 'token';
    let error = {
        message: "this is an error"
    };

    describe('getCourses', () => {

        it('should fetch data', async () => {
            axios.get.mockResolvedValue(response);

            await expect(getCourses(token)).resolves.toEqual(response.data);
            expect(axios.get).toHaveBeenCalledTimes(1);

        });


        it('should fail with a response', async () => {
            axios.get.mockImplementation(() => Promise.reject(new Error(error.message)));

            await expect(getCourses(token)).rejects.toThrow(error.message);

        });

    });
    describe('getScore', () => {
        it('should fetch data', async () => {
            axios.get.mockResolvedValue(response);

            await expect(getScores(token, 1)).resolves.toEqual(response.data);
            expect(axios.get).toHaveBeenCalledTimes(1);

        });


        it('should fail with a response', async () => {
            axios.get.mockImplementation(() => Promise.reject(new Error(error.message)));

            await expect(getScores(token, 1)).rejects.toThrow(error.message);

        });
    });
    describe('getUsers', () => {
        it('should fetch data', async () => {
            axios.get.mockResolvedValue(response);

            await expect(getUsers(token, 1)).resolves.toEqual(response.data);
            expect(axios.get).toHaveBeenCalledTimes(1);

        });


        it('should fail with a response', async () => {
            axios.get.mockImplementation(() => Promise.reject(new Error(error.message)));

            await expect(getUsers(token, 1)).rejects.toThrow(error.message);

        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

});


