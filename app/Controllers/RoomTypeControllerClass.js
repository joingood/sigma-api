
const {RoomTypeModel} = require("../Models/main");

const {Authentication} = require("../../Modules/main");

class RoomTypeController extends RoomTypeModel{

    /**
    * METOD: POST
    * Este action se encarga de crear un nuevo registro
    * Ruta: /roomType/create
    * @Param : Name AS STRING, ImageUrl AS STRING
    * END;
    */
    create(req, res){
        Authentication.isValid({
            res,
            params: req.body,
            rules: {
                Name: "required|string|min:3|max:50",
                ImageUrl: "required|string|min:0|max:250"
            },
            is: ()=>{
                super.create(req.body,res);
            }
        });
    }

    /**
    * METOD: PUT
    * Este action se encarga de actualizar un registro/s
    * Ruta: /roomType/update
    * @Param : Id AS INT, Name AS STRING, ImageUrl AS STRING
    * END;
    */
    update(req, res){
        Authentication.isValid({
            res,
            params: req.body,
            rules: {
                Id: "required|integer|min:1",
                Name: "required|string|min:3|max:50",
                ImageUrl: "required|string|min:0|max:250"
            },
            is: ()=>{
                super.update(req.body,res);
            }
        });
    }

    /**
    * METOD: GET
    * Este action se encarga de recuperar la data
    * Ruta: /roomType/list
    * @Param : 
    * END;
    */
    list(req, res){
        super.list(null,res);
    }

    /**
    * METOD: DELETE
    * Este action se encarga de eliminar o ocultar registro/s
    * Ruta: /roomType/delete
    * @Param : Id AS INT
    * END;
    */
    delete(req, res){
        Authentication.isValid({
            res,
            params: req.body,
            rules: {
                Id: "required|integer|min:1"
            },
            is: ()=>{
                super.delete(req.body,res);
            }
        });
    }

}

module.exports = RoomTypeController;