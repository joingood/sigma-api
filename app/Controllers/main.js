//Export the controllers

const requireController = {
    SingController:         require("./SingControllerClass"),
    HotelController:        require("./HotelControllerClass"),
    RoomTypeController:     require("./RoomTypeControllerClass"),
    BookingController:      require("./BookingControllerClass"),
    AvailBookingController: require("./AvailBookingControllerClass")
}


module.exports = {
    SingController:         new requireController.SingController,
    HotelController:        new requireController.HotelController,
    RoomTypeController:     new requireController.RoomTypeController,
    BookingController:      new requireController.BookingController,
    AvailBookingController: new requireController.AvailBookingController
};