import React from 'react';
import { Context as JokeProviderWrapper } from '../../contexts/JokeContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'

const OneJoke = () => {
    const { getJokeWithScores } = useContext(JokeProviderWrapper);
    const jokeId = useParams().id;
    const joke = getJokeWithScores(jokeId);
    return (
        <>
            <div>
                Question : {joke.question}
                <br />
                Answer : {joke.answer}
                <br />
                Category : {joke.category}
                <br />
                id : {joke.id}
                <br />
                scoreCount : {joke.scoreCount}
                <br />
                averageScore : {joke.averageScore}
                <br />
                allScores : {joke.allScores.map((score) => (
                    <div key={score.id}>
                        [
                        username : {score.username}
                        <br />
                        date : {score.date}
                        <br />
                        score : {score.score}
                        <br />
                        joke : {score.joke}
                        <br />
                        id : {score.id}  ]
                        <br />
                        <br />
                    </div>

                ))}

                <br />
                <br />
            </div>

        </>
    )
}

export default OneJoke;
