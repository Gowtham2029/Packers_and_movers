import React from "react";
import img from "../Images/logo.jpeg";
import imgone from "../Images/img1.jpeg";
import Contact from "./Contact";
const Home = () => {
  const handleTop = () => {};
  return (
    <div>
      <div className="scroll">
        <div className="logo">
          <img src={img} alt="Logo" />
        </div>
        <div className="scroll-left">
          <h1>AMARAVATHI PACKERS AND MOVERS</h1>
        </div>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Our Services</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="sec-one">
        <img src={imgone} style={{ height: "15rem", width: "25rem" }} alt="" />
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad
          praesentium dignissimos minus! Sunt omnis nisi at eius error officia
          expedita praesentium sit distinctio corporis, sequi modi reprehenderit
          ut quas?
        </div>
      </div>

      <div className="whatsapp">
        <img
          style={{ height: "4rem" }}
          src="https://img.icons8.com/color/48/000000/whatsapp.png"
          alt="whatsapp"
        />
        <h2>
          <a href="https://wa.me/919182339500" target="_blank">
            Whatsapp
          </a>
        </h2>
      </div>

      {/* <div className="back-to-top">
           {/* <button onClick={handleTop}>🔝</button> */}
        {/* </div>  */}
           <a href="#" class="top">Back to Top &#8593;</a>
     

      <div className="about" id="about">
        <h1 style={{ textAlign: "center" }}>About Us</h1>
      </div>

      <div className="services" id="services">
        <h1 style={{ textAlign: "center" }}>Services</h1>
      </div>

      <div className="gallery" id="gallery">
        <h1 style={{ textAlign: "center" }}>Gallery</h1>
      </div>
      <div className="contact" id="contact">
        <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>
          Contact Us
        </h1>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
