<template>
    <div>
        <input  type="text" id="task-description" v-model="taskDescription" v-on:keyup.enter="$emit('addTaskEvent',taskDescription),taskDescription = ' '">
        <button class="btn-add" v-on:click="$emit('addTaskEvent',taskDescription),taskDescription = ' '">Add task</button>
    </div>
</template>

<script>
    export default {
        name: "newTaskComponent",
        data(){
            return {
                taskDescription: ''
            };
        }
    }
</script>

<style scoped lang="scss">

    input{
        border: none;
        border-bottom: 1px solid black;
        margin: 2px;
        height: 2vw;
        width: 20vw;
        border-radius: 3px;
    }

    input:focus{
        background-color: lightgray;
        border: none;
        box-shadow: 2px 2px 2px 1px gray;
    }
    .btn-add{
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
</style>