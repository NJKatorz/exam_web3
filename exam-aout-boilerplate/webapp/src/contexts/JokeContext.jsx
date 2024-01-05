import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from 'uuid';
import jokeApi from "../services/jokeApi";
import scoreApi from "services/scoreApi";

const Context = React.createContext(null)


const ProviderWrapper = (props) => {

    const [jokes, setJokes] = useState([]);
    const [scores, setScores] = useState([]);

    const initialLoad = () => {
        jokeApi.getAllJokes().then((joke) => {
            setJokes(joke);
        });
        scoreApi.getAllScores().then((score) => {
            setScores(score);
        });
    }

    useEffect(() => {
        initialLoad();
    }, []);

    const functionScoreCount = (idJoke) => {
        let count = 0;
        for (let i = 0; i < scores.length; i++) {
            if (scores[i].joke === idJoke) {
                count++;
                console.log("count", count);
            }
        }

        return count;
        //return scores.filter((score) => score.joke === idJoke).length;
    };

    const functionAverageScore = (idJoke) => {
        let count = functionScoreCount(idJoke);
        let sumScore = 0;
        for (let i = 0; i < scores.length; i++) {
            if (scores[i].joke === idJoke) {
                sumScore += scores[i].score;
            }
        }
        const averageScore = sumScore / count;
        // return parseFloat(averageScore.toFixed(1));
        return averageScore ? parseFloat(averageScore.toFixed(1)) : 0;
    };
    const getAllJokes = () => {
        const jokesWithScores = jokes.map(joke => {
            const allScores = scores.filter(s => s.joke === joke.id);
            const scoreCount = functionScoreCount(joke.id);
            const averageScore = functionAverageScore(joke.id);
            console.log("vvvvvvvvvvvvvvvvvvvvvvvvv", scoreCount);
            return {
                ...joke,
                scoreCount,
                averageScore,
                allScores,
            };
        });

        return jokesWithScores;
    };

    const getJokeWithScores = (jokeId) => {
        const joke = jokes.find((joke) => joke.id === jokeId);
        const allScores = scores.filter((score) => score.joke === jokeId);
        const scoreCount = functionScoreCount(jokeId);
        const averageScore = functionAverageScore(jokeId);
        return {
            ...joke,
            scoreCount,
            averageScore,
            allScores,
        };
    };

    /** 
    const addOneScore = (username, score, jokeId) => {
        const currentDate = new Date().toISOString();
        const foundUsername = scores.find((score) => score.username === username);
        if (!foundUsername) {
            return;
        }

        const newScore = {
            username: foundUsername,
            date: currentDate,
            score,
            joke: jokeId,

        };

        scoreApi.createOneScore(newScore).then((createdScore) => {
            setScores([...scores, createdScore]);
        });
    };
*/

const addOneScore = (playload) => {
    const currentDate = new Date().toISOString();
    const foundUsername = scores.find((score) => score.username === playload.username);
    if (playload.score < 0 || playload.score > 10) {
        return alert("Score must be between 0 and 10");
    }
    if (foundUsername) {
        return alert("Username already exists");
    }else{
        const newScore = {
        ... playload,
        date: currentDate,

    };

    scoreApi.createOneScore(newScore).then((createdScore) => {
        setScores([...scores, createdScore]);
    });
    }
};


    const exposedValue = {
        getAllJokes,
        functionScoreCount,
        getJokeWithScores,
        addOneScore,
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>;
}

export {
    Context,
    ProviderWrapper,
}