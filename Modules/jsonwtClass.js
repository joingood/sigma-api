const jwt    = require('jwt-simple'),
      moment = require('moment'),
      {jwtoken} = require('../config.api');

      /**
       * 
       * Clase que se encarga de manejar json token
       * 
       */

class jsonwt{
    //Codificando la data
    encode(data){
        return jwt.encode({
            data,
            meta: {
                created: new Date(),
                version: jwtoken.VERSION,
                key: jwtoken.KEY_PUBLIC,
                iat: moment().unix(),
                exp: moment().add(600, "days").unix()
            }
          }, jwtoken.SECRET_KEY);
    }
    //Descodificando la data
    decode(token){
        return jwt.decode(token, jwtoken.SECRET_KEY);
    }

}

module.exports = jsonwt;