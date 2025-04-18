import React from 'react'

export const DataInfo = ({data, text}) => {
  return (
    <div>
          <div className='flex-items center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer'>
              <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">{data}</h5>
              <p className="text-lg text-gray-600 font-medium">{text}</p>
          </div>
   </div>
  )
}
