//Export the controllers

const requireController = {
    SingController:         require("./SingControllerClass"),
    HotelController:        require("./HotelControllerClass"),
    RoomTypeController:     require("./RoomTypeControllerClass")
}


module.exports = {
    SingController:     new requireController.SingController,
    HotelController:    new requireController.HotelController,
    RoomTypeController: new requireController.RoomTypeController
};