import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')


import moment from 'moment';
import 'moment/locale/pl';
console.log(moment);

const todayIs =  moment().format('LLLL </br></br> hh:mm:ss');

const todayPlaceholder = document.querySelector('.today--js');
todayPlaceholder.innerHTML = todayIs;

console.log(todayIs);

// // 
// const now =  moment().format('LLLL </br></br>h:mm:ss');

// const todayPlaceholder = document.querySelector('.today--js');
// todayPlaceholder.innerHTML = now;

// console.log(now);

const data = new Date().toLocaleDateString().slice(0, 10); ;
console.log(data);


// // 

// definiowanie zmiennych przycisków
const glassCounter = document.querySelector('.glass__counter--js');
const buttonAdd = document.querySelector('.button--js');
const buttonRemove = document.querySelector('.button-remove--js');
const key = new Date().toISOString().slice(0, 10);
const timeAnimation = 3000;

// Zmiana z moment na Date()
// // const now = new Date().toLocaleDateString().slice(0, 10); 
// // console.log(now);

let currentGlassCounter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
    currentGlassCounter = localStorageValue;
}   else {
    localStorage.setItem(key, 0);
}

glassCounter.innerHTML = currentGlassCounter;

console.log(key);

glassCounter.innerHTML = currentGlassCounter;


buttonAdd.addEventListener('click', () => {
    currentGlassCounter++;
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);

    const glassAdd = document.querySelector('.glass__counter--js');
    glassAdd.classList.add('animated__add');
    
    function remove() {
        glassAdd.classList.remove('animated__add');
    }

    setTimeout(remove, timeAnimation);

    



});

buttonRemove.addEventListener('click', () => {
    if (currentGlassCounter > 0) {
    currentGlassCounter--;
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);


    // const glassOut = document.querySelector('.glass--js');
    // glassOut.classList.toggl('');
  

    const glassOut = document.querySelector('.glass--js');
    glassOut.classList.add('glass--animated');
 
    function remove() {
        glassOut.classList.remove('glass--animated');
    }
 
    setTimeout(remove, timeAnimation);

    }    
});
