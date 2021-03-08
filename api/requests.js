import http from './http.services';

export const handleLogin = async (userData) => {
    const response = await http.post("auth/login", userData);
    return response.data;
};
export const addScore = async (userInputData, userId, token) => {
    const data = { userInputData, userId };
    const response = await http.post("auth/user/score", {
        headers: { 'Authorization': `Bearer ${token}` }, data
    });
    return response.data;
};


export const getCourses = async (token) => {
    const response = await http.get("courses", {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
};
