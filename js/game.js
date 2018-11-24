class Game{
    constructor(phrases){
        this.missed = 0;
        this.phrases = phrases
    }
    getRandomPhrase(){
        
    const randomNum = Math.floor( Math.random() * this.phrases.length);
    const RandomPhrase = this.phrases[randomNum];
    this.handleInteraction(RandomPhrase)
   
    }

    handleInteraction(RandomPhrase){
        const gamePhrase = new Phrase(RandomPhrase);
        console.log(gamePhrase)
       console.log(gamePhrase.checkLetter())
    }
    
}

let phraseString = ['javascript', 'coding monster','bug finder',
                'profesional coder', 'i love coding'];

                const game = new Game(phraseString)
                game.getRandomPhrase()