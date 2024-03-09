import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Welcome to TravelGo, where wanderlust meets seamless exploration! Embark on a journey with us and unlock the world's 
          most captivating destinations. Our passion for travel fuels our commitment to providing you with unforgettable 
          experiences, curated itineraries, and unparalleled service.
          At TravelGo, we believe that every journey is a story waiting to be written. Whether you're a thrill-seeker, culture 
          enthusiast, or simply seeking relaxation, we've crafted diverse travel packages to suit every taste. Our team of 
          seasoned professionals is dedicated to ensuring your adventure is not just a trip, but a collection of cherished 
          memories.
          Discover the world with confidence, knowing that we prioritize your safety, comfort, and satisfaction. From iconic 
          landmarks to hidden gems, our carefully crafted tours promise to immerse you in the beauty and uniqueness of each 
          destination.
          </p>
          <br />
          <p>
          As you navigate through our website, you'll find a user-friendly platform designed to simplify your travel planning 
          process. Explore our range of services, from meticulously planned group tours to personalized private getaways, all 
          tailored to cater to your preferences.
          Join us on a voyage of discovery, and let TravelGo be your trusted companion in making your travel dreams a reality.
          Life is a journey – make it extraordinary with us!
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
