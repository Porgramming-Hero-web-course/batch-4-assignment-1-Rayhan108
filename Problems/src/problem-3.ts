{
//Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.




const countWordOccurrences=(sentence:string,word:string):number=>{
    const sentenceAsLowerCase =sentence.toLowerCase();
    const wordAsLowerCase = word.toLowerCase();
    const words = sentenceAsLowerCase.split(" ");
    return words.filter(wrd=>wrd=== wordAsLowerCase).length;
   
}

const countWord=countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");


// console.log(countWord);








//
}