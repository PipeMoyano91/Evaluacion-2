const contactos = [];

function agregarContacto() {
    const nombre = document.querySelector('#nombre').value;
    const cuenta = document.querySelector('#cuenta').value;
    const alias = document.querySelector('#alias').value;
    const banco = document.querySelector('#banco').value;
    contactos.push({ nombre, cuenta, alias, banco });
    console.log(contactos);
    mostrarContactos();

    // Envío de dinero después de agregar el contacto
    enviarDinero(nombre);
}

function mostrarContactos() {
    const lista = document.querySelector('#contactList');
    lista.innerHTML = '';
    for (let i = 0; i < contactos.length; i++) {
        lista.innerHTML += `
            <li class="list-group-item">
                <div class="contact-info">
                    <span class="contact-name">${contactos[i].nombre}</span>
                    <span class="contact-details">
                        CBU: ${contactos[i].cuenta}, Alias: ${contactos[i].alias}, Banco: ${contactos[i].banco}
                    </span>
                </div>
            </li>
        `;
    }
}

function enviarDinero(nombre) {
    console.log(`Enviando dinero a ${nombre}...`);
    setTimeout(() => {
        console.log(`Dinero enviado a ${nombre}.`);
        // Mostrar mensaje de éxito
        alert(`Dinero enviado a ${nombre}.`);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sendMoneyForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const nombre = document.getElementById('nombre').value;
        const cuenta = document.getElementById('cuenta').value;
        const alias = document.getElementById('alias').value;
        const banco = document.getElementById('banco').value;

        // Envío de dinero manualmente
        enviarDinero(nombre);

        // Limpiar los campos de entrada después de la transacción
        document.getElementById('nombre').value = '';
        document.getElementById('cuenta').value = '';
        document.getElementById('alias').value = '';
        document.getElementById('banco').value = '';
    });

    document.getElementById('addContactBtn').addEventListener('click', function () {
        // Lógica para agregar un contacto
        agregarContacto();
    });
});
