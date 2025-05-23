import Card from "./Card";
import Score from "./Score";

import "./Gameboard.css";
import { useState } from "react";

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
}

const pokeIds = [
    "1",
    "4",
    "7",
    "25",
    "39",
    "52",
    "54",
    "68",
    "94",
    "143",
    "150",
    "151",
];

export default function Gameboard() {
    const [currentScore, setCurrentScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    const [pokeClicked, setPokeClicked] = useState([]);
    const [shuffledPokeIds, setShuffledPokeIds] = useState([...pokeIds]);

    function handleClick(pokeId) {
        // We reset the score/clicked array and set top score accordingly
        if (pokeClicked.includes(pokeId)) {
            topScore < currentScore ? setTopScore(currentScore) : null;
            setCurrentScore(0);
            setPokeClicked([]);
        }
        // If we get to here, it means the user pressed a new poke
        else {
            setPokeClicked([...pokeClicked, pokeId]);
            setCurrentScore(currentScore + 1);
        }

        const newOrder = [...shuffledPokeIds];
        shuffle(newOrder);
        setShuffledPokeIds(newOrder);
    }

    return (
        <>
            <div className="info-container">
                <h1 className="poke-title">Poke Memory</h1>
                <div className="score-board">
                    <Score text="Current Score" score={currentScore}></Score>
                    <Score text="Best Score" score={topScore}></Score>
                </div>
            </div>
            <div className="card-grid">
                {shuffledPokeIds.map((id) => (
                    <Card key={id} pokeId={id} onClick={handleClick}></Card>
                ))}
            </div>
        </>
    );
}
