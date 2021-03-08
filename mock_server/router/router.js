const helpers = require('../helpers');
const { createToken, isAuthenticated, isUserRegistered, findUser } = helpers;
const fs = require('fs');
const bcrypt = require("bcrypt");

module.exports = {
    authRouter: async (req, res) => {
        const { empId, password, name, id, adm } = req.body;
        const isAuth = await isAuthenticated({ empId, password });
        console.log(isAuth);
        if (!isAuth) {

            const status = 401;
            const message = 'Incorrect empId or password';
            res.status(status).json({ status, message });
            return;
        }
        const userId = findUser(empId);
        const access_token = createToken({ empId, password });
        res.status(200).json({ access_token, user: { id: userId } });
    },
    newUser: async (req, res) => {
        const { empId, password, name } = req.body;
        let hashedPassword = await bcrypt.hash(password, 10);
        if (isUserRegistered({ empId, name }) === true) {
            const status = 401;
            const message = 'This user is already registered';
            res.status(status).json({ status, message });
            return;
        }

        fs.readFile("./mock_server/user.json", (err, fileData) => {
            err && res.status(401).json({ message: err });
            const parsedData = JSON.parse(fileData.toString());
            const last_id = parsedData.users[parsedData.users.length - 1].id;

            let user = {
                id: last_id + 1, empId, password: hashedPassword, name, adm: false
            };

            parsedData.users.push(user);
            fs.writeFile("./mock_server/user.json", JSON.stringify(parsedData), (err, result) => {
                err && res.status(401).json({ message: err });

                res.status(200).json({ message: "Your score was added" });
                return;
            });
        });

    },
    addScore: (req, res) => {
        const data = req.body.data;
        const { userId, userInputData } = data;
        console.log(userInputData);
        fs.readFile("./mock_server/user.json", (err, fileData) => {
            let parsedData = JSON.parse(fileData.toString());

            let user = parsedData.users.filter(user => userId == user.id);
            user = user[0];
            user['assessments_score'][userInputData.code] = userInputData.score;

            fs.writeFile("./mock_server/user.json", JSON.stringify(parsedData), (err, result) => {
                err && res.status(401).json({ message: err });

                res.status(200).json({ message: "Your user was created" });
                return;
            });
        });
    }


};