import { useEffect, useState } from "react";
import "./Card.css";

export default function Card({ pokeId, onClick }) {
    const [pokeName, setPokeName] = useState("");
    const [pokeImage, setPokeImage] = useState("");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
            .then((respone) => respone.json())
            .then((poke) => {
                setPokeName(poke.name.toUpperCase());
                setPokeImage(poke.sprites.front_default);
            })
            .catch((err) => console.log("Error: ", err));
    }, []);

    return (
        <button
            className="card-content pixel-corners"
            onClick={() => onClick(pokeId)}
        >
            {pokeImage && (
                <img
                    src={pokeImage}
                    className="poke-img"
                    alt="pokemon-image"
                ></img>
            )}
            {pokeName && <p className="poke-name">{pokeName}</p>}
        </button>
    );
}
