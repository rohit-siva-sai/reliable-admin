import TalentTable from '@/components/talents/talentTable';
import { useStore } from '@/useStore/store';
import React from 'react'

const Talent = () => {

    const [talents] = useStore((store) => [
        store.talents,
        
      ]);
    
    
  return (
    <div className='px-10 py-10'>
      <TalentTable/>
    </div>
  )
}

export default Talent
