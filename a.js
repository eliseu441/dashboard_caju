(async () => {
const db = require ("./db");
console.log("come");
const saldos = await db.mostrarSaldo();
console.log(saldos);
})();