const router = require("express").Router();

const Tests = require("./tests-model.js");
const Questions = require("../questions/questions-model.js");


router.get("/", (req, res) => {
    Tests.find()
        .then(tests => {
            res.status(200).json(tests);
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.get("/:id", verifyTestId, async (req, res) => {

    try {
        const id = req.params.id;
        const test = await Tests.findById(id)
        test.questions = await Tests.getQuestionsByTest(id)
        Promise.all(test.questions.map(async question => {
            const answers = await Questions.getAnswersByQuestion(question.id)
            question.answers = answers;
            return question;
        })).then(questions => {
            res.status(200).json({ test })
        })

    } catch (err) {
        res.status(500).json({ err });
    }
});

router.post("/", (req, res) => {
    let test = req.body;

    Tests.add(test)
        .then(newTest => {
            res.status(201).json({ newTest })
        })
})

router.put("/:id", verifyTestId, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Tests.update(id, changes)
        .then(updatedTest => {
            res.status(201).json(updatedTest);
        })
        .catch(err => {
            res.status(500).json({ err });
        });
}
);

router.delete("/:id", verifyTestId, (req, res) => {
    const id = req.params.id;

    Tests.remove(id)
        .then(deleted => {
            res.status(200).json({ message: "Test deleted." });
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

// ---------------------- Custom Middleware ---------------------- //

function verifyTestId(req, res, next) {
    const id = req.params.id;

    Tests.findById(id)
        .then(item => {
            if (item) {
                req.item = item;
                next();
            } else {
                res.status(404).json({ message: "Test Not Found." });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

module.exports = router;