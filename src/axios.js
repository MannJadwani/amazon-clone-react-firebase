import axios from 'axios'

const instance=  axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-e260c/us-central1/app' //api
})

export default instance