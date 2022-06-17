'use strict';
console.log('hola');
const loading = document.querySelector('#loading');
const response = document.querySelector('#answerd');
const input = document.querySelector('#question');
//const error = document.querySelector('.error');

const panels = [loading, response, input];

function hidePanel() {
    for (const panel of panels) {
      panel.classList.add('hidden');
    }
  }

function showPanel (panel) {
    hidePanel();
    panel.classList.remove('hidden')
}
setTimeout(()=>showPanel(input), 5000)



/*  */

function shuffleLetters(name) {
    const newName =[]
    const arrayName = name.split('')
    while(arrayName.length > 0){
        const randomSelection = Math.floor(Math.random()*arrayName.length)
        newName.push(arrayName[randomSelection])
        arrayName.splice(randomSelection,1)
    }
    const buildingAnagram = newName.join('')
    //return console.log(buildingAnagram);\
    const res = response.innerHTML = `
    <h2>${buildingAnagram}</h2>
    <button>Reset</button>`
    showPanel(loading)
    setTimeout(()=>showPanel(response), 5000) 

}

function getName (){
    const inputName = document.querySelector('#questionInput').value
    document.querySelector('#questionInput').value = ''
    shuffleLetters(inputName);

}
function sendName (){
    const funciona = document.querySelector('button')
    funciona.addEventListener('click', getName)
    
   
    
}
sendName()
