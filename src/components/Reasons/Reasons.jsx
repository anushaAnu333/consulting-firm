// // Reasons.jsx
// import React from "react";
// import image1 from "../../assets/image1.png";
// import image2 from "../../assets/image2.png";
// import image3 from "../../assets/image3.png";
// import image4 from "../../assets/image4.png";
// import nb from '../../assets/nb.png';
// import adidas from '../../assets/adidas.png';
// import nike from '../../assets/nike.png';
// import tick from "../../assets/tick.png";
// import "./Reasons.css";

// const reasonsList = [
//   { icon: tick, title: "Over 140+ expert consultants" },
//   { icon: tick, title: "Data-driven strategies for real impact" },
//   { icon: tick, title: "Customized solutions for your challenges" },
//   { icon: tick, title: "Proven success with industry leaders" },
// ];

// const Reasons = () => {

  
//   return (
//     <section className="reasons-section" id="reasons">
//       {/* Intro */}
//       <div className="reasons-intro">
//         <span className="highlight">What sets us apart</span>
//         <h2><span className="stroke-text">Why </span>choose us?</h2>
//       </div>

//       {/* Layout */}
//       <div className="reasons-layout">
//         {/* List of reasons */}
//         <div className="reasons-list">
//           {reasonsList.map(item => (
//             <div className="reason-card" key={item.title}>
//               <img src={item.icon} alt="check" />
//               <p>{item.title}</p>
//             </div>
//           ))}

//           {/* Partners */}
//           <div className="partners">
//             <h3>Our Clients</h3>
//             <div className="partners-logos">
//               <img src={nb} alt="NB logo" />
//               <img src={adidas} alt="Adidas logo" />
//               <img src={nike} alt="Nike logo" />
//             </div>
//           </div>
//         </div>
// {/* animation here */}
       
        
//       </div>
//     </section>
//   );
// };

// export default Reasons;
// Reasons.jsx
import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from "../../assets/tick.png";
import "./Reasons.css";

const reasonsList = [
  { icon: tick, title: "Over 140+ expert consultants" },
  { icon: tick, title: "Data-driven strategies for real impact" },
  { icon: tick, title: "Customized solutions for your challenges" },
  { icon: tick, title: "Proven success with industry leaders" },
];

// variants for staggered list animations
const listVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    }
  }
};
const itemVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Reasons = () => {
  return (
    <section className="reasons-section" id="reasons">
      {/* Intro */}
      <div className="reasons-intro">
        <h2 style={{ color: 'white' }}>What sets us apart</h2>
        <p style={{ color: 'white' }}>Why choose us?</p>


       
      </div>

      {/* Layout */}
      <div className="reasons-layout">
        {/* List of reasons */}
        <motion.div
          className="reasons-list"
          variants={listVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reasonsList.map((item, i) => (
            <motion.div
              className="reason-card"
              key={item.title}
              variants={itemVariant}
              whileHover={{ x: 6, boxShadow: "var(--shadow-hover)" }}
            >
              <img src={item.icon} alt="check" />
              <p>{item.title}</p>
            </motion.div>
          ))}

         
        </motion.div>

        {/* Animated Images */}
        <motion.div
          className="reasons-images"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariant}
        >
          <motion.div
            className="img-thumb thumb-1"
            variants={itemVariant}
          >
            <img src={image1} alt="Main visual" />
          </motion.div>
          <motion.div className="img-thumb thumb-2" variants={itemVariant}>
            <img src={image2} alt="Thumbnail 1" />
          </motion.div>
          <motion.div className="img-thumb thumb-" variants={itemVariant}>
            <img src={image3} alt="Thumbnail 2" />
          </motion.div>
          <motion.div className="img-thumb thumb-3" variants={itemVariant}>
            <img src={image4} alt="Thumbnail 3" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reasons;