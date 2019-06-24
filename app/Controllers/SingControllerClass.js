
const {SingModel} = require("../Models/main");

const {Authentication} = require("../../Modules/main");

class SingController extends SingModel{

    /**
    * METOD: POST
    * Este action se encarga de crear un nuevo registro
    * Ruta: /sing/in
    * @Param : 
    * END;
    */
    singin(req, res){
        super.singin(res);
    }

    /**
    * METOD: POST
    * Este action se encarga de crear un nuevo registro
    * Ruta: /sing/up
    * @Param : 
    * END;
    */
    singup(req, res){
        super.singup(req.body,res);
    }


}

module.exports = SingController;