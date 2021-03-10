import http from '../http.services';

export const handleLogin = async (userData) => {
    const response = await http.post("auth/login", userData);
    return response;
};

export const addScore = async (userInputData, userId, token) => {
    const data = { userInputData, userId };
    const response = await http.post("auth/user/score", {
        headers: { 'Authorization': `Bearer ${token.token}` }, data
    });
    return response;
};

export const addCourse = async (data, token) => {
    const response = await http.post("auth/courses", {
        data,
        headers: { 'Authorization': `Bearer ${token}` }

    });
    return response;
};

export const registerEmployee = async (data, token) => {
    const response = await http.post("/auth/register", {
        data,
        headers: { 'Authorization': `Bearer ${token}` }

    });
    return response;
};
