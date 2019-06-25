<template>
    
    <div class="row container"> 

        <div class="col s12">
            <h5>CREAR</h5>
        </div>

        <form class="col card s12">

            <div class="row">
                <div class="input-field col s12">
                <input v-model="form.Name" id="name" type="text" class="validate">
                <label for="name">Nombre</label>
                </div>

                <div class="col s12">
                    <a @click="save()" :disabled="form.Name.length < 3" class="waves-effect waves-light btn">CREAR</a>
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
                Name: "",
                ImageUrl: "null"
            }
        }
    },

    methods: {

        save(){
            //Creando nuevo registro
            this.$http.post(window.__sigma.URL_REQUEST("hotel/create"), this.form)
            .then(response=>{
                //console.log( response.body );
                if(response.body.Error == 0){
                    M.toast({html: 'El hotel se creo exitosamente!'}); //mostrando un mensaje de exito
                    setTimeout(()=>{
                        //this.search(); // Refrezcando la data en 1s
                        window.location.href = "#/hotel"
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
