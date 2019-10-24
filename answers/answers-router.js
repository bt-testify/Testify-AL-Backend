const router = require("express").Router();

const Answers = require("./answers-model.js");


router.get("/", (req, res) => {
    Answers.find()
        .then(answers => {
            res.status(200).json(answers);
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.get("/:id", verifyTestId, (req, res) => {
    const id = req.params.id;

    Answers.findById(id)
        .then(answer => {
            res.status(200).json(answer);
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.post("/", (req, res) => {
    let answer = req.body;

    Answers.add(answer)
        .then(newAnswer => {
            res.status(201).json(newAnswer)
        })
})

router.put("/:id", verifyTestId, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Answers.update(id, changes)
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

    Answers.remove(id)
        .then(deleted => {
            res.status(200).json({ message: "Answer deleted." });
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

// ---------------------- Custom Middleware ---------------------- //

function verifyTestId(req, res, next) {
    const id = req.params.id;

    Answers.findById(id)
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