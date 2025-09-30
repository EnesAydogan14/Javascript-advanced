
const marvels = ['Iron Man', 'Captain America', 'Thor', 'Black Panther'];

const addMarvel = (film) => {
	marvels.push(film);
};

addMarvel('Spider-Man');

for (const film of marvels) {
	console.log(film);
}
