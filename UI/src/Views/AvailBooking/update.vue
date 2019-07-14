<template>
    
    <div class="row container"> 

        <div class="col s12">
            <h5>ACTUALIZACION</h5>
        </div>

        <form class="col card s12">

            <div class="row" style="padding: 10px;">
                <div class="input-field col s6">
                    <input v-model="form.Since" id="Since" type="date" class="validate">
                    <label for="Since">Desde</label>
                </div>
                <div class="input-field col s6">
                    <input v-model="form.Until" id="Since" type="date" class="validate">
                    <label for="Since">Hasta</label>
                </div>

                <div class="input-field col s12">
                    <input v-model="form.Adults" id="Adults" type="number" class="validate">
                    <label for="Adults">Cantidad de Adultos</label>
                </div>

                <div class="input-field col s12">
                    <input v-model="form.Children" id="Children" type="number" class="validate">
                    <label for="Children">Cantidad de Niños</label>
                </div>


                <div class="col s12">
                    <a @click="save()"  class="waves-effect waves-light btn">Actualizar</a>
                </div>
            </div>
      
        </form>    
        
     </div>

</template>

<script>
export default {

    data(){
        return {
            form: {
                Id: this.$route.params.id,
                Since: "",
                Until: "",
                Adults: "",
                Children: ""
            }
        }
    },

    methods: {

        save(){
            //Actualizando los datos
            this.$http.put(window.__sigma.URL_REQUEST("availBooking/update"), {Data: this.form, Room: this.form})
            .then(response=>{
                //console.log( response.body );
                if(response.body.Error == 0){
                    M.toast({html: 'El hotel se actualizo exitosamente!'}); //mostrando un mensaje de exito
                    setTimeout(()=>{
                        window.location.href = "#/availBooking"
                    },1000);
                    return;
                }
                this.process = false;
                M.toast({html: 'Ops! Ocurrio algun error al intentar actualizo el registro'});
            });

        }

    },
    created(){

        this.$http.get(window.__sigma.URL_REQUEST("availBooking/getById"), {params: {Id: this.form.Id}})
        .then(response=>{
            this.form = response.body;
            this.form.Id = this.form.Id;
        });

    }

}
</script>

<style>

</style>
