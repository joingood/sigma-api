
const {Conexion, SchemaClass} = require("../../Modules/main");


class RoomTypeModel extends Conexion{

    /**
    * Singing Model: POST
    * This model is for...
    * @SP: sp_singin
    * @Param 
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
    * Singing Model: POST
    * This model is for...
    * @SP: sp_singin
    * @Param 
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
    * Singing Model: POST
    * This model is for...
    * @SP: sp_singin
    * @Param 
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
    * Singing Model: POST
    * This model is for...
    * @SP: sp_singin
    * @Param 
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