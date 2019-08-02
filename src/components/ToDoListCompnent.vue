<template>
    <div>
        <new-task-component v-on:addTaskEvent="addTask" />
        <div class="list-container">
            <ul v-for="task in tasks">
                <li>
                    <span class="task-description">{{task.description}}</span>
                    <span>
                        <button class="btn-delete" v-on:click="deleteTask(task.id)">Delete</button>
                        <button class="btn-edit" v-on:click="showModal(task.id)">Edit</button>
                    </span>
                </li>
            </ul>
            <edit-task-component v-bind:id="editingTaskId"  v-on:editTaskEvent="editTask"  v-if="modalVisible"/>
        </div>
    </div>
</template>

<script>
    import NewTaskComponent from "@/components/newTaskComponent";
    import EditTaskComponent from "@/components/EditTaskComponent";
    import { mapGetters } from 'vuex'
    export default {
        name: "ToDoListCompnent",
        components: {EditTaskComponent, NewTaskComponent},
        data(){
            return {
                modalVisible: false,
                editingTaskId: 1,
            }
        },
        computed: {
            ...mapGetters({
                'tasks': 'getTasks'
            })
        },
        methods:{
            addTask: function(description){
                this.$store.dispatch('addTask',description);
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
    li{
        list-style: none;
        background-color: ghostwhite;
        padding: 5px;
        box-shadow: 2px 2px 25px 5px;
        display: flex;
        justify-content: space-between;
    }
    .list-container{
        width: 40%;
        margin: 1em auto;
    }
    .btn-delete{
        background-color: #d31827;
        color: white;
        font-weight: bolder;
        padding: 5px 10px;
        box-shadow:gray 2px 2px 2px 1px;
        border: none;
        margin: 10px;
        min-width: 70px;
        border-radius: 5%;
    }
    .btn-edit{
        background-color: #0eba31;
        color: white;
        font-weight: bolder;
        padding: 5px 10px;
        box-shadow:gray 2px 2px 2px 1px;
        border: none;
        margin: 10px;
        min-width: 70px;
        border-radius: 5%;
    }
    .task-description{
        border-right: 1px solid black;
        padding: 5px;
        background-image: linear-gradient(to right,lightgray, beige);
        border-radius: 5px;
        flex-grow: 2;
        text-align: left;
    }
</style>