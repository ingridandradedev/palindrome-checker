function palindrome(str) {
    // Remover caracteres não alfanuméricos e transformar em minúsculas
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '');

    // Colocar string em lower case
    const lowercaseStr = cleanedStr.toLowerCase();
    
    // Inverter a string
    const reversedStr = lowercaseStr.split('').reverse().join('');
    
    // Comparar a string original com a invertida
    return lowercaseStr === reversedStr;
  }
  
  function checkPalindrome() {
    const input = document.getElementById('string').value;
    const resultElement = document.getElementById('result');
  
    if (palindrome(input)) {
      resultElement.textContent = 'É um palíndromo!';
    } else {
      resultElement.textContent = 'Não é um palíndromo!';
    }
  }
  const checkButton = document.getElementById('checkButton');
  checkButton.addEventListener('click', checkPalindrome);
  
  // Exemplos de uso:
 //console.log(palindrome("Ingrid")); // true
  
