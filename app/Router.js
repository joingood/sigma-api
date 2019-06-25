
const {SingController, HotelController, RoomTypeController, BookingController, AvailBookingController} = require("./Controllers/main");
/**
 * 
 * Esta clase define todas las rutas de accesos de la api
 * Methodos: Post, Put, Delete, Get
 */
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
        //GETBYID : GET
        route.get("/hotel/getById",HotelController.getById);

        //RoomType
        //CREATE: POST
        route.post("/roomType/create",RoomTypeController.create);
        //UPDATE: PUT
        route.put("/roomType/update",RoomTypeController.update);
        //LIST BASIC: GET
        route.get("/roomType/list",RoomTypeController.list);
        //Delete: delete
        route.delete("/roomType/delete",RoomTypeController.delete);
        //GETBYID : GET
        route.get("/roomType/getById",RoomTypeController.getById);

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