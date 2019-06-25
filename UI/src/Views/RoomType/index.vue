<template>
    <div class="row container"> 

        <div class="col s12">
            <a class="waves-effect waves-light btn" href="#/roomType/create">Nuevo Registro</a>
        </div>

        <div class="col card s12">
            <!-- Table para mostrar los datos -->
            <table class=" highlight centered responsive-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Creacion</th>
                    <th>---</th>
                </tr>
                </thead>

                <tbody  >
                    <tr v-for="(data,i) in dataTable" :key="data.Code" >
                        <td>{{i+1}}</td>
                        <td>{{data.Code}}</td>
                        <td>{{data.Name}}</td>
                        <td>{{data.CreatedAt}}</td>
                        <td>
                            <a :disabled="process" class="btn-floating btn-large waves-effect waves-light red" @click="del(data.Id)"><i class="material-icons">delete</i></a>
                            <router-link :disabled="process"  class="btn-floating btn-large waves-effect waves-light blue"  :to="{ path: 'roomType/update/'+ data.Id}"><i class="material-icons">update</i></router-link>
                        </td>
                    </tr>

                    <tr v-show="dataTable.length == 0">
                        <td colspan="5"> No existen registros </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
export default {

    data(){

        return {
            dataTable: [],
            process: false
        }
    },

    methods: {
        del(Id){
            this.process = true;
            this.$http.delete(window.__sigma.URL_REQUEST("roomType/delete"), { params: {Id},  Id})
            .then(response=>{
                //console.log( response.body );
                if(response.body.Error == 0){
                    M.toast({html: 'El tipo de hotel se elimino exitosamente!'}); //mostrando un mensaje de exito
                    setTimeout(()=>{
                        this.search(); // Refrezcando la data en 1s
                    },1000);
                    return;
                }
                this.process = false;
                M.toast({html: 'Ops! Ocurrio algun error al intentar eliminar el registro'});
            });
        },
        search(){

            this.dataTable = []; //Limpiando la data
            this.$http.get(window.__sigma.URL_REQUEST("roomType/list"))
            .then(response=>{
                this.process = false;
                this.dataTable = response.body; //pasando la data a la variable dataTable
            });
        }
    },

    created(){
        
        //Cargando los datos en el momento de que cargue la vista
        this.search();

    }

}
</script>

<style>

</style>
