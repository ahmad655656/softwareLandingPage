import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="About" className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center  ">
        {/* Image content */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image
            src={"/images/about.png"}
            alt="image"
            width={700}
            height={700}
          />
        </div>
        {/* Text Content */}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase">
            About Us
          </p>
          <h1>Innovations Excellence Building Digital Future Together</h1>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magni
            pariatur esse ipsam ratione! Quas accusamus libero suscipit
            recusandae ad fuga pariatur quae cupiditate, dolorum quasi doloribus
            dolor temporibus veritatis?
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-4">
              <Image src="/images/a1.png" alt="icon" width={50} height={50} />
              <h1 className="text-lg sm:text-xl font-bold leading-5">
                IT Infrastucture Management
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/images/a2.png" alt="icon" width={50} height={50} />
              <h1 className="text-lg sm:text-xl font-bold leading-5">
                Cloud Integration <br /> Service Provide{" "}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/images/a3.png" alt="icon" width={50} height={50} />
              <h1 className="text-lg sm:text-xl font-bold leading-5">
                Custom Software <br /> Development
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/images/a4.png" alt="icon" width={50} height={50} />
              <h1 className="text-lg sm:text-xl font-bold leading-5">
                Instant Supports <br /> any Quaries{" "}
              </h1>
            </div> 
          </div>
          <div className="mt-12">
            <a href="#_" className="w-full hover:bg-blue-900 ease px-9 md:mx-auto py-4 text-base text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase">
              About More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
