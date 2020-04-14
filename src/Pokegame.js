import React from 'react';
import getRandomTeam from './helpers';
import { determineWinner } from './helpers';
import Pokedex from './Pokedex';
import './Pokegame.css';

class Pokegame extends React.Component {
	render() {
		const team1 = getRandomTeam();
		const team2 = getRandomTeam();

		return (
			<section className="Pokegame">
				<h1 className="Pokegame-title">Pokemon Battle</h1>
				{determineWinner(team1, team2) == 'team 1' ? (
					<h4 className="Pokedex-winner">Winning Hand</h4>
				) : (
					<h4 className="Pokedex-loser">Losing Hand</h4>
				)}
				<Pokedex pokemon={team1} />
				<h2 class="Pokegame-versus">Versus</h2>
				{determineWinner(team1, team2) == 'team 2' ? (
					<h4 className="Pokedex-winner">Winning Hand</h4>
				) : (
					<h4 className="Pokedex-loser">Losing Hand</h4>
				)}
				<Pokedex pokemon={team2} />
			</section>
		);
	}
}

export default Pokegame;
