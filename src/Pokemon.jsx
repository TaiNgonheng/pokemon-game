import React from "react";
import './Pokestyle.css';

const poke_api = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

export default function Pokemon(props) {
    let imgSrc = `${poke_api}${padToThree(props.id)}.png`;
    return (
        <>
            <div className="Pokestyle">
                <h1 className="Pokecard-title">{props.name}</h1>
                <div className="pokecard-image">
                  <img src={imgSrc} alt={props.name} />
                </div>
                <div className="pokecard-data">Type: <strong>{props.type.toUpperCase()}</strong></div>
                <h4 className="pokecard-data">EXP: {props.exp}</h4>
            </div>
        </>      
    );
}
