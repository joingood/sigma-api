
const {Conexion, SchemaClass} = require("../../Modules/main");


class AvailBookingModel extends Conexion{

    /**
    * AvailBooking Model: POST
    * Este action se encarga de crear un nuevo registro
    * @SP: Procedure_AvailBookingChange
    * @Param : Data AS JSON, Room AS JSON
    * END;
    */
    create(data,res){
        super.async({
            res: res,
            fn_params: (sql,pool)=>{

                const FilterQuery = SchemaClass.FilterQuery({
                    NAME_QUERY: "create"
                });

                return pool.request()
                .input('FILTER', sql.VarChar, JSON.stringify(FilterQuery))
                .input('DATA', sql.VarChar, JSON.stringify(data))
                .execute("Procedure_AvailBookingChange");
            },fn_result: (result)=>{
                res.setHeader('Content-Type', 'json/application');
                res.send(result.recordset[0]);
                result = res = null;
            }
        });
    }

    /**
    * AvailBooking Model: PUT
    * Este action se encarga de actualizar un registro/s
    * @SP: Procedure_AvailBookingChange
    * @Param : Data AS JSON, Room AS JSON
    * END;
    */
   update(data,res){
        super.async({
            res: res,
            fn_params: (sql,pool)=>{

                const FilterQuery = SchemaClass.FilterQuery({
                    NAME_QUERY: "update"
                });

                return pool.request()
                .input('FILTER', sql.VarChar, JSON.stringify(FilterQuery))
                .input('DATA', sql.VarChar, JSON.stringify(data))
                .execute("Procedure_AvailBookingChange");
            },fn_result: (result)=>{
                res.setHeader('Content-Type', 'json/application');
                res.send(result.recordset[0]);
                result = res = null;
            }
        });
    }

    /**
    * AvailBooking Model: GET
    * Este action se encarga de recuperar la data
    * @SP: Procedure_AvailBookingQuery
    * @Param : 
    * END;
    */
   list(data,res){
        super.async({
            res: res,
            fn_params: (sql,pool)=>{

                const FilterQuery = SchemaClass.FilterQuery({
                    NAME_QUERY: "list"
                });

                return pool.request()
                .input('FILTER', sql.VarChar, JSON.stringify(FilterQuery))
                .execute("Procedure_AvailBookingQuery");
            },fn_result: (result)=>{
                res.setHeader('Content-Type', 'json/application');
                res.send(result.recordset);
                result = res = null;
            }
        });
    }

    /**
    * AvailBooking Model: GET
    * Este action se encarga de recuperar la data
    * @SP: Procedure_HotelQuery
    * @Param Id AS INT: 
    * END;
    */
    getById(data,res){
        super.async({
            res: res,
            fn_params: (sql,pool)=>{

                const FilterQuery = SchemaClass.FilterQuery({
                    NAME_QUERY: "getById",
                    ToId: data.Id
                });

                return pool.request()
                .input('FILTER', sql.VarChar, JSON.stringify(FilterQuery))
                .execute("Procedure_AvailBookingQuery");
            },fn_result: (result)=>{
                res.setHeader('Content-Type', 'json/application');
                res.send(result.recordset[0]);
                result = res = null;
            }
        });
    }

    /**
    * AvailBooking Model: DELETE
    * Este action se encarga de eliminar o ocultar registro/s
    * @SP: Procedure_AvailBookingChange
    * @Param : DraffBookingId AS INT
    * END;
    */
   delete(data,res){
        super.async({
            res: res,
            fn_params: (sql,pool)=>{

                const FilterQuery = SchemaClass.FilterQuery({
                    NAME_QUERY: "deleteById"
                });

                return pool.request()
                .input('FILTER', sql.VarChar, JSON.stringify(FilterQuery))
                .input('DATA', sql.VarChar, JSON.stringify(data))
                .execute("Procedure_AvailBookingChange");
            },fn_result: (result)=>{
                res.setHeader('Content-Type', 'json/application');
                res.send(result.recordset[0]);
                result = res = null;
            }
        });
    }

}

module.exports = AvailBookingModel;