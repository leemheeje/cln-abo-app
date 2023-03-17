import axios from 'axios'

// export const apiTest = () => axios.get('/todos').catch((error) => error)
export const apiTest = () => axios.get('/todo').then(({data}) => data)
// https://dummyjson.com
