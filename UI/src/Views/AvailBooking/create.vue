<template>
    
    <div class="row container"> 

        <div class="col s12">
            <h5>CREAR</h5>
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
                    <a @click="save()" :disabled="form.Until.length < 1 || form.Since.length < 1 || form.Adults.length < 1 || form.Children.length < 1" class="waves-effect waves-light btn">CREAR</a>
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
                Since: "",
                Until: "",
                Adults: "",
                Children: ""
            }
        }
    },

    methods: {

        save(){
            //Creando nuevo registro
            this.$http.post(window.__sigma.URL_REQUEST("availBooking/create"), {Data: this.form, Room: this.form})
            .then(response=>{
                //console.log( response.body );
                if(response.body.Error == 0){
                    M.toast({html: 'El registro se creo exitosamente!'}); //mostrando un mensaje de exito
                    setTimeout(()=>{
                        //this.search(); // Refrezcando la data en 1s
                        window.location.href = "#/availBooking"
                    },1000);
                    return;
                }
                this.process = false;
                M.toast({html: 'Ops! Ocurrio algun error al intentar crear el registro'});
            });

        }

    }
    
}
</script>

<style>

</style>
