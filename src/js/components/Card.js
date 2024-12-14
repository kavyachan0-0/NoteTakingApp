

'use strict';



export const Card = function (noteData) {

    const { id, title, text, postedOn, notebookId } = noteData;

    const $card = document.createElement('div');
    $card.classList.add('card');
    $card.setAttribute('data-note', id);

    $card.innerHTML = HTMLCollection`
    
    `;

}