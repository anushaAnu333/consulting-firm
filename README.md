# ConsultingFirm 🎯

**Version:** 0.1.0 | **Private:** Yes

An interactive, visually compelling React-based landing page designed for consulting firms to showcase services, highlight expertise, and engage potential clients through 3D graphics, smooth animations, and integrated communication tools.

---

## 🔍 Project Overview

* **Purpose:** Enable consulting businesses to present their core offerings—strategy consulting, digital transformation, operational excellence, and risk management—in an immersive, modern web experience.
* **Architecture:** Built with Create React App (CRA) and configured via CRACO for customization without ejecting.
* **Key Concepts:**

  * **Component-driven UI:** Modular React components ensure reusability and maintainability.
  * **3D Scenes:** Three.js (via @react-three/fiber) delivers interactive 3D models or backgrounds in the hero and features sections.
  * **Motion & Transitions:** Framer Motion & framer-motion-3d animate elements on scroll and user interactions for a polished feel.
  * **Data Counters:** Dynamic number counters visualize statistics (e.g., consultants onboarded, projects completed).
  * **Email Integration:** EmailJS enables secure, client-side message delivery from the contact form without back-end infrastructure.

---

## 🚩 Core Features

1. **Hero Section with 3D Visual**

   * Immersive Three.js canvas backdrop
   * Animated headline and subheading fade-ins
   * Smooth scroll navigation cues

2. **Statistics Highlights**

   * Animated numeric counters powered by `number-counter`
   * Customizable thresholds and durations

3. **Service Cards**

   * Four signature programs displayed in responsive cards
   * Hover-triggered lift and shadow via Framer Motion

4. **Differentiators Carousel**

   * Showcase "What sets us apart" bullet points
   * Click or auto-rotate slides

5. **Pricing Toggle**

   * Monthly vs. yearly billing switch
   * Real-time price adjustments and transition effects

6. **Client Testimonials**

   * Testimonial slider integrated with React components
   * Avatar images, client names, and feedback

7. **Contact Engagement**

   * EmailJS-based form with validation
   * Click-outside detection to close modals
   * Success/error animations on submission

8. **Responsive & Accessible**

   * Mobile-first design with CSS flex/grid
   * ARIA attributes and keyboard navigability

---

## 🧩 Tech & Dependencies

* **React** (v18.2.0) & **react-dom**: Core UI library
* **CRACO** (v7.1.0): Override CRA settings
* **three** (v0.152.2) & **@react-three/fiber** (v8.18.0): 3D rendering
* **framer-motion** (v6.3.15) & **framer-motion-3d** (v12.4.13): Smooth animations
* **@emailjs/browser** (v3.6.2) & **emailjs** (v4.0.0): Browser-based email delivery
* **number-counter** (v1.0.3): Animated count-ups
* **react-icons** (v5.5.0): SVG iconography
* **react-scroll** (v1.8.7): Smooth scroll behavior
* **react-onclickoutside** (v6.12.2): Detect outside clicks
* **react-use-measure** (v2.1.7): Element size observation
* **web-vitals** (v2.1.4): Performance tracking
* **Testing Tools:** @testing-library/react, jest-dom, user-event


---

## 🔗 Usage Notes

* **Customization:** Tweak 3D models, text content, and color themes via props and CSS variables.
* **Performance:** Lazy-load heavy 3D scenes and code-split via React.lazy for faster initial load.
* **Analytics:** Integrate web-vitals or GA for user behavior insights.

