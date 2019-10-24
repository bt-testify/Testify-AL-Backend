const router = require("express").Router();

const Questions = require("./questions-model.js");


router.get("/", (req, res) => {
    Questions.find()
        .then(questions => {
            res.status(200).json(questions);
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.get("/:id", verifyQuestionId, (req, res) => {
    const id = req.params.id;

    Questions.findById(id)
        .then(question => {
            res.status(200).json(question);
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.post("/", (req, res) => {
    let question = req.body;

    Questions.add(question)
        .then(newQ => {
            res.status(201).json({ newQ })
        })
})

router.put("/:id", verifyQuestionId, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Questions.update(id, changes)
        .then(updatedQ => {
            res.status(201).json(updatedQ);
        })
        .catch(err => {
            res.status(500).json({ err });
        });
}
);

router.delete("/:id", verifyQuestionId, (req, res) => {
    const id = req.params.id;

    Questions.remove(id)
        .then(deleted => {
            res.status(200).json({ message: "Question deleted." });
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

// ---------------------- Custom Middleware ---------------------- //

function verifyQuestionId(req, res, next) {
    const id = req.params.id;

    Questions.findById(id)
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