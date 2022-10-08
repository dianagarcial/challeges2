<template>
    <div>
        <button
            @click="$emit('childMethod', 'Hello Word')"
        > Send to Parent</button>

        <button
            @click="$emit('childMethod2')"
        > Send to Parent2</button>
            
                </div>
</template>
<script>
    export default{
        methods:{
            sendToParent(){
                this.$emit('childMethod', 'Hello World')
            }
        }

    }
</script>