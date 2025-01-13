const cardsEneunciados = document.getElementById('cards_eneunciados');
const card_enunciado = document.createElement('div');
const texto = document.createElement('p');

texto.innerText="Esto es un ensayo"
card_enunciado.append(texto);
card_enunciado.classList.add('card_enunciado')
cardsEneunciados.append(card_enunciado);