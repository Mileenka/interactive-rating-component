"use strict";

const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const userSelection = document.querySelector('.userSelection');

let checked;
let rating = 0;

function evaluationResult() {
    container.classList.add('display');
    userSelection.innerText = `You selected ${rating} out of 5`;
    container2.classList.remove('display');
}

const checking = (e) => {
    if(checked != null) {
        checked.classList.remove('checked');
    }
    checked = e;
    checked.classList.add('checked');
};

document.querySelector('.site-section').addEventListener('click', e => {

    switch (e.target.id) {
        case 'rat1':
          rating = 1;
          checking(e.target);
          break;
        case 'rat2':
          rating = 2;
          checking(e.target);
          break;
        case 'rat3':
          rating = 3;
          checking(e.target);
          break;
        case 'rat4':
          rating = 4;
          checking(e.target);
          break;
        case 'rat5':
          rating = 5;
          checking(e.target);
          break;
        case 'btn-submit':
          evaluationResult();
      }      
});