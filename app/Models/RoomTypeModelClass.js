
const {Conexion, SchemaClass} = require("../../Modules/main");


class RoomTypeModel extends Conexion{

    /**
    * RoomTypeModel Model: POST
    * Este action se encarga de crear un nuevo registro
    * @SP: Procedure_RoomTypeChange
    * @Param : Name AS STRING, ImageUrl AS STRING
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
                .execute("Procedure_RoomTypeChange");
            },fn_result: (result)=>{
                res.setHeader('Content-Type', 'json/application');
                res.send(result.recordset);
                result = res = null;
            }
        });
    }

    /**
    * RoomTypeModel Model: PUT
    * Este action se encarga de actualizar un registro/s
    * @SP: Procedure_RoomTypeChange
    * @Param : Id AS INT, Name AS STRING, ImageUrl AS STRING
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
                .execute("Procedure_RoomTypeChange");
            },fn_result: (result)=>{
                res.setHeader('Content-Type', 'json/application');
                res.send(result.recordset);
                result = res = null;
            }
        });
    }

    /**
    * RoomTypeModel Model: GET
    * Este action se encarga de recuperar la data
    * @SP: Procedure_RoomTypeQuery
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
                .execute("Procedure_RoomTypeQuery");
            },fn_result: (result)=>{
                res.setHeader('Content-Type', 'json/application');
                res.send(result.recordset);
                result = res = null;
            }
        });
    }

    /**
    * RoomTypeModel Model: DELETE
    * Este action se encarga de eliminar o ocultar registro/s
    * @SP: Procedure_RoomTypeChange
    * @Param : Id AS INT
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
                .execute("Procedure_RoomTypeChange");
            },fn_result: (result)=>{
                res.setHeader('Content-Type', 'json/application');
                res.send(result.recordset);
                result = res = null;
            }
        });
    }

}

module.exports = RoomTypeModel;