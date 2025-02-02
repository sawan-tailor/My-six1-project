import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      {/* ----------- Left Section ----------- */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            distinctio numquam nemo, dolore architecto nulla incidunt qui maxime
            deleniti quis, quam corrupti amet.
          </p>
        </div>

        {/* ----------- Center section ---------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ----------- Right section --------------- */}

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>sawantailor@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ------------- Copy Right Text --------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">CopyRight 2024@ prescripto - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
