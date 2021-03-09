const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const { authRouter, newUser, addScore, getScoreFromUser, getEmployeesFromUserDB } = require('./router/router');
const helpers = require('./helpers');

const { verifyToken } = helpers;


const server = jsonServer.create();
const router = jsonServer.router('./mock_server/db.json');
server.use(jsonServer.defaults());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


server.post("/auth/login", authRouter);
server.post("/auth/register", newUser);
server.post("/auth/user/score", addScore);

server.get("/users", getEmployeesFromUserDB);
server.get("/users/scores?", getScoreFromUser);

server.use(/^(?!\/auth).*$/, async (req, res, next) => {

    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
        const status = 401;
        const message = 'Bad authorization header';
        res.status(status).json({ status, message });
        return;
    }
    try {
        await verifyToken(req.headers.authorization.split(' ')[1]);
        next();
    }
    catch (err) {
        const status = 401;
        const message = 'Error: access_token is not valid';
        res.status(status).json({ status, message });
    }


});

server.use(router);

server.listen(4020, () => {
    console.log('Run Auth API Server');
});