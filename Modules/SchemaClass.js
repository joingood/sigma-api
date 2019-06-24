
/**
 * 
 * Esta clase se encarga de tener esquema de datos para tener una estructura centralizada
 * 
 */
class SchemaClass {

    //Esquema del FilterQuery 
    static FilterQuery (_obj){

        const __RemplaceData = new this();
        return new this().__RemplaceData({
            NAME_QUERY: null
        },_obj);
    }

    //Funcion para rempla
    __RemplaceData(_objRemp, _objData){

        //Si es esquema de datos esta vacio
        if(typeof _objData != "object"){
            return _objRemp;
        }

        try{
            //Recorriendo el objeto donde se sacaran los datos para remplazarlo al esquema predefinido
            for (const propData in _objData) {
                //Recorriendo el esquema predefinido
                for(const propRemp in _objRemp){
                    //si la propiedad del esquema de datos existe en el esquema predefinido, entonces remplazar el dato
                    if(propRemp == propData){
                        _objRemp[propData] = _objData[propData];
                    }
                }
                
            }

        }finally{
            //retornando los datos con el esquema lleno
            return _objRemp;
        }
    }

}

module.exports = SchemaClass;