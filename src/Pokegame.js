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
				<div className={determineWinner(team1, team2) == 'team 1' ? 'Pokedex-winner' : ''}>
					<Pokedex pokemon={team1} />
				</div>
				<h2 class="Pokegame-versus">Versus</h2>
				<div className={determineWinner(team1, team2) == 'team 2' ? 'Pokedex-winner' : ''}>
					<Pokedex pokemon={team2} />
				</div>
			</section>
		);
	}
}

export default Pokegame;
