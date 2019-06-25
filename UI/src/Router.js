
//
import HomeIndex from "./Views/Home/index.vue";

const BookingView = resolve => {
    require.ensure(["./Views/Booking/index.vue"],()=>{
        resolve(require("./Views/Booking/index.vue"));
    });
}

/**
 * 
 *  Vista de hotel
 * 
 */

//Index View
const HotelIndexView = resolve => {
    require.ensure(["./Views/Hotel/index.vue"],()=>{
        resolve(require("./Views/Hotel/index.vue"));
    });
}
//Create view
const HotelCreateView = resolve => {
    require.ensure(["./Views/Hotel/create.vue"],()=>{
        resolve(require("./Views/Hotel/create.vue"));
    });
}
//Update View
const HotelUpdateView = resolve => {
    require.ensure(["./Views/Hotel/update.vue"],()=>{
        resolve(require("./Views/Hotel/update.vue"));
    });
}

/**
 * 
 *  Vista de tipo de hotel
 * 
 */

//Index View
const RoomTypeIndexView = resolve => {
    require.ensure(["./Views/RoomType/index.vue"],()=>{
        resolve(require("./Views/RoomType/index.vue"));
    });
}
//Create view
const RoomTypeCreateView = resolve => {
    require.ensure(["./Views/RoomType/create.vue"],()=>{
        resolve(require("./Views/RoomType/create.vue"));
    });
}
//Update View
const RoomTypeUpdateView = resolve => {
    require.ensure(["./Views/RoomType/update.vue"],()=>{
        resolve(require("./Views/RoomType/update.vue"));
    });
}

const Router = [
    {path: "/booking", component: BookingView},

    //Rutas para los hoteles
    {path: "/hotel", component: HotelIndexView},
    {path: "/hotel/create", component: HotelCreateView},
    {path: "/hotel/update/:id", component: HotelUpdateView},

    //Rutas para tipo de habitacion
    {path: "/roomType", component: RoomTypeIndexView},
    {path: "/roomType/create", component: RoomTypeCreateView},
    {path: "/roomType/update/:id", component: RoomTypeUpdateView},

    //Otras rutas
    {path: "", component: HomeIndex},
    {path: "/home", component: HomeIndex, name: "home"},
    {path: '*', redirect: "/home"}
];

export default Router