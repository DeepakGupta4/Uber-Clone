import React from "react";

const LocationSearchPanel = (props) => {
  // console.log(props);

  // sample array for location
  const locations = [
    "Behind Pnb Bank Patherwa kushinagar 274401",
    "Near Pnb Bank Patherwa kushinagar 274401",
    "Below Pnb Bank Patherwa kushinagar 274401",
    "About Pnb Bank Patherwa kushinagar 274401",
  ];
  return (
    <div>
      {/* this is just a sample data  */}

      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex items-center border-2 border-gray-50 active:border-black p-3 rounded-xl gap-3 my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}

      {/* <div className='flex items-center border-2 border-gray-50 active:border-black p-3 rounded-xl gap-3 my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>Behind Pnb Bank Patherwa kushinagar 274401</h4>
        </div>
        <div className='flex items-center border-2 border-gray-50 active:border-black p-3 rounded-xl gap-3 my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>Behind Pnb Bank Patherwa kushinagar 274401</h4>
        </div>
        <div className='flex items-center border-2 border-gray-50 active:border-black p-3 rounded-xl gap-3 my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>Behind Pnb Bank Patherwa kushinagar 274401</h4>
        </div>
        <div className='flex items-center border-2 border-gray-50 active:border-black p-3 rounded-xl gap-3 my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>Behind Pnb Bank Patherwa kushinagar 274401</h4>
        </div> */}
    </div>
  );
};

export default LocationSearchPanel;
