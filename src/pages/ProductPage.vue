<template>
    <div>
        <h1>Product Page {{id}}</h1>
    </div>
</template>
<script>
    export default{
        props:{
            id:{
                    type: Number,
                    required: true
                } 
        },
        data(){
            return{
                pokemon: null
                
            }
        },
        methods:{
            async getPokemonId(){
                try{
                    const api= await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}/`)
                    const data = await api.json()
                    this.pokemon=data;
                } catch(error){
                    this.$router.push('/')
                }
            }
        },
        created(){
            this.getPokemonId()
        }
    }
</script>