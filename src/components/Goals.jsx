import React from "react";

const Goals = () => {
  return (
    <div
      name="goals"
      className=" bg-gradient-to-b from-green-500 to-gray-700 w-full h-screen rounded-sm"
    >
      <div className=" max-w-screen-lg px-4  flex flex-col justify-center mx-auto py-20 ">
        <div className=" pb-10">
          <p className=" text-4xl font-bold border-green-600 border-b-4 mx-5 inline ">
            Goals
          </p>
        </div>
        <div>
          <p className="text-2xl mt-10">
            The goals of our business are designed to reflect our commitment to
            providing solutions for any human need to be accessible by any
            means. we will ensure that our business remains at the forefront of
            the industry and continues to meet the ever-evolving needs of our
            customers.
          </p>
          <p className="mt-20 text-white text-xl space-y-10">
            Customer satisfaction
            <br />
            Efficient delivery
            <br />
            Increased access
            <br />
            Growth
            <br />
            Financial sustainability
            <br />
            Innovation
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
