import http from '../http.services';

/**
 * @function handleLogin
 * @param {object} data 
 * @returns {Promise}
 */

export const handleLogin = async (data) => {
    const response = await http.post("auth/login", data);
    return response;
};

/**
 * 
 * @function addScore
 * @param {object} data 
 * @param {number} userId 
 * @param {string} token 
 * @returns {Promise} 
 */
export const addScore = async (userData, userId, token) => {
    const data = { userData, userId };
    const response = await http.post("auth/user/score", {
        headers: { 'Authorization': `Bearer ${token.token}` }, data
    });
    return response;
};
/**
 * @function addCourse
 * @param {object} data 
 * @param {string} token 
 * @returns {Promise}
 */
export const addCourse = async (data, token) => {
    const response = await http.post("auth/courses", {
        data,
        headers: { 'Authorization': `Bearer ${token}` }

    });
    return response;
};
/**
 * @function registerEmployee
 * @param {object} data 
 * @param {string} token 
 * @returns 
 */
export const registerEmployee = async (data, token) => {
    const response = await http.post("/auth/register", {
        data,
        headers: { 'Authorization': `Bearer ${token}` }

    });
    return response;
};
