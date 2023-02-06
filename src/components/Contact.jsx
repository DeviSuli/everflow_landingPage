import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" bg-gradient-to-b from-gray-800 to-green-800 w-full rounded-lg h-screen p-4 text-white"
    >
      <div className=" flex  flex-col p-5 justify-center max-w-screen-lg  mx-auto h-full w-full">
        <div className="pb-8">
          <p className="border-b-4 inline text-3xl font-bold border-b-white  my-3">
            Contact
          </p>
          <p className="mt-10 text-xl">Submit the form below to reach Us.</p>
        </div>
        <div>
          <form
            action="https://getform.io/f/a03ac7c3-19f4-4698-9412-a417a554cef6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none  mb-4"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none  mb-4"
            />

            <textarea
              name="message"
              placeholder="Enter your Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button
              className="text-black font-bold bg-gradient-to-b from-green-300 to-gray-400
             px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-150 rounded-lg"
            >
              Let Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
