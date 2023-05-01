"use strict";

const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const userSelection = document.querySelector('.userSelection');

let checked;
let rating = 0;

function evaluationResult() {
    container.classList.add('hide');
    userSelection.innerText = `You selected ${rating} out of 5`;
    container2.classList.remove('hide');
}

const checking = (e) => {
    if(checked != null) {
        checked.classList.remove('checked');
    }
    checked = e;
    checked.classList.add('checked');
};

document.querySelector('.site-section').addEventListener('click', e => {

    if (e.target.id === 'rat1'){
        rating = 1;
        checking(e.target);
    }
    if (e.target.id === 'rat2'){
        rating = 2;
        checking(e.target);
    }
    if (e.target.id === 'rat3'){
        rating = 3;
        checking(e.target);
    }
    if (e.target.id === 'rat4'){
        rating = 4;
        checking(e.target);
    }
    if (e.target.id === 'rat5'){
        rating = 5;
        checking(e.target);
    }
    if (e.target.id === 'btn-submit'){
        evaluationResult();
    }
});