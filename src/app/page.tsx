import { Suspense, useState } from 'react'
import Link from 'next/link'

import SideDashboard from '@/components/SideDashboard'
import HeaderDashboard from '@/components/HeaderDashboard'
import Loading from '@/components/Loading'

export default function Home() {


  return (
    <div className='flex'>
      <SideDashboard/>
      <main className="flex flex-1 flex-col w-sreen h-screen">
        <HeaderDashboard />
        <div className=' flex-1 bg-slate-400'>
          <Suspense fallback={<Loading />} >
            <p>Oiiii</p>
          </Suspense>
        </div>
        
      </main>
    </div>
     
  )
}
