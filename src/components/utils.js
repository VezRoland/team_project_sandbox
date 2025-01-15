import axois from "axios"

const url="http://localhost:3000"

export const getProducts=async()=>{
    const response=await axois.get(url+"/products")
    return response
}

export const getProduct=async(id)=>{
    const response=await axois.get(url+"/products:"+id)
    return response
}