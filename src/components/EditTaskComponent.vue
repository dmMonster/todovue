<template>
    <div class="edit-task-modal">
        <input v-model="taskDescription" type="text">
        <button v-on:click="$emit('editTaskEvent',id,taskDescription), taskDescription = 'dwadwa'">Save</button>
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
        }
    }
</script>

<style scoped>
    .edit-task-modal{
        position: fixed;
        right: 50%;
        top: 20%;
    }
</style>