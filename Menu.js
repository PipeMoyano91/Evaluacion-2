const user = JSON.parse(localStorage.getItem("user"));


function menuItem() {
  const email = document.querySelector("#email");
  const saldo = document.querySelector("#saldo");
  email.innerHTML = user[0].email;
  saldo.innerHTML = user[0].saldo;
}
