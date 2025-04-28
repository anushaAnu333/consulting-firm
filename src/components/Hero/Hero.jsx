
import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";
import project from "../../assets/project.png";
import productivity from "../../assets/productivity.png";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />
       
        <div className="hero-text">
    
        

          <h1 className="headline">
          Empower Your <br />
          <span>Business Goals</span>
        </h1>
          <div>
            <span>
              We help you transform strategy, optimize operations, and drive
              sustainable growth.
            </span>
          </div>
        </div>

        {/* experience figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} preFix="+" />
            </span>
            <span>expert consultants</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={878} delay={4} preFix="+" />
            </span>
            <span>clients served</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} delay={2} preFix="+" />
            </span>
            <span>industry solutions</span>
          </div>
        </div>

        {/* hero buttons */}
       
      </div>

      {/* Right Side */}
      <div className="right-h">
       

        <img
          className="hero-image"
          src={hero_image}
          alt="Consulting overview"
        />
       
        <motion.div
          initial={{ right: "32rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={productivity} style={{ width: "3rem", height: "3rem" }} alt="Efficiency Improvement" />
        
            <span>Efficiency Gain</span>
            <span>30%</span>
       
        </motion.div>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={project} style={{ width: "3rem", height: "3rem" }} alt="Projects Completed" />
          <span>Projects Completed</span>
          <span>116+</span>
        </motion.div>


           <motion.div
          className="floating-ring ring-1"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        <motion.div
          className="floating-ring ring-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        />
        <motion.div
          className="floating-blob"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        
      </div>
    </div>
  );
};

export default Hero;