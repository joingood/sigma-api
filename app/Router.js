
const {SingController, HotelController, RoomTypeController, BookingController, AvailBookingController} = require("./Controllers/main");

class Router{

    constructor(route){

        //Access
        //SINGIN: POST
        route.post("/sing/in",SingController.singin);
        //SINGUP: POST
        route.post("/sing/up",SingController.singup);

        //Hotel
        //CREATE: POST
        route.post("/hotel/create",HotelController.create);
        //UPDATE: PUT
        route.put("/hotel/update",HotelController.update);
        //LIST BASIC: GET
        route.get("/hotel/list",HotelController.list);
        //Delete: delete
        route.delete("/hotel/delete",HotelController.delete);

        //RoomType
        //CREATE: POST
        route.post("/roomType/create",RoomTypeController.create);
        //UPDATE: PUT
        route.put("/roomType/update",RoomTypeController.update);
        //LIST BASIC: GET
        route.get("/roomType/list",RoomTypeController.list);
        //Delete: delete
        route.delete("/roomType/delete",RoomTypeController.delete);

        //Booking
        //CREATE: POST
        route.post("/booking/create",BookingController.create);
        //UPDATE: PUT
        route.put("/booking/update",BookingController.update);
        //LIST BASIC: GET
        route.get("/booking/list",BookingController.list);
        //Delete: delete
        route.delete("/booking/delete",BookingController.delete);

        //AvailBooking
        //CREATE: POST
        route.post("/availBooking/create",AvailBookingController.create);
        //UPDATE: PUT
        route.put("/availBooking/update",AvailBookingController.update);
        //LIST BASIC: GET
        route.get("/availBooking/list",AvailBookingController.list);
        //Delete: delete
        route.delete("/availBooking/delete",AvailBookingController.delete);
    }

}

module.exports  =  Router;