import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopup from '../components/ConfirmRidePopup'

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const ridePopupPanelRef = useRef(null)
  const ConfirmRidePopupPanelRef = useRef(null)

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(ConfirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ConfirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
  );

  return (
    <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img
        className="w-16 "
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
          <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
        </div>
        <div className='h-3/5'>
        <img
          className="h-full w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37XpQGtXhxI2-3P3MHoNMtMtzuzxIcqul4Q&s"
          alt=""
        />
        </div>
        <div className='h-2/5 p-6'>
           <CaptainDetails />
        </div>
        <div ref={ridePopupPanelRef} className="fixed w-full z-10  -translate-y-full bottom-0  bg-white px-3 py-10 pt-12">
        <RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}  />
      </div>
        <div ref={ConfirmRidePopupPanelRef} className="fixed w-full h-screen z-10  -translate-y-full bottom-0  bg-white px-3 py-10 pt-12">
        <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  )
}

export default CaptainHome