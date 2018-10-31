import React, { Component } from 'react';
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import Title from "./Components/Title";
import Gamecard from "./Components/GameCard";
import Footer from "./Components/Footer";
import pokemon from "./pokemon.json";
import './App.css';

class App extends Component {

  state = {
    pokemon
  };

  


  render() {
    return (
      <Wrapper>
        <Header> Clicky Game </Header>
        <Title>Gotta catch them all, Pokemon!</Title>
        {this.state.pokemon.map(pokemon => (
        <Gamecard
            id={pokemon.id}
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            ability={pokemon.ability}
            habitat={pokemon.habitat}
            strength={pokemon.strength}
            resistance={pokemon.resistance}
        />
        ))} 
      </Wrapper>
    );
  }
}

export default App;
