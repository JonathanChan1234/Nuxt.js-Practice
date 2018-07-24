import axios from 'axios';
export default {
    getData() {
        //change json file link
        return axios.get('https://api.myjson.com/bins/1eykui')
    }
}