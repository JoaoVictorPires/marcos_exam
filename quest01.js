function mensagem(mens) {
    console.log(mens);
  }
  
  function printa(callBack, mensagens) {
    callBack(mensagens);
  }
  
  const message = 'Kyle';
  printa(printMessage, message);