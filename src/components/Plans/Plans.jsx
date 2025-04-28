// src/components/Plans/Plans.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (isFeatured) => ({
    opacity: 1,
    y: 0,
    scale: isFeatured ? 1 : 1,
    transition: { type: "spring", stiffness: 140, damping: 20 },
  }),
};

export default function Plans() {
  const [billing, setBilling] = useState("monthly");
  const toggleBilling = () =>
    setBilling((prev) => (prev === "monthly" ? "yearly" : "monthly"));

  return (
    <section className="plans-section" id="plans">
      {/* Blurred Gradients */}
      <motion.div
        className="plans-blur plans-blur-1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="plans-blur plans-blur-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Header */}
      <motion.div
        className="plans-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span >Ready to Start Your Journey</span>
        <p style={{ color: "white" }}>Choose Your Plan</p>
      </motion.div>

      {/* Billing Toggle */}
      <motion.div
        className="billing-toggle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span className={billing === "monthly" ? "active" : ""}>
          Monthly
        </span>
        <div className="toggle-switch" onClick={toggleBilling}>
          <motion.div
            className={`switch-thumb ${billing}`}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </div>
        <span className={billing === "yearly" ? "active" : ""}>
          Yearly <strong>Save 20%</strong>
        </span>
      </motion.div>

      {/* Plans Grid */}
      <motion.div
        className="plans-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {plansData?.map((plan) => {
          const price =
            billing === "monthly"
              ? plan.price.monthly
              : plan.price.yearly;

          return (
            <motion.div
              key={plan.name}
              className={`plan-card ${
                plan.featured ? "featured" : ""
              }`}
              
              variants={cardVariants}
              custom={plan.featured}
              whileHover={{
                scale:  1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
            
              <div className="plan-icon">{plan.icon}</div>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-desc">{plan.desc}</p>
              <p className="plan-price">
                ${price}
                <span>/ {billing}</span>
              </p>
              <div className="plan-features" style={{minHeight:"300px",}}>
                {plan.features?.map((f) => (
                  <div key={f} className="feature-item">
                    <img src={whiteTick} alt="" />
                    <span style={{fontSize: "14px",}}>{f}</span>
                  </div>
                ))}
              </div>
              <motion.button
                className="btn join-now"
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}