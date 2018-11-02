import React from "react";
import "./Header.css";
 
const Header = props => (
    <nav className="header">
        <ul>
            <li className = "name">{props.title} </li>

            <li className = "game-message">
            {props.message}</li>

            <li className = "current-score">
            Current Score: {props.current}</li>

            <li className = "top-score">
            Top Score: {props.top} </li>
        </ul>
    </nav>
    
);

export default Header;