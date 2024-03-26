import React, { useState } from "react";
import heroImage from "../assets/hero/h1_hero3.png";
import { FaPlay } from "react-icons/fa";
// import aboutImage from "../assets/gallery/about.png";

import aboutImage1 from "../assets/gallery/about1.png";

// import serviceImage from "../assets/gallery/service.png";
// import ServiceCard from "../components/ServiceCard/ServiceCard";

// import FeedbackImage from "../assets/gallery/feedback1.png";

// import FeedbackImage from "../assets/gallery/feedback.png";



import ClientReviewCard from "../components/ClientReviewCard/ClientReviewCard";



import gellary1 from "../assets/gallery/gallery7.png";
import gellary2 from "../assets/gallery/gallery8.png";
import gellary3 from "../assets/gallery/gallery9.png";


import TrainnerCard from "../components/TrainnerCard/TrainnerCard";

// import team1 from "../assets/gallery/team1.png";
// import team2 from "../assets/gallery/team2.png";
// import team3 from "../assets/gallery/team3.png";

// import team5 from "../assets/gallery/team5.png";
// import team03 from "../assets/gallery/team03.png";
// import team01 from "../assets/gallery/team01.png";

import team4 from "../assets/gallery/team4.png";
import team02 from "../assets/gallery/team02.png";
import team6 from "../assets/gallery/team6.png";

import SubHead from "../components/Heading/SubHead";
import Button from "../components/Buttons/Button";
import { Link } from "react-router-dom";
import Icon from "../components/Buttons/Icon";
// import PlanCard from "../components/Plans/PlanCard";
import { useGetAllMembershipPlanQuery } from "../redux/api/membership/membershipApi";
import SectionHead from "../components/Heading/SectionHead";
import HeroVideo from "../components/Video/HeroVideo";
import TrainnerCard1 from "../components/TrainnerCard/TrainnerCard1";
import TrainnerCard2 from "../components/TrainnerCard/TrainnerCard2";

const Home = () => {
  // Handle Our Plans
  const { data, isLoading } = useGetAllMembershipPlanQuery();

  // Testimonials
  const testimonials = [
    {
      name: "Soufiane Idrissi",
      feedback:
        "I love this gym! The trainers are knowledgeable and motivating, the equipment is top-notch, and the atmosphere is always welcoming. I've seen fantastic results since I joined.",
      title: " Fitness Enthusiast",
    },
    {
      name: " Adil Boulbarod ",
      feedback:
        "I've been a member of this gym for a year, and I couldn't be happier. The cleanliness and hygiene standards are excellent, and the staff is friendly and helpful.",
      title: "Loyal Member",
    },
    {
      name: "Oussama Ghafiri",
      feedback:
        "The group fitness classes at this gym are outstanding. The instructors are passionate and energetic, and the variety of classes keeps me engaged and motivated to work out regularly. ",
      title: "Group Fitness Fanatic",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex + 1) % testimonials.length
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Handel Video Status
  const [video, setVideo] = useState(false);

  return (
    <div>






      {/* Hero Section */}
      <div
        className="bg-fixed bg-cover bg-center pt-40 pb-6 md:pb-40 xl:h-screen md:flex items-center justify-between"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="px-4 md:px-10">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-blue"></div>
            <SubHead 
              color="main" 
              title="With Oussama and Azeddine"
            />
          </div>
          <h2
            className="text-white text-extraLarge md:text-[50px] md:leading-none md:w-[80%] xl:w-[70%] font-bold uppercase py-16"
            style={{ fontFamily: "'Teko', sans-serif" }}
          >
            Build Perfect body Shape for good and Healthy life.
          </h2>
          <Button>
            <Link to="/dashboard" className="md:px-2" >
              Become A Member
            </Link>
          </Button>
        </div>






        {/* Play button */}
        <div className="relative py-10 flex justify-end">
          <div className="cursor-pointer relative bg-main h-16 w-16 lg:h-20 lg:w-20  rounded-full flex items-center justify-center mx-6 md:mx-14 lg:mx-20  ">
            <span
              onClick={() => {
                setVideo(!video);
              }}
              className="animate-ping absolute inline-flex h-full w-full rounded-full bg-main opacity-75"
            ></span>
            <FaPlay className="text-white text-[20px]" />
          </div>
        </div>
      </div>
      {/* Video */}
      {video && <HeroVideo video={video} setVideo={setVideo}></HeroVideo>}
      {/* About Section */}
      <div className="my-20 lg:flex items-center justify-between xl:my-40">
        <div className="px-5 lg:w-1/2">
          <img
            className="block mx-auto"
            src={aboutImage1}
            alt="Fitness one About"
            style={{width : '500PX', height : '700PX' , borderRadius : '18px'}}
          />
        </div>
        <div className="py-10 px-4 md:px-10 lg:w-1/2">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-blue"></div>
            <SubHead 
                title="About our gym" 
            />
          </div>
          <SectionHead
            color="black"
            title="Fight If You Want To Success."
          ></SectionHead>
          <p className="text-base text-blackGray ">
            Nahila presents your services with flexible, convenient and cdpose
            layouts. You can select your favorite layouts & elements for cular
            ts with unlimited ustomization possibilities. Pixel-perfect
            replication of the designers is intended.
          </p>
          <p className="text-base text-blackGray my-6">
            Nahila presents your services with flexible, convefnient and chient
            anipurpose layouts. You can select your favorite layouts.
          </p>
          <div className="my-10">
            <Button>
              <Link to="/dashboard" className="md:px-2  ">
                Become A Member
              </Link>
            </Button>
          </div> 
        </div>
      </div>





      {/* Feedback Section */}
      {/* <div className="my-20 lg:flex items-center justify-between xl:my-40">
        <div className="px-5 lg:w-1/2">
          <img
            className="block mx-auto"
            src={FeedbackImage}
            alt="Fitness one Feedback"
            style={{width : '400PX', height : '600PX' , borderRadius : '18px'}}
            
          />
        </div>
        <div className="py-10 px-4 md:px-10 lg:w-1/2">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead 
                  color="main" 
                  title="Client Feedback" 
            />
          </div>
          <SectionHead
              color="black"
              title="What Our Client Think About Our Gym"
          ></SectionHead>
          <div>
            <ClientReviewCard
              {...testimonials[currentTestimonialIndex]}
            ></ClientReviewCard>
            <div className="flex  space-x-4 my-10">
              <button onClick={previousTestimonial}>
                <Icon
                  IconName="fa-solid fa-arrow-left"
                  color="main"
                  size="xl"
                />
              </button>
              <button onClick={nextTestimonial}>
                <Icon
                  IconName="fa-solid fa-arrow-right"
                  color="main"
                  size="xl"
                />
              </button>
            </div>
          </div>
        </div>
      </div> */}







      {/* Our Gellary */}
      <section className="overflow-hidden text-gray-700 mb-10">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <SectionHead
              color="#000000" 
              title=" Gallery">
        </SectionHead>
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





      {/* Team Members */}
      <div className="bg-white pt-20 pb-10">
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-blue"></div>
            <SubHead 
                  color="main"
                  title="Our Team Members" 
            />
          </div>
          <div className="lg:flex items-center justify-between">
            <SectionHead
              color="black"
              title="Trainers with extensive experience in the field of bodybuilding"
            ></SectionHead>
            <div className="lg:w-3/12">
              <Button>
                <Link className="px-2" to="/Exercices">
                  More Exercices
                </Link>
              </Button>
            </div> 
          </div>
        </div>
        <div className="md:flex justify-around">
          <TrainnerCard
            name="Oussama Boukh"
            title="Certified Fitness Coach"
            image={team4}
          ></TrainnerCard>
          <TrainnerCard1
            name="Mouad Bahloul"
            title="Strength and Conditioning Specialist"
            image={team02}
          ></TrainnerCard1>
          <TrainnerCard2
            name="Kamal Ait Irhmour"
            title="Personal Trainer and Nutrition Expert"
            image={team6}
          ></TrainnerCard2>
        </div>
      </div>
    </div>
  );
};

export default Home;
