let users = [];


function signIn(event) {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  users.push({email, password, saldo: 0});
  console.log(users);
}

function login() {
  event.preventDefault();
  const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
  let user;
  for(let i = 0; i < users.length; i++) {
    if(users[i].email == email && users[i].password == password) {
      user = users[i];
    }
  }
  if(user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.replace('./Menu.html');
  }
  console.log(user);
}