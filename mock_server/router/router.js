const helpers = require('../helpers');
const { createToken, isAuthenticated, isUserRegistered, findUser } = helpers;
const fs = require('fs');
const bcrypt = require("bcrypt");
const userDb = JSON.parse(fs.readFileSync('./mock_server/user.json', 'utf-8'));
const coursesDb = JSON.parse(fs.readFileSync('./mock_server/db.json', 'utf-8'));

module.exports = {
    authRouter: async (req, res) => {
        const { empId, password } = req.body;
        const isAuth = await isAuthenticated({ empId, password });
        if (!isAuth) {
            const status = 401;
            const message = 'Incorrect empId or password';
            res.status(status).json({ message });
            return;
        }
        const userObject = findUser(empId);
        const access_token = createToken({ empId, password });
        res.status(200).json({ access_token, user: { id: userObject.id, role: userObject.role, name: userObject.name } });
    },
    newUser: async (req, res) => {
        const { empId, password, name } = req.body.data;
        let hashedPassword = await bcrypt.hash(password, 10);
        if (isUserRegistered({ empId }) === true) {
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
                id: last_id + 1, empId, password: hashedPassword, name, role: ["GRAD"], assessments_score: []
            };

            parsedData.users.push(user);
            fs.writeFile("./mock_server/user.json", JSON.stringify(parsedData), (err, result) => {
                err && res.status(401).json({ message: err });

                res.status(200).json({ message: "Your user was created" });
                return;
            });
        });

    },
    addScore: (req, res) => {
        const data = req.body.data;
        const { userId, userData } = data;
        let user = userDb.users.filter(user => userId == user.id);
        user = user[0];
        user['assessments_score'] = [...user['assessments_score'], { code: userData.code, score: userData.score }];

        fs.writeFile("./mock_server/user.json", JSON.stringify(userDb), (err, result) => {
            err && res.status(401).json({ message: err });
            res.status(200).json({ message: "Your score was added" });
            return;
        });

    },
    addCourse: (req, res) => {
        const data = req.body.data;

        const last_id = coursesDb.courses[coursesDb.courses.length - 1].id;
        coursesDb.courses.push({ id: last_id + 1, ...data });

        fs.writeFile("./mock_server/db.json", JSON.stringify(coursesDb), (err, result) => {
            err && res.status(401).json({ message: err });
            res.status(200).json({ message: "Your course was addeded" });
            return;
        });

    },

    getScoreFromUser: (req, res) => {
        const id = req.query.id;
        let user = userDb.users.filter(user => id == user.id || id == user.empId);
        user = user[0];
        if (user === undefined) {
            res.status(404).json({ message: "User not found" });
        }
        const returnScores = {
            scores: user.assessments_score
        };
        res.status(200).json(returnScores);

    },

    getEmployeesFromUserDB: (req, res) => {
        let user = userDb.users.filter(user => user.role[0] === "GRAD");
        let returnedUser = [];

        user.forEach(grad => {
            returnedUser.push({
                id: grad.id,
                empId: grad.empId,
                name: grad.name,
                assessments_score: grad.assessments_score
            });

        });
        res.status(200).json(returnedUser);
    }



};