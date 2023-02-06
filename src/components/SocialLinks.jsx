import React from "react";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { BsAt } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Facebook
          <CiFacebook size={30} />
        </>
      ),
      href: "https://facebook.com/everflowllc",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Twitter
          <CiTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/everflowllc",
    },
    {
      id: 3,
      child: (
        <>
          Instagram
          <CiInstagram size={30} />
        </>
      ),
      href: "https://instagram.com/everflowllc",
    },
    {
      id: 4,
      child: (
        <>
          Email
          <BsAt size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed z-20">
      <ul>
        {links.map(({ id, child, href, style }) => {
          return (
            <li
              key={id}
              className={
                " flex justify-between items-center w-40 font-black h-12 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-400 " +
                "" +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full"
                target="blank"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
