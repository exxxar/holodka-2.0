import {createStore} from 'vuex'
import Persons from "@/Store/Modules/persons.js";
import Statistic from "@/Store/Modules/statistic.js";
import Jobs from "@/Store/Modules/jobs.js";
import util from "@/Store/Modules/utilites.js";

export default createStore({
    state: {
        errors: [],
    },
    getters: {
        getErrors: state => state.errors || [],
    },
    actions: {
        async addWork(context, payload = {form: null}) {
            let link = `/add-work`

            let _axios = util.makeAxiosFactory(link, "POST", payload)

            return _axios.then((response) => {

                return Promise.resolve(response.data);
            }).catch(err => {

                if (err.response)
                    context.commit("setErrors", err.response.data.errors || [])
                return Promise.reject(err);
            })
        },
        async requestVKLink(context, payload = {form: null}) {
            let link = `/get-vk-link`

            let _axios = util.makeAxiosFactory(link, "POST", payload)

            return _axios.then((response) => {

                return Promise.resolve(response.data);
            }).catch(err => {

                if (err.response)
                    context.commit("setErrors", err.response.data.errors || [])
                return Promise.reject(err);
            })
        },

        async fillVK(context) {
            let link = `/fill-vk`

            let _axios = util.makeAxiosFactory(link, "POST")

            return _axios.then((response) => {

                return Promise.resolve(response.data);
            }).catch(err => {

                if (err.response)
                    context.commit("setErrors", err.response.data.errors || [])
                return Promise.reject(err);
            })

        },
        async requestVKToken(context) {
            let link = `/get-vk-token`

            let _axios = util.makeAxiosFactory(link, "POST")

            return _axios.then((response) => {

                return Promise.resolve(response.data);
            }).catch(err => {

                if (err.response)
                    context.commit("setErrors", err.response.data.errors || [])
                return Promise.reject(err);
            })
        },
    },
    mutations: {
        setErrors(state, payload) {
            state.errors = payload || [];
        },
    },
    modules: {
        Persons,
        Statistic,
        Jobs
    }
})
