const router = require('express').Router()
const Joke = require('../models/jokes')

router.get('/', (req, res) => {
    Joke.find({}).then(jokes => {
        res.json(jokes)
    });
});

router.get('/:id', (req, res) => {
    const jokeId = req.params.id;
    if (!jokeId) {
        return res.status(400).json({ error: 'id not correct' })
    }

    Joke.findById(jokeId).then(joke => {
        console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV", joke)
        if (joke) {
            res.json(joke)
        }else{
            res.status(400).json({ error: 'id not found' })
        }
    });
});

router.post('/', (req, res) => {
    const body = req.body;
    if (!body.question || !body.answer || !body.category) {
        return res.status(400).json({ error: 'content missing' })
    }

    if (body.question.length < 3 || body.answer.length < 3 || body.category.length < 3) {
        return res.status(400).json({ error: 'question length, answer length and/or category length not correct' })
    }
    const joke = new Joke({
        question: body.question,
        answer: body.answer,
        category: body.category
    });

    joke.save().then(savedJoke => {
        res.json(savedJoke)
    });
});

router.delete('/:id', (req, res) => {
    const jokeId = req.params.id;
    if (!jokeId) {
        return res.status(400).json({ error: 'id not correct' })
    }

    Joke.findByIdAndRemove(jokeId).then(deletedJoke => {
        if (jokeId) {
            res.json(deletedJoke);
        } else {
            res.status(400).json({ error: 'id not found' });
        }
    });

});

module.exports = router