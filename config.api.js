
module.exports  = {

    ConfigDB: {
        user: 'sa',
        password: '123456789',
        server: '127.0.0.1',
        database: 'sigma',
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            encrypt: false // Use this if you're on Windows Azure
        }
    },
    Server:{
        port: 3000
    },
    jwtoken: {
        SECRET_KEY: "aDkas36sdlweSRjsdEFDSF",
        KEY_PUBLIC: "ashjhSEDsdger435sdfSDRFHDED4534fdsf",
        VERSION: 1.0
    },
    Crypto: {
        SECRET_KEY: "asdjDasdRFSjkasAdfs36asdf4",
        Algorithm: "aes-256-ctr"
    }

}