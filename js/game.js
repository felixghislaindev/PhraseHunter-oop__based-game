class Game {
    constructor(phrases){
        this.missed = 0;
        this.phrases = phrases;
        this.phrase = this.getRandomPhrase()
    }
    getRandomPhrase(){
        
            const randomNum = Math.floor( Math.random() * this.phrases.length);
            const RandomPhrase = new Phrase(this.phrases[randomNum]);
        return RandomPhrase
            }
    handleInteraction(letter){
        const gamePhrase = this.phrase.phrase;
        if(gamePhrase.includes(letter)){

            const lis = document.querySelectorAll('#phrase ul li');
                        lis.forEach(li => {
                            if(letter === li.innerHTML){
                                this.phrase.showMatchedLetter(li)
                            }})
            
        } else{
            let missed = this.missed;
            missed++;
            this.removeLife(missed)
        }
        console.log()
        // console.log(this.phrase.includes(letter))
       
        // if matched letter call showmatched letter
        // else call removelife
    }

    removeLife(missed){
        // will remove life
        
        let numberOfLife = document.querySelectorAll('#scoreboard ol li').length;
        const heartDisplay = document.querySelectorAll('#scoreboard ol li');
        

        heartDisplay[5 - missed].style.display = 'none';
      
       console.log(missed)
        

        
       
    }
    checkForWin(){
        // will check for win
    }
    gameOver(){
        // will display lossing message
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