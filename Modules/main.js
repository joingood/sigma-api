//Export the controllers


const requireController = {
    Authentication:         require("./AuthenticationClass"),
    Conexion:               require("./ConexionClass"),
    JWT:                    require("./jsonwtClass"),
    SchemaClass:            require("./SchemaClass")
}


module.exports = {
    Authentication:     new requireController.Authentication,
    Conexion:           requireController.Conexion,
    JWT:                new requireController.JWT,
    SchemaClass:        requireController.SchemaClass
};