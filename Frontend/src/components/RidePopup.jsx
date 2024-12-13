import React from 'react'

const RidePopup = () => {
  return (
    <div>
        <h5 className="p-1 text-center w-[93%] absolute top-0">
          <i
            className="text-3xl text-gray-200 ri-arrow-down-wide-fill"
            onClick={() => {
              props.setVehiclePanel(false);
            }}
          ></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
        <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3'>
                <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
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
          <button onClick={()=>{
    
          }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
          <button onClick={()=>{

          }} className='w-full -mt-1 bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg'>Ignore</button>
        </div>
    </div>
  )
}

export default RidePopup