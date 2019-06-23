const jwt    = require('jwt-simple'),
      moment = require('moment'),
      {jwtoken} = require('../config.api');

class jsonwt{

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

    decode(token){
        return jwt.decode(token, jwtoken.SECRET_KEY);
    }

}

module.exports = jsonwt;