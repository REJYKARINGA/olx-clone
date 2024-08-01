import React from 'react'

const BannerApp = () => {
  return (
    <>
   <div  >
   <div className='bg-gray-100 w-full px-[15%] '>
   <div className='flex'>
    <img src='/phone-app.webp' />
 
  <div>
  
  <div className='flex'>
  <div className=' w-[100%] m-10  border-r-4 border-slate-500'>
   <h1 className='items-center text-4xl'><b>TRY THE OLX APP</b></h1>
   <p className='w-[100%] text-xl my-6'>Buy, sell and find just about anything using the app on your mobile.</p>
   </div>
   <div className='my-11 items-end'>
   <p className='uppercase text-ms'><b>Get your app today</b></p>
   <img src='/appstore_2x.webp' />
   <img src='/playstore_2x.webp' />
   </div>
  </div>
  </div>
 </div>
   </div>
   
   </div>
    </>
  )
}

export default BannerApp