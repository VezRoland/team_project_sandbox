import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from './utils'


export const Products = () => {
  const {data,isLoading,isError,error}=useQuery({queryKey:["products"],queryFn:getProducts})
  if(isLoading) return <div>loading...</div>
  if(isError) return <div>Error{error.message}</div>
  console.log(data.data);
  
  return (
    <div style={{ margin:"auto", maxWidth: 360, bgcolor: 'background.paper' }} >
      ...
    </div>
  )
}