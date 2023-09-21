let pigLatin = () => {
    
    let userInput = document.getElementById('textEntry')
    let textValue = userInput.value 
    let wordTrim = textValue.toLowerCase().trim()
    // console.log(wordTrim)

    let vowels = ['a', 'e', 'i', 'o', 'u']

    let firstVowelIndex = -1;
    for (let i = 0; i < wordTrim.length; i++) {
      if (vowels.indexOf(wordTrim[i]) !== -1) {
        firstVowelIndex = i;
        break;
      }
    }

    if (firstVowelIndex === 0) {
        // console.log(wordTrim + "yay");
        // return wordTrim + "yay";
      }

      if (firstVowelIndex === -1) {
        // console.log(wordTrim + "ay")
        // return wordTrim +"ay";
      }

      const part1 = wordTrim.substring(firstVowelIndex);
      const part2 = wordTrim.substring(0, firstVowelIndex);

      const pigLatinWord = part1 + part2 + "ay";
      console.log(pigLatinWord)
    //   return pigLatinWord;

    
    let listWrap = document.getElementById('wordList')

    let textNode = document.createTextNode(pigLatinWord)
    let newItem = document.createElement('li')
    
    
    listWrap.appendChild(newItem)
    newItem.appendChild(textNode)
}