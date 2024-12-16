import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {

  return (
    <div>
        <h5 className="p-1 text-center w-[93%] absolute top-0">
          <i
            className="text-3xl text-gray-200 ri-arrow-down-wide-fill"
            onClick={() => {
             props.setFinishRidePanel(false)
            }}
          ></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Finish this ride</h3>
        <div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3'>
                <img className='h-12 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                <h2 className='text-lg font-medium'>Deepak Gupta</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2KM</h5>
        </div>

        <div className='flex justify-between gap-5 flex-col items-center'>
          <div className=' w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="ri-map-pin-user-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Kushinagar</p>
                </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="ri-map-pin-user-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Kushinagar</p>
                </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="ri-currency-line"></i>
                <div>
                    <h3 className='text-lg font-medium'>₹193.20</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
                </div>
          </div>
          
          <div className='mt-10 w-full'>

            <Link to='/captain-home' className='w-full flex text-lg justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>
            <p className=' mt-10 text-xs'>click on finish ride button if you have completed the payment.</p>
          
          </div>
        </div>
    </div>
  )
}

export default FinishRide