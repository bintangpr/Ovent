import axios from 'axios'

export default axios.create({
    baseURL:"https://ovennpt-app.herokuapp.com",
    header:{
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})