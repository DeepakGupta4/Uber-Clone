import React from 'react'

const Home = () => {
  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37XpQGtXhxI2-3P3MHoNMtMtzuzxIcqul4Q&s" alt="" />
      </div>
      <div className='absolute flex flex-col justify-end h-screen top-0 w-full '>
        <div className='h-[30%] p-5 bg-white'>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form>
          <input className='bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' />
          <input className='bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
        </form>
        </div>
        <div className='h-[70%] bg-red-600 hidden p-5'>

        </div>
      </div>
    </div>
  )
}

export default Home