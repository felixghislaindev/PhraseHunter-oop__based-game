class Game {
    constructor(phrases){
        this.missed = 0;
        this.phrases = phrases;
        this.phrase = this.getRandomPhrase();
        this.selectedLetter = []
    }
    getRandomPhrase(){
        
            const randomNum = Math.floor( Math.random() * this.phrases.length);
            const RandomPhrase = new Phrase(this.phrases[randomNum]);
        return RandomPhrase
            }
    handleInteraction(letter){
        const gamePhrase = this.phrase.phrase;
         if(this.phrase.checkletter(letter)){
            for(let i = 0; i < gamePhrase.split(letter).length-1; i++){
                this.selectedLetter.push(letter)
            }
            this.checkForWin()
            
            
         } else{
            this.missed++
            
               this.removeLife()
         }


      
    }

    removeLife(){
        // will remove life
        
        let numberOfLife = document.querySelectorAll('#scoreboard ol li').length;
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
   

        if(phrase.length === this.selectedLetter.length){
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






// class Game{
//     constructor(phrases){
//         this.missed = 0;
//         this.phrases = phrases
//     }
//     getRandomPhrase(){
        
//     const randomNum = Math.floor( Math.random() * this.phrases.length);
//     const RandomPhrase = this.phrases[randomNum];
//     this.handleInteraction(RandomPhrase)
   
//     }

//     handleInteraction(RandomPhrase){
//         const gamePhrase = new Phrase(RandomPhrase);
//        console.log( gamePhrase.checkLetter()) ;
//     }
    
// }

// let phraseString = ['javascript', 'coding monster','bug finder',
//                 'profesional coder', 'i love coding'];

//                 const game = new Game(phraseString)
//                 game.getRandomPhrase()