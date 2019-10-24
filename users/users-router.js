const router = require("express").Router();

const Users = require("./users-model.js");
const Tests = require("../tests/tests-model.js");
const Questions = require("../questions/questions-model.js");


router.get("/", (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get("/:id", verifyUserId, async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Users.findById(id);
        user.tests = await Users.getTestsByUser(id)


        Promise.all(user.tests.map(async test => {
            const questions = await Tests.getQuestionsByTest(test.id)
            test.questions = questions;
            return test;
        })).then(tests => {
            res.status(200).json({ user })
        })
    } catch (err) {
        res.status(500).json({ err });
    }
});


// ---------------------- Custom Middleware ---------------------- //

function verifyUserId(req, res, next) {
    const id = req.params.id;

    Users.findById(id)
        .then(item => {
            if (item) {
                req.item = item;
                next();
            } else {
                res.status(404).json({ message: "User Not Found." });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

module.exports = router;