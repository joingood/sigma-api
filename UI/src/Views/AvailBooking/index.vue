<template>
    <div class="row container"> 

        <div class="col s12">
            <a class="waves-effect waves-light btn" href="#/availBooking/create">Nuevo Registro</a>
        </div>

        <div class="col card s12">
            <!-- Table para mostrar los datos -->
            <table class=" highlight centered responsive-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Desde</th>
                    <th>Hasta</th>
                    <th>Noche/s</th>
                    <th>Adultos</th>
                    <th>Niños</th>
                    <th>---</th>
                </tr>
                </thead>

                <tbody  >
                    <tr v-for="(data,i) in dataTable" :key="data.DraffBookingId" >
                        <td>{{i+1}}</td>
                        <td>{{data.Since}}</td>
                        <td>{{data.Until}}</td>
                        <td>{{data.Nights}}</td>
                        <td>{{data.Adults}}</td>
                        <td>{{data.Children}}</td>
                        <td>
                            <a :disabled="process" class="btn-floating btn-large waves-effect waves-light red" @click="del(data.DraffBookingId)"><i class="material-icons">delete</i></a>
                            <router-link :disabled="process"  class="btn-floating btn-large waves-effect waves-light blue"  :to="{ path: 'availBooking/update/'+ data.DraffBookingId}"><i class="material-icons">update</i></router-link>
                        </td>
                    </tr>

                    <tr v-show="dataTable.length == 0">
                        <td colspan="6"> No existen registros </td>
                        
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
        del(DraffBookingId){
            this.process = true;
            this.$http.delete(window.__sigma.URL_REQUEST("availBooking/delete"), { params: {DraffBookingId},  DraffBookingId})
            .then(response=>{
                //console.log( response.body );
                if(response.body.Error == 0){
                    M.toast({html: 'El registro se elimino exitosamente!'}); //mostrando un mensaje de exito
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
            this.$http.get(window.__sigma.URL_REQUEST("availBooking/list"))
            .then(response=>{
                //console.log(response.body);
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
