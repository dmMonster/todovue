<template>
    <div v-on:click.self="$parent.modalVisible = false" class="modal-edit-task">
        <div class="modal-content">
            <input v-model="taskDescription" type="text">
            <button v-on:click="$emit('editTaskEvent',id,taskDescription)">Save</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditTaskComponent",
        data(){
            return{
                taskDescription: ''
            }
        },
        props: {
            id: Number,
        },
    }
</script>

<style scoped lang="scss">
    .modal-edit-task{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 9999;
        background-color: rgba(0,0,0,0.9);
    }
    .modal-content{
        position: absolute;
        top: 50%;
        left: 38%;
        padding: 20px;
        input{
            border: none;
            border-bottom: 1px solid black;
            margin: 2px;
            height: 2vw;
            width: 20vw;
            border-radius: 3px;
        }
        button{
            background-color: #0095f1;
            color: white;
            padding: 2px 5px;
            box-shadow: 2px 2px 2px 2px gray;
            border: none;
            font-weight: 600;
            height: 2vw;
            width: 6vw;
            border-radius: 3px;
            margin: 4px;
        }
    }
</style>