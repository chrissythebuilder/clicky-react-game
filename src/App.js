import React, { Component } from 'react';
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import Title from "./Components/Title";
import Gamecard from "./Components/GameCard";
import pokemon from "./pokemon.json";
import './App.css';

const shuffle = require("shuffle-array");

class App extends Component {

  state = {
    images:pokemon,
    clickedImg: [],
    current: 0,
    top: 0,
    message: "Click an image to start!"
  };

  imageShuffleFn = (id) => {
    let find = 0;
    const arrayLength = this.state.images.length;

    for(let i = 0; i < arrayLength; i++) {
      if (id === this.state.clickedImg[i]) {
        find = 1;
        this.setState ({
          message: "You've done well, keep playing!"
        });

        this.setState({
          pokemon,
          clickedImg: [],
          current: 0,
          counter: 0
        })
      }
    }

    if(find===0) {
      this.state.clickedImg.push(id);
      var currentScore = this.state.current + 1;

      this.setState({
        current: currentScore,
        message: "You've done well, keep playing!",
        images: shuffle(this.state.images)
      })

      var topScore = this.state.top;
      if(topScore <= currentScore) {
        this.setState({topScore:currentScore})
      }

    }
  }


  render() {
    return (
      <Wrapper>
        <Header
          title="Pokemon Clicky Game"
          message={this.state.message}
          current={this.state.current}
          top={this.state.top}
        />
        <Title>Gotta catch them all!</Title>
        {this.state.images.map(pokemon => (
        <Gamecard
            imageShuffle={()=> this.imageShuffleFn(pokemon.id)}
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
