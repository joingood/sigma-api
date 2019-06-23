
const {SingModel} = require("../Models/main");

const {Authentication} = require("../../Modules/main");

class SingController extends SingModel{

    //POST
    singin(req, res){
        super.singin(res);
    }

    //POST
    singup(req, res){
        Authentication.isValid({
            res,
            params: req.body,
            rules: {
                name_entity: "required|string|min:5",
                prefix_entity: "required|string|min:3",
                name_user: "required|string|min:5",
                surname_user: "required|string|min:4",
                user_name_user: "required|string|min:5",
                password_user: "required|string|min:5",
            },
            is: ()=>{
                super.singup(req.body,res);
            }
        })
        
    }


}

module.exports = SingController;