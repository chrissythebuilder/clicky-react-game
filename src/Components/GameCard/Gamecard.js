import React from "react";
import "./Gamecard.css";

const Gamecard = props => (
    <div className = "card" onClick ={() => props.imageShuffle(props.id, props.value)}>
        <div className = "img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <ul>
            <li>
                Name: {props.name}
            </li>
            <li>
                Ability: {props.ability}
            </li>
            <li>
                Habitat: {props.habitat}
            </li>
            <li>
                Strength: {props.strength}
            </li>
            <li>
                Resistance: {props.resistance}
            </li>
        </ul>
    </div>
);

export default Gamecard;