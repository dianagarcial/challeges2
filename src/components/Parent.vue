<template>
    <div>
       <Child
        @childMethod='checkData($event)'
        @childMethod2='checkData($event)'
        />
    </div>
</template>
<script>
    import Child from "./Child.vue";
export default{
    components:{
        Child
    },
    methods:{
        checkData(data){
            console.log(data)
        }
    }
}
</script>