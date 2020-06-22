function carregar() {
  var msg = window.document.querySelector(`div#horas`);
  var img = window.document.querySelector(`img#paisagem`);
  var data = new Date();
  var tempo = data.getHours();
  //var tempo =22;
  msg.innerHTML = `Agora são ${tempo} horas.`;
  
  if (tempo >= 0 && tempo < 12) {
      img.src='_imagens/dia.jpg';
      document.body.style.background = '#7cadd8';  
  } else if (tempo >= 12 && tempo <= 18) {
      img.src='_imagens/tarde.jpg';
      document.body.style.background = '#cd6a32'  
  } else {
    img.src='_imagens/noite.jpg';
    document.body.style.background = '#474747';
  
  }
}


