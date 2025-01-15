import axios from 'axios'
const url="http://localhost:3000"

export const getProducts=async ()=>{
    const resp=await axios.get(url+'/products')
    return resp
}

export const getProduct=async (id)=>{
    const resp=await axios.get(url+'/product/'+id)
    return resp
}