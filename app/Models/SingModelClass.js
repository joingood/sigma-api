
const {Conexion, JWT, Crypto} = require("../../Modules/main");


class SingModel extends Conexion{

    /**
    * Singing Model: POST
    * This model is for...
    * @SP: sp_singin
    * @Param 
    * END;
    */
    singin(res){
        res.send(JWT.encode({}));
    }

    singup(data,res){

        /**
         * Singing Model: POST
         * This model is for...
         * @SP: sp_singin
         * @Param _name_entity , _prefix_entity, _name_user, _surname_user, _user_name_user, _password_user
         * END;
         */
        super.async({
            res,
            stored: `CALL sp_singup('${data.name_entity}','${data.prefix_entity}','${data.name_user}','${data.surname_user}','${data.user_name_user}','${Crypto.hash(data.password_user)}')`
        },{
            ready:(results,fields)=>{
                //console.log(results);
                res.send(results[0][0]);
            }
        });

    }

}

module.exports = SingModel;