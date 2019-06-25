
const {HotelModel} = require("../Models/main");

const {Authentication} = require("../../Modules/main");

class HotelController extends HotelModel{

    /**
    * METOD: POST
    * Este action se encarga de crear un nuevo registro
    * Ruta: /hotel/create
    * @Param : NAME AS STRING, ImageUrl AS STRING
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
    * Ruta: /hotel/update
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
    * Ruta: /hotel/list
    * @Param : 
    * END;
    */
    list(req, res){
        super.list(null,res);
    }

    /**
    * METOD: GET
    * Este action se encarga una data expecifica
    * Ruta: /hotel/getById
    * @Param Id AS INT: 
    * END;
    */
    getById(req, res){

        Authentication.isValid({
            res,
            params: req.query,
            rules: {
                Id: "required|integer|min:1"
            },
            is: ()=>{
                super.getById(req.query,res);
            }
        });

        
    }

    /**
    * METOD: DELETE
    * Este action se encarga de eliminar o ocultar registro/s
    * Ruta: /hotel/delete
    * @Param : Id AS INT
    * END;
    */
    delete(req, res){

        Authentication.isValid({
            res,
            params: req.query,
            rules: {
                Id: "required|integer|min:1"
            },
            is: ()=>{
                super.delete(req.query,res);
            }
        });
    }

}

module.exports = HotelController;