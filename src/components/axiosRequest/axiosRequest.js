import axios from 'axios'
export function request(config){
    const instance = axios.create({
        baseURL:'http://localhost:3000'
    })
    return instance(config)
}
export function reSelect(config){
    const instance = axios.create({
        baseURL:'http://localhost:3000/api/user'
    })
    return instance(config)
}
reSelect.all = axios.all
reSelect.spread = axios.spread
