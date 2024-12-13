import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-home-fill"></i>
        </Link>
        <div className='h-1/2'>
        <img
          className="h-full w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37XpQGtXhxI2-3P3MHoNMtMtzuzxIcqul4Q&s"
          alt=""
        />
        </div>
        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
      <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoMgcF1IIFg_xETE6kMpGm2FBW2Yidl6ZB5cPoLVRT2R0qa_gFOWVQJ17NjoClqrneNU&usqp=CAU"
            alt=""
          />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Deepak</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP 57 DS 1234</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          </div>
      </div>
      <div className="flex justify-between gap-5 flex-col items-center">
        <div className=" w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Kushinagar
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding