function rot13(message){
  return message.split('').map(char=> {
    let asciiCode = char.charCodeAt(0);
    if(asciiCode >=97 && asciiCode <=122){
      asciiCode = (asciiCode - 97 + 13) % 26 +97;
    } else if (asciiCode >= 65 && asciiCode <=90){
      aciiCode = (asciiCode - 65 + 13) % 26 +65;
    }
    return String.fromCharCode(asciiCode);
  }).join('');
}

rot13("Test");
