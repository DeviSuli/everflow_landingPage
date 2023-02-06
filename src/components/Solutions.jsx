import React from "react";

const Solutions = () => {
  return (
    <div
      name="solutions"
      className="w-full h-screen mx-auto p-2 py-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8 bg-gradient-to-b from-teal-900 to-teal-800"
    >
      <div>
        <div className=" relative text-green-300 hover:scale-105 duration-200">
          <div className="absolute rounded-xl  w-full h-full   bg-black/50 ">
            <p className="font-bold text-2xl border-b-black bg-black/40 w-40 mx-2 px-2 absolute bottom-4 ">
              Cargo Ship
            </p>
          </div>
          <img
            className=" max-h-[180px] md:max-h-[300px] w-full object-cover rounded-xl  "
            src="https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Cargo Ship"
          />
        </div>
      </div>
      <div>
        <div className=" relative text-green-300 hover:scale-105 duration-200">
          <div className="absolute rounded-xl  w-full h-full   bg-black/50 ">
            <p className="font-bold text-2xl border-b-black bg-black/40 w-40 mx-2 px-2 absolute bottom-4 ">
              Digital Delivery
            </p>
          </div>
          <img
            className=" max-h-[180px] md:max-h-[300px] w-full object-cover rounded-xl  "
            src="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="streaming"
          />
        </div>
      </div>
      <div>
        <div className=" relative text-green-300 hover:scale-105 duration-200">
          <div className="absolute rounded-xl  w-full h-full   bg-black/50 ">
            <p className="font-bold text-2xl border-b-black bg-black/40 w-40 mx-2 px-2 absolute bottom-4 ">
              Cargo Plane
            </p>
          </div>
          <img
            className=" max-h-[180px] md:max-h-[300px] w-full object-cover rounded-xl  "
            src="https://images.pexels.com/photos/4803814/pexels-photo-4803814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Cargo plane"
          />
        </div>
      </div>
      <div>
        <div className=" relative text-green-300 hover:scale-105 duration-200">
          <div className="absolute rounded-xl  w-full h-full   bg-black/50 ">
            <p className="font-bold text-2xl border-b-black bg-black/40 w-40 mx-2 px-2 absolute bottom-4 ">
              OTR Truck
            </p>
          </div>
          <img
            className=" max-h-[180px] md:max-h-[300px] w-full object-cover rounded-xl  "
            src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="trucking"
          />
        </div>
      </div>
      <div>
        <div className=" relative text-green-300 hover:scale-105 duration-200">
          <div className="absolute rounded-xl  w-full h-full   bg-black/50 ">
            <p className="font-bold text-2xl border-b-black bg-black/40 w-40 mx-2 px-2 absolute bottom-4 ">
              Data Tracking
            </p>
          </div>
          <img
            className=" max-h-[180px] md:max-h-[300px] w-full object-cover rounded-xl  "
            src="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Data track"
          />
        </div>
      </div>
      <div>
        <div className=" relative text-green-300 hover:scale-105 duration-200">
          <div className="absolute rounded-xl  w-full h-full   bg-black/50 ">
            <p className="font-bold text-2xl border-b-black bg-black/40 w-40 mx-2 px-2 absolute bottom-4 ">
              Containers
            </p>
          </div>
          <img
            className=" max-h-[180px] md:max-h-[300px] w-full object-cover rounded-xl  "
            src="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Freights"
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
