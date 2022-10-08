<template>
    <div>
    <h1>About {{name}}</h1>
    <button @click="onChangeName()">Cambiar nombre</button>
</div>
</template>
<script>
    export default{
        data(){
            return {
                name:'Diana'
            }
        },
        methods:{
            onChangeName(){
                console.log('Se cambio el nombre')
                this.name='DGarcia'
            }
        },
        beforeCreate()      {console.log('beforeCreate')},
        created()           {console.log('created')},
        beforeMount()       {console.log('beforeMount')},
        mounted()           {console.log('mounted')},
        beforeUpdate()      {console.log('beforeUpdate')},
        updated()           {console.log('updated')},
        activated()         {console.log('activated')},
        deactivated()       {console.log('deactivated')}
        
    }
</script>
