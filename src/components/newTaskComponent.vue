<template>
    <div>
        <input  type="text" id="task-description" v-model="taskDescription" v-on:keyup.enter="$emit('addTaskEvent',taskDescription)">
        <button v-on:click="$emit('addTaskEvent',taskDescription),taskDescription = ' '">Add task</button>
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

<style scoped>

</style>