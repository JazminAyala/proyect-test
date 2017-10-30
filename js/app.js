function fillArray(asciiCode){
  var alphabetArray=[];
  for(var i=0 ; i<26; i++){
    var letter =String.fromCharCode(i+asciiCode);
    alphabetArray.push(letter);
  }
  return alphabetArray;
  
}

var option = prompt('Mayusculas o minuscula').toLowerCase();

if (option=== 'mayusculas'){
  var upperCaseAlphabet = fillArray(65);
  console.log(upperCaseAlphabet);
  
  
}else if (option === 'minusculas'){
    var lowerCaseAlphabet=fillArray(97);
    console.log(lowerCaseAlphabet);
    
  }else{
    console.log("ingresa una opciòn valida");
  }