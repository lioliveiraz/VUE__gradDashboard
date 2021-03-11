import axios from 'axios';
import { handleLogin, addScore, addCourse, registerEmployee } from '../../../api/requests/post';

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
    post: jest.fn(() => Promise.resolve({})),
    post: jest.fn(() => Promise.rejects({}))

}));

describe('text axios post request', () => {
    let token, userInput, userId, status, error;
    userInput = {
        empId: "123456",
        password: "123456"
    };
    userId = 1;
    token = "token";

    it('should send data to server and retrieve a response', async () => {
        status = 200;
        axios.post.mockResolvedValue(status);

        await expect(handleLogin(userInput)).resolves.toEqual(status);
        await expect(addScore(userInput, userId, token)).resolves.toEqual(status);
        await expect(addCourse(userInput, token)).resolves.toEqual(status);
        await expect(registerEmployee(userInput, token)).resolves.toEqual(status);
        expect(axios.post).toHaveBeenCalledTimes(4);
        expect(axios.post).toHaveBeenNthCalledWith(1, "auth/login", userInput);
        expect(axios.post).toHaveBeenNthCalledWith(3, "auth/courses", { data: userInput, headers: { 'Authorization': `Bearer ${token}` } });
        expect(axios.post).toHaveBeenNthCalledWith(4, "/auth/register", { data: userInput, headers: { 'Authorization': `Bearer ${token}` } });


    });
    it('should fail and retrieve a response', async () => {
        error = "this is an error";
        axios.post.mockImplementation(() => Promise.reject(new Error(error)));
        await expect(handleLogin(userInput)).rejects.toThrow(error);
        await expect(addScore(userInput, userId, token)).rejects.toThrow(error);
        await expect(addCourse(userInput, token)).rejects.toThrow(error);
        await expect(registerEmployee(userInput, token)).rejects.toThrow(error);
    });


});