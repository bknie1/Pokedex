import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends React.Component {
	render() {
		const pokemon = this.props.pokemon;

		return <div className="Pokedex">{pokemon.map((p) => <Pokecard pokemon={p} />)}</div>;
	}
}

export default Pokedex;
