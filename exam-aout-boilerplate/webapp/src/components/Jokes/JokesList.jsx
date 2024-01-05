import React from 'react';
import AddOneScore from '../AddOneScore/AddOneScore';
import { Context as JokeProviderWrapper } from '../../contexts/JokeContext';
import { useContext } from 'react';


const JokesList = ({ jokes }) => {
    const { addOneScore } = useContext(JokeProviderWrapper);

    return (
        <>
            <div> {jokes.map((joke) => (
                <div key={joke.id}>
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
                            username : {score.username}
                            <br />
                            date : {score.date}
                            <br />
                            score : {score.score}
                            <br />
                            joke : {score.joke}
                            <br />
                            id : {score.id}
                            <br />
                            <br />
                        </div>))}
                  
                    <AddOneScore addNewScore={addOneScore} jokeId={joke.id}/>
                    <br />
                    <br />
                     
                </div>))}
                
            </div>

        </>
    )
}

export default JokesList
