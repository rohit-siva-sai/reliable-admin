import CustomerTable from '@/components/customers/customerTable'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Customer = () => {

  const router = useRouter()
      useEffect(()=>{
        const user  = JSON.parse(JSON.stringify(localStorage.getItem("user")))
        if(!user)
        {
          router.push("/")
        }
        
        
      })
  return (
    <div  className='px-10 py-10'>
      <CustomerTable/>
    </div>
  )
}

export default Customer
