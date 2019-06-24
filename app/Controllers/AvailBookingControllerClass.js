
const {AvailBookingModel} = require("../Models/main");

const {Authentication} = require("../../Modules/main");

class AvailBookingController extends AvailBookingModel{

    //POST
    create(req, res){
        Authentication.isValid({
            res,
            params: req.body,
            rules: {
                Data: "required|string|min:10",
                Room: "required|string|min:10",
                Transfer: "required|string|min:10",
            },
            is: ()=>{
                super.create(req.body,res);
            }
        });
    }

    //PUT
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

    //GET
    list(req, res){
        super.list(null,res);
    }

    //PUT
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

module.exports = AvailBookingController;