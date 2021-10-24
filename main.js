
  const textElement = ['Junior Developer', 'Student'];
let count = 0;
let txtIndex = 0;
let current = '';
let words = '';

(function teks() {
  if(count == textElement. 
  length){
    count = 0;
  }
  currentTxt = textElement[count];
  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector('.teks-ubah').textContent = words;
  if(words.length == currentTxt.length){
    count++;
    txtIndex = 0;
  }
  setTimeout(teks, 200);
})();