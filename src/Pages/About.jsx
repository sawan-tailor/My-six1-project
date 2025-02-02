import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            corporis voluptatibus ratione explicabo nobis. Nemo, reiciendis
            maxime incidunt nostrum maiores quisquam aspernatur optio?Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Eum, autem!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            fugit, consectetur dolores rerum qui aliquam quidem similique illum
            deserunt impedit ipsa at recusandae accusamus enim earum dolore
            itaque aspernatur corrupti fugiat amet nemo molestias. Neque, rerum?
            Expedita nam voluptate dolorum!lorem20
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            tempora minus aut ipsam distinctio non nostrum provident cupiditate
            possimus dolorum necessitatibus error excepturi, iusto inventore
            dignissimos porro qui nisi sint repellat. Officiis fugit eum
            mollitia nulla, nesciunt obcaecati!
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold"> CHOOES US </span>{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.buy
            lifestyle
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores
            deleniti delectus?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            placeat numquam consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
