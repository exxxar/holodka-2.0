import util from './utilites';


const BASE_PERSONS_LINK = '/persons'

let state = {
    persons: [],
    persons_paginate_object: null,
}

const getters = {
    getPersons: state => state.persons || [],
    getClientById: (state) => (id) => {
        return state.persons.find(item => item.id === id)
    },
    getPersonsPaginateObject: state => state.persons_paginate_object || null,
}

const actions = {
    async loadPersons(context, payload = {dataObject: null, page: 0, size: 50}) {
        let page = payload.page || 0
        let size = payload.size || 50

        let link = `${BASE_PERSONS_LINK}?page=${page}&size=${size}`
        let method = 'POST'
        let data = payload.dataObject

        let _axios = util.makeAxiosFactory(link, method, data)

        return _axios.then((response) => {
            let dataObject = response.data
            context.commit("setPersons", dataObject.data)
            delete dataObject.data
            context.commit('setPersonsPaginateObject', dataObject)
            return Promise.resolve();
        }).catch(err => {
            context.commit("setErrors", err.response.data.errors || [])
            return Promise.reject(err);
        })
    },
    async loadAllCities(context) {
        let link = `${BASE_PERSONS_LINK}/cities`
        let method = 'GET'

        let _axios = util.makeAxiosFactory(link, method)

        return _axios.then((response) => {
            let dataObject = response
            return Promise.resolve(dataObject.data);
        }).catch(err => {
            context.commit("setErrors", err.response.data.errors || [])
            return Promise.reject(err);
        })
    },
    async loadSelfPersons(context) {
        let link = `${BASE_PERSONS_LINK}/self-list`
        let method = 'GET'

        let _axios = util.makeAxiosFactory(link, method)

        return _axios.then((response) => {
            let dataObject = response.data
            return Promise.resolve(dataObject);
        }).catch(err => {
            context.commit("setErrors", err.response.data.errors || [])
            return Promise.reject(err);
        })
    },

    async changePersonStatus(context, payload = {person_id: null, status: 0}) {
        let link = `${BASE_PERSONS_LINK}/change-person-status`

        let _axios = util.makeAxiosFactory(link, "POST", payload)

        return _axios.then((response) => {

            return Promise.resolve(response.data);
        }).catch(err => {

            if (err.response)
                context.commit("setErrors", err.response.data.errors || [])
            return Promise.reject(err);
        })
    },
    async checkPerson(context, payload = {person_id: null}) {
        let link = `${BASE_PERSONS_LINK}/check-person`

        let _axios = util.makeAxiosFactory(link, "POST", payload)

        return _axios.then((response) => {

            return Promise.resolve(response.data);
        }).catch(err => {

            if (err.response)
                context.commit("setErrors", err.response.data.errors || [])
            return Promise.reject(err);
        })
    },

    async requestByInn(context, payload = {inn: null}) {
        let link = `${BASE_PERSONS_LINK}/request-by-inn`

        let _axios = util.makeAxiosFactory(link, "POST", payload)

        return _axios.then((response) => {

            return Promise.resolve(response.data);
        }).catch(err => {

            if (err.response)
                context.commit("setErrors", err.response.data.errors || [])
            return Promise.reject(err);
        })
    },
    async storeClient(context, payload = {personForm: null}) {
        let link = `${BASE_PERSONS_LINK}/store`

        let _axios = util.makeAxiosFactory(link, "POST", payload.personForm)

        return _axios.then((response) => {

            return Promise.resolve(response.data);
        }).catch(err => {

            if (err.response)
                context.commit("setErrors", err.response.data.errors || [])
            return Promise.reject(err);
        })
    },
    async removeClient(context, payload = {personId: null}) {
        let link = `${BASE_PERSONS_LINK}/${payload.personId}`

        let _axios = util.makeAxiosFactory(link, 'DELETE')

        return _axios.then((response) => {
            return Promise.resolve(response.data);
        }).catch(err => {
            context.commit("setErrors", err.response.data.errors || [])
            return Promise.reject(err);
        })
    },
    async duplicateClient(context, payload = {personId: null}) {
        let link = `${BASE_PERSONS_LINK}/duplicate/${payload.personId}`

        let _axios = util.makeAxiosFactory(link, 'GET')

        return _axios.then((response) => {
            return Promise.resolve(response.data);
        }).catch(err => {
            context.commit("setErrors", err.response.data.errors || [])
            return Promise.reject(err);
        })
    },
}
const mutations = {
    setPersons(state, payload) {
        state.persons = payload || [];
        localStorage.setItem('dodoors_persons', JSON.stringify(payload));
    },
    setPersonsPaginateObject(state, payload) {
        state.persons_paginate_object = payload || [];
        localStorage.setItem('dodoors_persons_paginate_object', JSON.stringify(payload));
    }
}

const personsModule = {
    state,
    mutations,
    actions,
    getters
}
export default personsModule;
