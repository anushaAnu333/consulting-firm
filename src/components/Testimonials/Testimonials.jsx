


import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";
import "./Testimonials.css";



export const people = [
  {
    id: 1,
    name: "Susan Smith",
    job: "CEO, Visionary Tech",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "“Premier Consulting guided us through a complete operational overhaul—streamlining our workflows and boosting team productivity by over 40% in just four months. Their hands-on approach and deep industry insight have truly transformed our business.”",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "COO, Horizon Enterprises",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "“Working with Premier Consulting was a game-changer. Their market analysis and strategic planning helped us enter two new verticals seamlessly, resulting in a 25% revenue lift in the first quarter alone.”",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "CFO, GreenField Corp.",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "“Their finance-driven transformation roadmap gave us clear cost-optimization levers—saving us over $500K in operating expenses last year. I can’t recommend Premier Consulting enough for their rigorous, data-backed recommendations.”",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "Founder, Peak Performance Ltd.",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "“From our initial discovery session to execution, Premier Consulting’s team was proactive, responsive, and results-oriented. They exceeded every KPI, and today we’re on track for our most profitable year yet.”",
  },
];
const variants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};





export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text, id } = people[index];
  const count = people.length;

  const wrap = i => (i < 0 ? count - 1 : i >= count ? 0 : i);
  const prev   = () => setIndex(i => wrap(i - 1));
  const next   = () => setIndex(i => wrap(i + 1));
  const random = () => {
    let rand;
    do { rand = Math.floor(Math.random() * count); }
    while (rand === index);
    setIndex(rand);
  };

  // ball configs: size (px), position, delay
  const balls = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      // choose small (10–30) or medium (40–80)
      const size = Math.random() < 0.5
        ? 10 + Math.random() * 20
        : 40 + Math.random() * 40;
      arr.push({
        size,
        top:    `${Math.random() * 100}%`,
        left:   `${Math.random() * 100}%`,
        delay:  Math.random() * 3,
      });
    }
    return arr;
  }, []);

  return (
    <section className="testimonial-section" id="testimonials">
      {/* floating balls */}
      {balls?.map((b, i) => (
        <motion.div
          key={i}
          className="ball"
          style={{
            width:  b.size,
            height: b.size,
            top:    b.top,
            left:   b.left,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: [0, 0.3, 0.1],  // keyframe opacity sequence
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 6,
            delay: b.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <h2 className="testi-title">What Our Clients Say</h2>
      <div className="underline" />

      <div className="testi-container">
        <AnimatePresence exitBeforeEnter>
          <motion.article
            key={id}
            className="review-card"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <div className="img-container">
              <img src={image} alt={name} className="person-img" />
              <span className="quote-icon">
                <FaQuoteRight />
              </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
              <button className="nav-btn" onClick={prev}>
                <FaChevronLeft />
              </button>
              <button className="nav-btn" onClick={next}>
                <FaChevronRight />
              </button>
            </div>
            <button className="random-btn" onClick={random}>
              Surprise Me
            </button>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}