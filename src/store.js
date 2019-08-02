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
        }
    },
    actions: {
        addTask({commit}, description){
            console.log(description);
            commit('addTask',description);
        }
    }
})