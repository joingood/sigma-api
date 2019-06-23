
const {SingController, HotelController, RoomTypeController, BookingController} = require("./Controllers/main");

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

        /*//Client
        //CREATE: POST
        route.post("/client/create",Authentication.authenticationToken,ClientController.create);
        //UPDATE: PUT
        route.put("/client",Authentication.authenticationToken,ClientController.update);
        //LIST: GET
        route.get("/client/list",Authentication.authenticationToken,ClientController.list);
        //LIST BASIC: GET
        route.get("/client/list/basic",Authentication.authenticationToken,ClientController.list_basic);
        //ONE: GET
        route.get("/client/one",Authentication.authenticationToken,ClientController.one);
        //ONE BASIC: GET
        route.get("/client/one/basic",Authentication.authenticationToken,ClientController.one_basic);
        //account/create: POST
        route.post("/client/account/create",Authentication.authenticationToken,ClientController.create_account);
        //account/list: GET
        route.get("/client/account/list",Authentication.authenticationToken,ClientController.list_account);
        //account/list: GET
        route.patch("/client/account/status",Authentication.authenticationToken,ClientController.update_status_account);

        //Schedule
        //CREATE: POST
        route.post("/schedule/create",Authentication.authenticationToken,ManagerFileMiddleware(),ScheduleController.create);
        //List: GET
        route.get("/schedule/list",Authentication.authenticationToken,ScheduleController.list);
        //Delete: delete
        route.delete("/schedule/delete",Authentication.authenticationToken,ScheduleController.delete);
        //One: Get
        route.get("/schedule/one",Authentication.authenticationToken,ScheduleController.one);
        //Update: Put
        route.put("/schedule/update",Authentication.authenticationToken,ManagerFileMiddleware(),ScheduleController.update);*/

    }

}

module.exports  =  Router;