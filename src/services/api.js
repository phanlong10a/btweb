import axios from 'axios'
import ConstantList from '../appConfig'
const API_PATH  = ConstantList.API_ENPOINT + '/todoapp';


export const getList = () => {
    var url = API_PATH;
    return axios.get(url)
}

export const addTask = (item) => {
    var url = API_PATH;
    return axios.post(url, item)
}

export const deleteTask = (id) => {
    var url = API_PATH + '/' + id;
    return axios.delete(url)
}

export const modifyTask = (item, id) => {
    var url = API_PATH + '/' + id;
    return axios.put(url, item)
}