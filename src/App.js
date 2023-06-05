import React from 'react'

export default function App() {
  return (
    <div className='h-100vh md:h-screen bg-[#1B2532] p-8 flex justify-center items-center'>
      <div className='flex flex-col gap-5 md:flex-row '>
        {/* first div */}
        <div className='bg-[#2C384A] rounded-lg p-2 text-center '>
          <div className='bg-[#1B2532] p-12 text-white'>
            <p className='text-2xl pb-16 md:pb-10'>BASIC</p>
            <h1 className='text-6xl pb-8'>100GB</h1>
            <p>$1.99/Month</p>
            <button className='pb-4 mb-12 p-3 rounded-xl outline outline-1 hover:scale-105 duration-75 mt-4  outline-blue-400'>
              Purchase
            </button>

            <hr />
            <br />
            <p>100 GB storage</p>
            <p>Option to add members</p>
            <p>Extra member benefits</p>
          </div>
        </div>
        {/* second div */}
        <div className='bg-[#7032E9] text-center rounded-lg p-2  md:bg-[#2C384A] md:rounded-lg '>
          <div className='bg-[#1B2532] p-12 rounded-lg text-white'>
            <p className='text-2xl pb-16 md:pb-10'>STANDARD</p>
            <h1 className=' pb-8 text-6xl'>200GB</h1>
            <p>$3.99/Month</p>
            <button className='pb-4 p-3 mt-4 rounded-xl mb-12 outline outline-1 hover:scale-105 duration-75 outline-blue-400 '>
              Purchase
            </button>
            <hr/>
            <br />

            <p>200 GB storage</p>
            <img
              src='https://www.flaticon.com/free-icon/check_1828743?term=mark&page=1&position=12&origin=search&related_id=1828743'
              alt=''
            />
            <p>Option to add members</p>
            <p>Extra member benefits</p>
          </div>
        </div>
        {/* third div */}
        <div className='bg-[#2C384A] p-2 rounded-lg text-center'>
          <div className='bg-[#1B2532] p-12 rounded-lg text-white'>
            <p className='text-2xl pb-16 md:pb-10'>PREMIUM</p>
            <h1 className='text-6xl pb-8'>2TB</h1>
            <p>$8.99/Month</p>
            <button className='pb-4 mt-4 rounded-xl  mb-12 p-3 outline outline-1 hover:scale-105 duration-75 outline-blue-400 '>
              Purchase
            </button>
            <div className='h-[0.2px] w-[100%] bg-white'></div>
            <br />
            <p>2TB storage</p>
            <p>Option to add members</p>
            <p>Extra member benefits</p>
          </div>
        </div>
      </div>
    </div>
  )
}
