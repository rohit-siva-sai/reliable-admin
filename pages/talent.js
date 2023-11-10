import TalentTable from '@/components/talents/talentTable';
import { useStore } from '@/useStore/store';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Talent = () => {

    const [talents] = useStore((store) => [
        store.talents,
        
      ]);
      const router = useRouter()
      useEffect(()=>{
        const user  = JSON.parse(JSON.stringify(localStorage.getItem("user")))
        if(!user)
        {
          router.push("/")
        }
        
        
      })
    
    
  return (
    <div className='px-10 py-6'>
      <TalentTable/>
    </div>
  )
}

export default Talent
