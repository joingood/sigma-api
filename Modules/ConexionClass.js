const SQL = require("mssql"),
    {ConfigDB} = require("../config.api");


class Conexion{

    async(data){

        new SQL.ConnectionPool(ConfigDB).connect().then(pool => {
            //console.log('Connected to MSSQL');
            return data.fn_params(SQL,pool);
            
        }).then(result => {
            SQL.close();
            typeof data.fn_result != "undefined" && data.fn_result(result); 
            
        }).catch(error => {
            SQL.close();
            data.res.send({error: true, msj: "Ocurrio algun error."});
            //data.res !== null || data.res != undefined && data.res.send({error: true, msj: "Ocurrio algun error con la conexion a la DB."});
            console.error(`Ocurror algun en la conexion. Mas detalles: ${error}`);
        });
    }

}

module.exports = Conexion;