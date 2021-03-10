import http from './http.services';

export const handleLogin = async (userData) => {
    const response = await http.post("auth/login", userData);
    return response;
};
export const addScore = async (userInputData, userId, token) => {
    const data = { userInputData, userId };
    const response = await http.post("auth/user/score", {
        headers: { 'Authorization': `Bearer ${token.token}` }, data
    });
    return response.data;
};
export const addCourse = async (data, token) => {
    const response = await http.post("auth/courses", {
        data,
        headers: { 'Authorization': `Bearer ${token}` }

    });
    return response.data;
};


export const getCourses = async (token) => {
    const response = await http.get("courses", {
        headers: { 'Authorization': `Bearer ${token.token}` }
    });
    return response.data;
};

export const getScores = async (id, token) => {
    const response = await http.get(`users/scores?`, { params: { id: id }, headers: { 'Authorization': `Bearer ${token.token}` } });
    return response.data;
};

export const getUsers = async (token) => {
    const response = await http.get(`users`, { headers: { 'Authorization': `Bearer ${token.token}` } });
    return response.data;
};
