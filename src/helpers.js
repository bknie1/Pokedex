const pokemon = [
	{ id: 4, name: 'Charmander', type: 'fire', baseExperience: 62 },
	{ id: 7, name: 'Squirtle', type: 'water', baseExperience: 63 },
	{ id: 11, name: 'Metapod', type: 'bug', baseExperience: 72 },
	{ id: 12, name: 'Butterfree', type: 'flying', baseExperience: 178 },
	{ id: 25, name: 'Pikachu', type: 'electric', baseExperience: 112 },
	{ id: 39, name: 'Jigglypuff', type: 'normal', baseExperience: 95 },
	{ id: 94, name: 'Gengar', type: 'poison', baseExperience: 225 },
	{ id: 133, name: 'Eevee', type: 'normal', baseExperience: 65 }
];

const getImageUrl = (id) => {
	id = id.toString();

	while (id.length < 3) {
		id = 0 + id;
	}
	return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
};

const getRandomTeam = (teamSize = 4) => {
	const result = [];

	let i = 0;
	while (i < teamSize) {
		let index = Math.floor(Math.random() * (pokemon.length - 1)) + 1;
		result.push(pokemon[index]);
		i++;
	}

	return result;
};

const determineWinner = (team1, team2) => {
	let team1Result = team1.reduce((acc, p) => {
		return acc + p.baseExperience;
	});

	let team2Result = team2.reduce((acc, p) => {
		return acc + p.baseExperience;
	});

	if (team1Result == team2Result) return 'draw';
	else if (team1Result > team2Result) return 'team 1';
	else return 'team 2';
};

export default getRandomTeam;
export { getImageUrl, determineWinner };
