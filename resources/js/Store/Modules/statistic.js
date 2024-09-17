import util from './utilites';


const BASE_STATISTIC_LINK = '/statistics'

let state = {

}

const getters = {

}

const actions = {
    async loadStatistic(context, payload = {dataObject: null}) {
        let page = payload.page || 0
        let size = payload.size || 50

        let link = `${BASE_STATISTIC_LINK}`
        let method = 'POST'
        let data = payload.dataObject

        let _axios = util.makeAxiosFactory(link, method, data)

        return _axios.then((response) => {
            let dataObject = response.data
            return Promise.resolve(dataObject);
        }).catch(err => {
            context.commit("setErrors", err.response.data.errors || [])
            return Promise.reject(err);
        })
    },

}
const mutations = {

}

const statisticModule = {
    state,
    mutations,
    actions,
    getters
}
export default statisticModule;
