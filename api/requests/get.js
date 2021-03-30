import http from '../http.services';

/**
 * @function getCourses
 * @param {string} token 
 * @returns {Promise}
 */
export const getCourses = async (token) => {
    const response = await http.get("courses", {
        headers: { 'Authorization': `Bearer ${token.token}` }
    });
    return response.data;
};
/**
 * @function getScores
 * @param {number} id
 * @param {string} token 
 * @returns {Promise}
 */
export const getScores = async (id, token) => {
    const response = await http.get(`users/scores?`, { params: { id: id }, headers: { 'Authorization': `Bearer ${token.token}` } });
    return response.data;
};
/**
 * @function getUsers
 * @param {string} token 
 * @returns {Promise}
 */
export const getUsers = async (token) => {
    const response = await http.get(`users`, { headers: { 'Authorization': `Bearer ${token.token}` } });
    return response.data;
};
