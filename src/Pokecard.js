import React from 'react';
import { getImageUrl } from './helpers';
import './Pokecard.css';

class Pokecard extends React.Component {
	render() {
		const id = this.props.pokemon.id,
			name = this.props.pokemon.name,
			image = getImageUrl(id),
			type = this.props.pokemon.type,
			baseExperience = this.props.pokemon.baseExperience;

		return (
			<div className="Pokecard">
				<img className="Pokecard-image" src={image} />
				<h4>{name}</h4>
				<h5>{type}</h5>
				<h6>{baseExperience}</h6>
			</div>
		);
	}
}

export default Pokecard;
