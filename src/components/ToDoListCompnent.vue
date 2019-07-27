<template>
    <div>
        <new-task-component v-on:addTaskEvent="addTask" />
        <ul v-for="task in tasks">
            <li>{{task.description}}<button v-on:click="deleteTask(task.id)">Delete</button></li>
        </ul>
    </div>
</template>

<script>
    import NewTaskComponent from "@/components/newTaskComponent";
    export default {
        name: "ToDoListCompnent",
        components: {NewTaskComponent},
        data(){
            return {
                tasks: [
                    {"id":1,"description":"first"},
                    {"id":2,"description":"second"},
                    {"id":3,"description":"third"},
                    {"id":4,"description":"fourth"}
                ]
            }
        },
        methods:{
            addTask: function(description){
                this.tasks.push({"id":0,"description":description});
            },
            deleteTask: function (id) {
                this.tasks = this.tasks.filter(function (element) {
                   return element.id !== id;
                });
            }
        }
    }

</script>

<style scoped>

</style>