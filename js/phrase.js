

class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }
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
    checkletter(){
        console.log('will check letter')
    }
    showMatchedLetter(letterToShow){
        letterToShow.className = 'show';
    }
}


// class Phrase {
//     constructor(phrase){
//         this.phrase = phrase
//     }
//     addPhraseToDisplay(){
//         const phraseUl = document.querySelector('#phrase ul');
//         const phraseToletter =  this.phrase
//         .split('')
//         .map((letter, index) => {
//             const regEx = /\s/
//             if(regEx.test(letter) === false){
//                 return `<li class="hide letter ${letter}">${letter}</li>`
//             } else {
//                 return `<li class="hide space"> </li>`
//             }
      
//     });
//     
// }
//     // will check if selected letter either exist or not
//     checkLetter(){
//         const letterLi = document.querySelectorAll('button');
        
//         letterLi.forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const phrase = this.phrase;
//                 const userClickedLetter = e.target.innerHTML;
                
//                 if(phrase.includes(userClickedLetter)){
                
//                     console.log('found one')
//                     // showing existing letters
//                     this.showLetter(userClickedLetter);
                    
//                 } else{
                    
//                     return phrase.includes(userClickedLetter);
//                 }

               
//             })
//         })
//     }

//     // will change the letter class from hid to show
//     showLetter(userClickedLetter){
//         const lis = document.querySelectorAll('#phrase ul li');
//             lis.forEach(li => {
//                 if(userClickedLetter === li.innerHTML){
//                     li.className = 'show'
//                 } 
//     })
    
// }
// }
    
    


