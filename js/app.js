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
function markButton(event,type){
   
    // will fire if a the onscreen keyboard is pressed
    if(type === 'click'){
        const btnSelected = event;
        btnSelected.className = 'chosen';
        btnSelected.disabled = true;
        const letterSelected =  event.innerHTML;
        game.handleInteraction(letterSelected)
    } 
    // will fire when the phisycal keyboard is pressed
    else{
        const keys = document.querySelectorAll('#qwerty button');

    keys.forEach(key => {
       if(key.innerHTML === event){
        key.className = 'chosen';
        key.disabled = true;
        game.handleInteraction(event)
        
       }
    })
    }

    
    
    
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
         markButton(event.target, event.type);
         
    })
})

// keyboard functionality
document.addEventListener('keypress', (e)=>{
    markButton(e.key,e.type)
    
})



