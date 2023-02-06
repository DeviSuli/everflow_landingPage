import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-scroll";
import second from "../everFlowImages/dayplane_truck.png";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full bg-gradient-to-b p-2 from-black to-slate-800 h-screen"
    >
      <div className="max-auto mx-auto flex  items-center justify-center h-auto relative">
        <div className=" p-5 absolute w-full h-full flex flex-col justify-center bg-black/40">
          <h2 className="text-3xl sm:text-6xl py-3 max-w-md font-raleone text-green-500">
            Welcome To EverFlow...
          </h2>
          <p className="py-2 max-w-md font-raleone text-green-200">
            We are your comprehensive solution provider, that offers a wide
            range of products and services to meet all your needs and desires.
            This could include physical goods, services, as well as digital
            products and services. That can all delivered in an innovative and
            flexible way, with no limits to the mode of delivery and
            transportation.
          </p>

          <div>
            <Link
              to="solutions"
              smooth
              duration={500}
              className=" group text-black font-raleone w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-800 to-green-300"
            >
              Solutions
              <span className="group-hover:rotate-90 duration-200">
                <AiOutlineRight size={25} className="ml-1 " />
              </span>
            </Link>
          </div>
        </div>
        <img
          className=" w-fit h-screen rounded object-cover"
          src={second}
          alt="truck on the road and plane in the sky"
        />
      </div>
    </div>
  );
};

export default Home;
