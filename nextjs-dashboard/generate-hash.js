const bcrypt = require('bcrypt');

// La contraseña que quieres usar
const password = '123456';

console.log(`Generando un nuevo hash para la contraseña: "${password}"`);

// El 10 indica la "fuerza" del hasheo. 10 es el estándar.
bcrypt.hash(password, 10, function(err, hash) {
    if (err) {
        console.error("Error al generar el hash:", err);
        return;
    }
    console.log("");
    console.log("¡Hash generado con éxito! Cópialo completo (incluyendo los símbolos $):");
    console.log(hash);
});
