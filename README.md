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

* **React** & **react-dom**: Core UI library
* **CRACO** : Override CRA settings
* **three**  & **@react-three/fiber** : 3D rendering
* **framer-motion**  & **framer-motion-3d** : Smooth animations
* **@emailjs/browser**  & **emailjs**: Browser-based email delivery
* **number-counter** : Animated count-ups
* **react-icons** : SVG iconography
* **react-scroll** : Smooth scroll behavior
* **react-onclickoutside** : Detect outside clicks
* **react-use-measure**: Element size observation
* **web-vitals** : Performance tracking
* **Testing Tools:** @testing-library/react, jest-dom, user-event


---

## 🔗 Usage Notes

* **Customization:** Tweak 3D models, text content, and color themes via props and CSS variables.
* **Performance:** Lazy-load heavy 3D scenes and code-split via React.lazy for faster initial load.
* **Analytics:** Integrate web-vitals or GA for user behavior insights.

