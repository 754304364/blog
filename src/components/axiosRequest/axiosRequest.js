import axios from 'axios'
export function request(config){
    const instance = axios.create({
        // baseURL:'http://192.168.1.2:3000'
        baseURL:'http://101.132.235.218:3000'
    })
    return instance(config)
}
export function reSelect(config){
    const instance = axios.create({
        // baseURL:'http://192.168.1.2:3000/api/user'
        baseURL:'http://101.132.235.218:3000/api/user'
    })
    return instance(config)
}
reSelect.all = axios.all
reSelect.spread = axios.spread
