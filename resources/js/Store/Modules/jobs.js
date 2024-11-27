import util from './utilites';


const BASE_JOBS_LINK = '/jobs'

let state = {
    jobs: [],
    jobs_paginate_object: null,
}

const getters = {
    getJobs: state => state.jobs || [],
    getJobsPaginateObject: state => state.jobs_paginate_object || null,
}

const actions = {

    async removeJob(context, payload = {id:null}) {
        let link = `${BASE_JOBS_LINK}/remove/${payload.id}`
        let method = 'DELETE'

        let _axios = util.makeAxiosFactory(link, method)

        return _axios.then((response) => {
            return Promise.resolve();
        }).catch(err => {
            context.commit("setErrors", err.response.data.errors || [])
            return Promise.reject(err);
        })
    },

    async loadJobs(context, payload = {dataObject: null, page: 0, size: 50}) {
        let page = payload.page || 0
        let size = payload.size || 50

        let link = `${BASE_JOBS_LINK}?page=${page}&size=${size}`
        let method = 'POST'
        let data = payload.dataObject

        let _axios = util.makeAxiosFactory(link, method, data)

        return _axios.then((response) => {
            let dataObject = response.data
            context.commit("setJobs", dataObject.data)
            delete dataObject.data
            context.commit('setJobsPaginateObject', dataObject)
            return Promise.resolve();
        }).catch(err => {
            context.commit("setErrors", err.response.data.errors || [])
            return Promise.reject(err);
        })
    },

}
const mutations = {
    setJobs(state, payload) {
        state.jobs = payload || [];
        localStorage.setItem('dodoors_jobs', JSON.stringify(payload));
    },
    setJobsPaginateObject(state, payload) {
        state.jobs_paginate_object = payload || [];
        localStorage.setItem('dodoors_jobs_paginate_object', JSON.stringify(payload));
    }
}

const jobsModule = {
    state,
    mutations,
    actions,
    getters
}
export default jobsModule;
