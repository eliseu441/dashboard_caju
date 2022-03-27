
    async function connect(){
        const mysql = require("mysql");
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "caju"
        });
        console.log("conectou no mysql");
        global.connection = connection;
        return connection;
    }
    connect();

    async function mostrarSaldo(){
        const connection = await connect();
        var sql = "SELECT * FROM pessoas";
        return await connection.query(sql, (err, result)=> {
            if (err) throw err;
            console.log(result[0].refeicao)
        });
    }
    module.exports = mostrarSaldo