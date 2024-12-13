import React from 'react'

const ConfirmRide = (props) => {
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
        <h3 className="text-2xl font-semibold mb-2">Confirm your Ride</h3>

        <div className='flex justify-between gap-5 flex-col items-center'>
        <img
            className="h-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoMgcF1IIFg_xETE6kMpGm2FBW2Yidl6ZB5cPoLVRT2R0qa_gFOWVQJ17NjoClqrneNU&usqp=CAU"
            alt=""
          />
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
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
          }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmRide