import {createStore} from 'vuex'
import Persons from "@/Store/Modules/persons.js";

export default createStore({
    state: {
        errors: [],
    },
    getters: {
        getErrors: state => state.errors || [],
    },
    actions: {

    },
    mutations: {
        setErrors(state, payload) {
            state.errors = payload || [];
        },
    },
    modules: {
        Persons
    }
})
