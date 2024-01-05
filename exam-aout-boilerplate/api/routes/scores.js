const router = require('express').Router()
const jokes = require('../models/jokes');
const Score = require('../models/scores')
const Joke = require('../models/jokes')

router.get('/', (req, res) => {
    Score.find({}).then(scores => {
        res.json(scores)
    });
});

router.post('/', (req, res) => {
    const body = req.body;
    if (!body.username || !body.date || !body.score || !body.joke) {
        return res.status(400).json({ error: 'content missing' })
    }

    if (body.username.length < 3) {
        return res.status(400).json({ error: 'username length not correct' })
    }

    if (body.score < 0 || body.score > 10) {
        return res.status(400).json({ error: 'score not correct' })
    }


    Joke.findById(body.joke).then(joke => {
        if (joke) {
            const score = new Score({
                username: body.username,
                date: body.date,
                score: body.score,
                joke: body.joke
            });

            score.save().then(savedScore => {
                res.json(savedScore)
            });
        } else {
            res.status(400).json({ error: 'joke not found' })
        }
    });


});

module.exports = router