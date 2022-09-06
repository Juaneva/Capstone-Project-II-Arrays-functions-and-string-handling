// Create a program cypher that is going to use the 15th letter after the letter you want to use.


let cypher = prompt("Enter a word or phrase to encode: ")
cypher = cypher.toLowerCase();                             //make sure the word or phrase input is not case sensitive
cypher = cypher.toUpperCase();
function rot13(cypher) {                                    // create a function
    
    let phraseOrWord = cypher.split("")
    let result = []
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"  // declare alphabets without using an array map
    
    let arrayOfMessage = alphabets.split("")


    for (let i=0; i<phraseOrWord.length; i++){
    
    
    let index = arrayOfMessage.findIndex(letter => {
            return (letter === phraseOrWord[i])
    })
        if (index >= 0){
    
    result.push(arrayOfMessage.slice(index + 15, index + 16)[0])        // 15 is used to show how many letters forward. 
                                                                        // 16 is used to show in an array where the 15th letter is
    } 
        else {
            result.push(phraseOrWord[i])
    }
    }
    
            return result.join("")
    }
    
    console.log(rot13(cypher));