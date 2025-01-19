import { apiRickAndMorty } from "../api/api.js";
const characters = apiRickAndMorty('https://rickandmortyapi.com/api/character')
    .then(data => console.log(data));
export { characters };
