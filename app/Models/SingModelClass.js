
const {Conexion, JWT, Crypto} = require("../../Modules/main");


class SingModel extends Conexion{

    /**
    * SingModel Model: POST
    * Este action se encarga de retornar token login
    * @SP: 
    * @Param : 
    * END;
    */
    singin(res){
        res.send(JWT.encode({}));
    }

    singup(data,res){

        

    }

}

module.exports = SingModel;