function media() {
  var primeiraNota = parseFloat(document.getElementById("primeiraNota").value);
  var segundaNota = parseFloat(document.getElementById("segundaNota").value);
  var terceiraNota = parseFloat(document.getElementById("terceiraNota").value);
  var quartaNota = parseFloat(document.getElementById("quartaNota").value);

  
  var media = (primeiraNota +segundaNota + terceiraNota + quartaNota)/4;
  
 
    if (media>=6)
      if(media==10)
      alert("Parabéns! Você obteve a nota máxima! " + media.toFixed(1));
  else
    alert("Aprovado! Sua nota final foi " + media.toFixed(1));
  if (media<6)
    alert("Infelizmente você não obteve nota suficiente para passar, sua nota final foi " + media.toFixed(1));
  
}

 // Revisão
// variáveis, string, console.log, toFixed, operações matemáticas, concatenação