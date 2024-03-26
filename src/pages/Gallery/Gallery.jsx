import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import gellary1 from "../../assets/gallery/gallery7.png";
import gellary2 from "../../assets/gallery/gallery8.png";
import gellary3 from "../../assets/gallery/gallery9.png";

import gellary4 from "../../assets/gallery/gallery1.png";
import gellary5 from "../../assets/gallery/gallery2.png";
import gellary6 from "../../assets/gallery/gallery3.png";

import gellary7 from "../../assets/gallery/gallery4.png";
import gellary8 from "../../assets/gallery/gallery5.png";
import gellary9 from "../../assets/gallery/gallery6.png";

const Gallery = () => {
  return (
    <div>
      <PageHeading 
            content="Our Gallery"
      />
      <section className="overflow-hidden text-gray-700 mb-10">
      {/* <SectionHead
              color="#000000" 
              title=" Gallery">
        </SectionHead> */}
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gellary1}
              />
            </div>
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gellary2}
              />
            </div>
            <div className="w-full sm:w-full p-1 md:p-2 h-[500px]">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg "
                src={gellary3}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden text-gray-700 mb-10">
      {/* <SectionHead
              color="#000000" 
              title=" Gallery">
        </SectionHead> */}
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gellary4}
              />
            </div>
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gellary5}
              />
            </div>
            <div className="w-full sm:w-full p-1 md:p-2 h-[500px]">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg "
                src={gellary6}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden text-gray-700 mb-10">
      {/* <SectionHead
              color="#000000" 
              title=" Gallery">
        </SectionHead> */}
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gellary7}
              />
            </div>
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gellary8}
              />
            </div>
            <div className="w-full sm:w-full p-1 md:p-2 h-[500px]">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg "
                src={gellary9}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
