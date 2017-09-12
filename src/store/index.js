import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    task: [
        { description: 'fist task',  complete: false },
        { description: 'second task',  complete: false },
    ]
}

const getters = {
    doneTodos: state => {
      return state.task
    }
}

const mutations = {
    TOGGLECOMPLITE: (state, task) => {
        //state.task.complete = !state.task.complete
        task.complete = !task.complete
    },
    ADDTASK: (state, task) => {
        let newTask = { description: task, complete: false }
        state.task.push(newTask)
    }
}

const actions = {
    ADDTASK: (context,name) => {
        context.commit('ADDTASK',name)
    },
    TOGGLECOMPLITE: (context,name) => {
        context.commit('TOGGLECOMPLITE',name)
    }
}

export const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

export default store
