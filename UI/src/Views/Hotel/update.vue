<template>
    
    <div class="row container"> 

        <div class="col s12">
            <h5>ACTUALIZACION</h5>
        </div>

        <form class="col card s12">

            <div class="row">
                <div class="input-field col s12">
                <input v-model="form.Name" id="name" type="text" class="validate">
                <label for="name">Nombre</label>
                </div>

                <div class="col s12">
                    <a @click="save()" :disabled="form.Name.length < 3" class="waves-effect waves-light btn">Actualizar</a>
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
                Name: "",
                ImageUrl: "null"
            }
        }
    },

    methods: {

        save(){
            //Actualizando los datos
            this.$http.put(window.__sigma.URL_REQUEST("hotel/update"), this.form)
            .then(response=>{
                //console.log( response.body );
                if(response.body.Error == 0){
                    M.toast({html: 'El hotel se actualizo exitosamente!'}); //mostrando un mensaje de exito
                    setTimeout(()=>{
                        window.location.href = "#/hotel"
                    },1000);
                    return;
                }
                this.process = false;
                M.toast({html: 'Ops! Ocurrio algun error al intentar actualizo el registro'});
            });

        }

    },
    created(){

        this.$http.get(window.__sigma.URL_REQUEST("hotel/getById"), {params: {Id: this.form.Id}})
        .then(response=>{
            this.form.Name = response.body.Name;
        });

    }

}
</script>

<style>

</style>
