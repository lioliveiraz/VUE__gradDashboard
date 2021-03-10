import http from '../http.services';

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
