<template>
    <div>
        <new-task-component v-on:addTaskEvent="addTask" />
        <ul v-for="task in tasks">
            <li>
                <span>{{task.description}}</span>
                <button v-on:click="deleteTask(task.id)">Delete</button>
                <button v-on:click="showModal(task.id)">Edit</button>
            </li>
        </ul>
        <edit-task-component v-bind:id="editingTaskId"  v-on:editTaskEvent="editTask"  v-if="modalVisible"/>
    </div>
</template>

<script>
    import NewTaskComponent from "@/components/newTaskComponent";
    import EditTaskComponent from "@/components/EditTaskComponent";
    export default {
        name: "ToDoListCompnent",
        components: {EditTaskComponent, NewTaskComponent},
        data(){
            return {
                tasks: [
                    {"id":1,"description":"first"},
                    {"id":2,"description":"second"},
                    {"id":3,"description":"third"},
                    {"id":4,"description":"fourth"}
                ],
                modalVisible: false,
                editingTaskId: 1,
            }
        },
        methods:{
            addTask: function(description){
                let maxId = 0;
                for(let i = 0; i<this.tasks.length; i++){
                    if(maxId < this.tasks[i].id) maxId = this.tasks[i].id;
                }
                this.tasks.push({"id":maxId+1,"description":description});
            },
            deleteTask: function (id) {
                this.tasks = this.tasks.filter(function (element) {
                   return element.id !== id;
                });
            },
            showModal: function(id){
                this.modalVisible = true;
                this.editingTaskId = id;
            },
            editTask: function (id,description) {
                let editingTask = this.tasks.filter(function (element) {
                    return element.id === id;
                });
                editingTask[0].description = description;
                this.modalVisible = false;
                }
            }
        }
</script>

<style scoped>

</style>