import axios from 'axios'

const instance = axios.create({
    baseURL:'https://mern-tinder-app.herokuapp.com/'
})

export default instance