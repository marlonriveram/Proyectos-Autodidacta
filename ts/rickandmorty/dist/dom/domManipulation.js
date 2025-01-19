import { apiRickAndMorty } from "../api/api.js";
const tableBody = document.getElementById('table__body');
const characters = apiRickAndMorty('https://rickandmortyapi.com/api/character');
if (tableBody) {
    characters.then(data => {
        data.results.forEach(character => {
            const row = document.createElement('tr');
            const image = document.createElement('img');
            const containerImg = document.createElement('td');
            const gender = document.createElement('td');
            const names = document.createElement('td');
            const specie = document.createElement('td');
            const statu = document.createElement('td');
            const originn = document.createElement('td');
            image.src = character.image;
            containerImg.appendChild(image);
            containerImg.classList.add('containerImg');
            gender.textContent = character.gender;
            names.textContent = character.name;
            specie.textContent = character.species;
            statu.textContent = character.status;
            originn.textContent = character.location.name;
            row.append(containerImg, names, gender, specie, statu, originn);
            tableBody.append(row);
        });
    });
}
else {
    console.log('Table body not found');
}
