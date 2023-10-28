let url = 'https://pokebuildapi.fr/api/v1/pokemon/limit/100';

const body = document.querySelector('body');
const div = document.createElement('div');
const img = document.createElement('img');

body.appendChild(div);
div.appendChild(img);

const pokedex = fetch(url).then(async (res) => {
  console.log(res);

  const pokeList = await res.json();

  console.log(pokeList);
  console.log(pokeList[0].apiTypes);
  icoPoke = pokeList[53].image;

  img.src = icoPoke;
});
