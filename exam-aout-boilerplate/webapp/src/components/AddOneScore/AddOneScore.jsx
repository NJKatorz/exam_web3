import React, { useState } from 'react';
import { Context as JokeProviderWrapper } from '../../contexts/JokeContext';
import { useContext } from 'react';

const AddOnenewScore = ({ addNewScore, jokeId }) => {
    const [newUsername, setNewUsername] = useState("");
    const [newScore, setNewScore] = useState("");
   
    const handleAddNewScore = (event) => {
        event.preventDefault();
        addNewScore({
            username: newUsername,
            score: parseInt(newScore),
            joke: jokeId
        
        });
        setNewUsername("");
        setNewScore("");
    }

    const handleNewUserName = event => {
        setNewUsername(event.target.value)
    }

    const handleNewScore = event => {
        setNewScore(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleAddNewScore}>
                <div>
                    username: <input value={newUsername} onChange={handleNewUserName} />
                </div>
                <div>
                    number: <input value={newScore} onChange={handleNewScore} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default AddOnenewScore