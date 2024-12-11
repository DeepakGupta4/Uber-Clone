import React, { useRef, useState } from 'react'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'


const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelref = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)

  const submitHandler = (e) => {
    
    e.preventDefault()
  }


  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height: '70%',
        padding: 24
        // opacity: 1
      })
      gsap.to(panelCloseRef.current,{
        opacity: 1
      })
    }else{
      gsap.to(panelRef.current,{
        height: '0%',
        padding: 0
        // opacity: 0
      })
      gsap.to(panelCloseRef.current,{
        opacity: 0
      })
    }
  },[panelOpen])


  useGSAP(function(){
      if(vehiclePanel){
        gsap.to(vehiclePanelref.current,{
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(vehiclePanelref.current,{
          transform: 'translateY(100%)'
        })
      }
  },[vehiclePanel])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37XpQGtXhxI2-3P3MHoNMtMtzuzxIcqul4Q&s" alt="" />
      </div>
      <div className='absolute flex flex-col justify-end h-screen top-0 w-full '>
        <div className='h-[35%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className='absolute opacity-0 top-6 right-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
            </h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
           submitHandler(e)
        }}>
          <div className="line absolute h-16 w-1 top-[42%] left-10 bg-gray-800 rounded-full"></div>
          <input
          onClick={()=>{
            setPanelOpen(true)
          }} 
          value={pickup}
          onChange={(e)=>{
            setPickup(e.target.value)
          }}
          className='bg-[#eeee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
          type="text" 
          placeholder='Add a pick-up location' 
          />
          <input
          onClick={()=>{
            setPanelOpen(true)
          }} 
          value={destination}
          onChange={(e)=>{
            setDestination(e.target.value)
          }} 
          className='bg-[#eeee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
          type="text" 
          placeholder='Enter your destination' 
          />
        </form>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>

          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />

        </div>
      </div>
      <div ref={vehiclePanelref} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
          <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoMgcF1IIFg_xETE6kMpGm2FBW2Yidl6ZB5cPoLVRT2R0qa_gFOWVQJ17NjoClqrneNU&usqp=CAU" alt="" />
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away </h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p> 
            </div>
            <h2 className='text-lg font-semibold'>₹193.20</h2>
          </div>

          <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className=' -ml-2 w-1/2'>
              <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 mins away </h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p> 
            </div>
            <h2 className='text-lg font-semibold'>₹65</h2>
          </div>
          <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className=' ml-2 w-1/2'>
              <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>3 mins away </h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p> 
            </div>
            <h2 className='text-lg font-semibold'>₹118.21</h2>
          </div>

      </div>
    </div>
  )
}

export default Home