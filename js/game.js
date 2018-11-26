class Game {
    constructor(phrases){
        this.missed = 0;
        this.phrases = phrases;
        this.phrase = this.getRandomPhrase();
        this.selectedLetter = []
    }
    getRandomPhrase(){
            // generate random number and pulls random phrase
            const randomNum = Math.floor( Math.random() * this.phrases.length);
            const RandomPhrase = new Phrase(this.phrases[randomNum]);
        return RandomPhrase
            }
    handleInteraction(letter){
        const gamePhrase = this.phrase.phrase;
         if(this.phrase.checkletter(letter)){
            //  will add the letter the amount of time it is found in the phrase
            for(let i = 0; i < gamePhrase.split(letter).length-1; i++){
                // will push the matching letter into an array
                this.selectedLetter.push(letter)
            }
            this.checkForWin()
            
            
         } else{
            this.missed++
            
               this.removeLife()
         }


      
    }

    removeLife(){
        // will remove life and heart on screen if answer is wrong
        const heartDisplay = document.querySelectorAll('#scoreboard ol li');
        heartDisplay[5 - this.missed].style.display = 'none';
      
       if(this.missed === 5){
           this.gameOver()
       }
        

        
       
    }
    checkForWin(){
        // will check for win
        const gamePhrase = this.phrase.phrase;
        const phrase = gamePhrase.replace(/\s/g, '').split('');
        const winnMsg = document.querySelector('#game-over-message');

        const tryAaginBtn = document.createElement('BUTTON');
        tryAaginBtn.className = 'button'
        tryAaginBtn.setAttribute('id','btn__failure');
   
        // checks if the array that contains the player selected letter as 
        // the same length as the game phrase

        if(phrase.length === this.selectedLetter.length){

            // will display the winning message
            document.querySelector('#overlay').style.display = '';
            document.querySelector('#btn__reset').style.display = 'none';
            winnMsg.innerHTML = 'You Win!';
            tryAaginBtn.innerHTML = 'Play Again';
            winnMsg.parentNode.insertBefore(tryAaginBtn,winnMsg.nextSibling)
    
            tryAaginBtn.addEventListener('click',()=>{
                location.reload(true)
            })
            
        }
        
        
        
        
    }
    gameOver(){
        // will display lossing message

        const losingMsg = document.querySelector('#game-over-message');
        const tryAaginBtn = document.createElement('BUTTON');
        tryAaginBtn.className = 'button'
        tryAaginBtn.setAttribute('id','btn__failure');

        tryAaginBtn.addEventListener('click',()=>{
            location.reload(true)
        })

       
            document.querySelector('#overlay').style.display = '';
            document.querySelector('#btn__reset').style.display = 'none';

            losingMsg.innerHTML = 'You lost';
            tryAaginBtn.innerHTML = 'Play Again';
            losingMsg.parentNode.insertBefore(tryAaginBtn,losingMsg.nextSibling)
            
    }
    startGame(){
        // call getrandomphrase 
        const phrase = this.phrase
        phrase.addPhraseToDisplay();
        // will also call addphrasetodisplay 
    }
}
