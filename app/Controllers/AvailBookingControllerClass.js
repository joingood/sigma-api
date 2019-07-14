
const {AvailBookingModel} = require("../Models/main");

const {Authentication} = require("../../Modules/main");

class AvailBookingController extends AvailBookingModel{


    /**
    * METOD: POST
    * Este action se encarga de crear un nuevo registro
    * Ruta: /availBooking/create
    * @Param : Data AS JSON, Room AS JSON
    * END;
    */
    create(req, res){
        //console.log(req.body);
        Authentication.isValid({
            res,
            params: req.body,
            rules: {
                Data: "required",
                Room: "required"
            },
            is: ()=>{
                super.create(req.body,res);
            }
        });
    }

    /**
    * METOD: PUT
    * Este action se encarga de actualizar un registro/s
    * Ruta: /availBooking/update
    * @Param : Data AS JSON, Room AS JSON
    * END;
    */
    update(req, res){
        Authentication.isValid({
            res,
            params: req.body,
            rules: {
                Data: "required",
                Room: "required"
            },
            is: ()=>{
                super.update(req.body,res);
            }
        });
    }

    /**
    * METOD: GET
    * Este action se encarga de recuperar la data
    * Ruta: /availBooking/list
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
    * Ruta: /availBooking/delete
    * @Param : DraffBookingId AS INT
    * END;
    */
    delete(req, res){
        Authentication.isValid({
            res,
            params: req.query,
            rules: {
                DraffBookingId: "required|integer|min:1"
            },
            is: ()=>{
                super.delete(req.query,res);
            }
        });
    }

}

module.exports = AvailBookingController;