import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from './utils'
import { Modal } from './Modal'


export const Products = () => {
  const {data,isLoading,isError,error}=useQuery({queryKey:["products"],queryFn:getProducts})
  if(isLoading) return <div>loading...</div>
  if(isError) return <div>Error{error.message}</div>
  console.log(data.data);
  
  return (
    <div style={{ margin:"auto", maxWidth:"1100px", bgcolor: 'background.paper' }} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {data.data.map((item)=>
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2" key={item.id}>
          <img className='w-full' src={item.img_url} alt={item.name} />
          <div className="px-3 py-4">
            <div className="font-bold text-xl mb-2">{item.name}</div>
          </div>
          <div className="px-3 pt-4 pb-2">
            <Modal id={item.id} name={item.name} />
          </div>
        </div>
      )}
    </div>
  )
}