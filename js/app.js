// app variables 
let phraseString = ['javascript is awesome', 'coding monster','bug finder',
                'profesional coder', 'i love coding'];


const startBtn = document.querySelector('#btn__reset');
const game = new Game(phraseString);


// app functions 
function resetDisplay (){
    // hiding the game start screen/overlay
    document.querySelector('#overlay').style.display = 'none';
   
          
}
function markButton(event){
    const btnSelected = event.target;
    btnSelected.className = 'chosen';
    btnSelected.disabled = true;


    const letterSelected =  event.target.innerHTML;
    game.handleInteraction(letterSelected)
}



// adding event listener to start btn
startBtn.addEventListener('click', ()=>{
    resetDisplay();
    // creating the game
    game.startGame()
});

// adding even listener to the keyboard
const keys = document.querySelectorAll('#qwerty button');

keys.forEach(key => {
    key.addEventListener('click', (event) => {
         markButton(event);
         
    })
})

document.addEventListener('keydown', (e)=>{
    console.log(e.keyCode)
})




