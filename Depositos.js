const user = [{
    email: 'jioh@mail.com',
    monto: 1000,
  }]
  
  const monto = document.querySelector("#monto");
  monto.innerHTML = user[0].monto;
  
  function depositar() {
    event.preventDefault();
    const deposito = document.querySelector("#depositAmount").value;
    user[0].monto += parseInt(deposito);
    monto.innerHTML = user[0].monto;
  }