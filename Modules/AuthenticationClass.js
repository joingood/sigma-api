
const jsonwt = require('./jsonwtClass'),
      {jwtoken} = require('../config.api'),
      JWT = new jsonwt,
      validator = require("Validator");

      /**
       * 
       *    Esta clase se encarga de manejar toda la autenticacion y validaciones de la api
       * 
       */
class Authentication{

    //Autenticador de token para login y acceso a la api
    authenticationToken(req, res, next){

        const header = req.headers;
        //console.log(req);

        if(typeof header.authorization == "undefined")
        return res.send({Error: true, Msj: "Error! Autorizacion no encontrada.", Code: "0xEEAUT"});

        try {

            const data = JWT.decode(header.authorization);

            if(data.meta.key !== jwtoken.KEY_PUBLIC){
                return res.send({Error: true, Msj: "Error! Token rebocado.", Code: "0xEETCTKR"});
            }
            
        } catch (error) {
            return res.send({Error: true, Msj: "Error! Token invalido.", Code: "0xEETCTKI"});
        }
        
        //console.log("Autenticacion exitosa", );
        req.headers.decodeJWT = JWT.decode(header.authorization).data;
        next();
    }

    //Validador de datos tipo json
    isValid(data){

        let validated = validator.make(data.params,data.rules);

        try {

            if(!validated.fails()){
                data.is();
                return;
            }
            console.log("<-Error");
            data.res.send({Error: true,Code: "0xEEVALDR", Msj: "Error en la validacion!", Details: validated.errors});
        } catch (error) {
            console.log(error);
            console.log("<-Error: validacion try catch");
            data.res.send({Error: true,Code: "0xEETRYCH", Msj: "Error en la validacion!"});
        }
        validated = null;

    }

}

module.exports = Authentication;