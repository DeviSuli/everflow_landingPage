import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-700 to-green-700 text-white rounded-sm"
    >
      <div className=" rounded-lg max-w-screen-lg px-4 mx-auto py-5 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-green-700">
            About Us
          </p>
        </div>
        <p className="text-xl mt-20">
          We are a company dedicated to making life easier for everyone by
          providing solutions to all of your needs. Our goal is to ensure that
          anything you require is accessible to you, no matter where you are or
          what your needs are.
        </p>
        <br />
        <p className=" text-xl mt-5">
          With our vast network of suppliers, we have the resources to deliver
          anything you need, anywhere you need it, using any mode of
          transportation. Whether it's a product you've purchased online, or a
          unique item that you need to have delivered, we've got you covered.
        </p>
        <br />
        <p className=" text-xl mt-5">
          Our commitment to customer satisfaction is second to none. We strive
          to make every delivery seamless and stress-free, so you can focus on
          the things that matter most. Our team of experts will work with you to
          ensure that every aspect of your delivery is taken care of, from start
          to finish.
        </p>
        <br />
        <p className=" text-xl mt-5">
          At our company, we believe that life should be simple, accessible, and
          convenient. With that in mind, we've developed a range of services
          that cater to the needs of individuals, businesses, and organizations
          alike. From parcel delivery to special item transportation, we're here
          to make sure that you have access to the solutions you need.
          <br />{" "}
          <span className="  text-green-200">
            <br />
            Thank you for choosing us as your trusted delivery partner. We look
            forward to helping you achieve your goals and providing you with the
            level of service that you deserve.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
