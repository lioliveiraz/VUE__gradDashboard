const jwt = require('jsonwebtoken');
const fs = require('fs');
const bcrypt = require("bcrypt");

const userDb = JSON.parse(fs.readFileSync('./mock_server/user.json', 'utf-8'));
const SECRET_KEY = "123456";
const expiresIn = '1h';


module.exports = {
    createToken: function createToken(payload) {
        return jwt.sign(payload, SECRET_KEY, { expiresIn });

    },

    verifyToken: function verifyToken(token) {
        return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err);

    },

    isAuthenticated: async function isAuthenticated({ empId, password }) {
        let user = userDb.users.filter(user => { return user.empId === empId; });
        if (user.length < 1) {
            return false;
        } else {
            user = user[0];
            const result = await bcrypt.compare(password, user.password);
            return result;
        }



    },
    isUserRegistered: function isUserRegistered({ empId, name }) {
        return userDb.users.findIndex(user => user.empId === empId || user.name === name) !== -1;
    },
    findUser: function findUser(empId) {
        const user = userDb.users.filter(user => { return user.empId === empId; });
        return user[0].id;
    }


};