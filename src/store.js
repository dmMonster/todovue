import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
    tasks: [
        {"id":1,"description":"first"},
        {"id":2,"description":"second"},
        {"id":3,"description":"third"},
        {"id":4,"description":"fourth"}
    ],
}
export default new Vuex.Store({
    state: state,
    getters: {
        getTasks(state){
            return state.tasks;
        }
    },
    mutations: {
        addTask(state,description){
            let maxId = 0;
            for(let i = 0; i<state.tasks.length; i++){
                if(maxId < state.tasks[i].id) maxId = state.tasks[i].id;
            }
            this.state.tasks.push({"id":maxId+1,"description":description});
        },
        editTask(state,{id,description}){
            let editingTask = state.tasks.filter(function (element) {
                return element.id === id;
            });
            editingTask[0].description = description;
        },
        deleteTask(state,id){
            state.tasks = state.tasks.filter(function (element) {
                return element.id !== id;
            });
        }
    },
    actions: {
        addTask({commit}, description){
            console.log(description);
            commit('addTask',description);
        },
        editTask({commit},{id,description}){
            console.log(id +' '+ description);
            commit('editTask',{id,description});
        },
        deleteTask({commit},id){
            console.log(id);
            commit('deleteTask',id);
        }

    }
})