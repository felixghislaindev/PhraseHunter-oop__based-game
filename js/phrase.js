
class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }
    // add the phrase of the game to the display
    addPhraseToDisplay(){
        const phraseUl = document.querySelector('#phrase ul');
                const phraseToletter =  this.phrase
                .split('')
                .map((letter, index) => {
                    const regEx = /\s/
                    if(regEx.test(letter) === false){
                        return `<li class="hide letter ${letter}">${letter}</li>`
                    } else {
                        return `<li class="hide space"> </li>`
                    }
        
    });
    return phraseUl.innerHTML = phraseToletter.join('')
}
    // checks if selected leeter exist in the phrase
    checkletter(l){
        console.log(this.phrase.includes(l))
        if(this.phrase.includes(l)){
            
            const lis = document.querySelectorAll('#phrase ul li');
                        lis.forEach(li => {
                            if(l === li.innerHTML){
                                this.showMatchedLetter(li)
                            }})

                            return true
            }
                
        }  
    // display corret letter on the scree
    showMatchedLetter(letterToShow){
        letterToShow.className = 'show';
    }
}



    


