
import { FaFire, FaGem, FaRocket } from "react-icons/fa";

export const plansData = [
  {
    name: "Basic",
    desc: "Get started with core strategic frameworks.",
    icon: <FaFire />,
    price: { monthly: 29, yearly: 290 },
    features: [
      "90-minute Strategy Kickoff Session",
      "Access to Proven Consulting Playbooks",
      "Quarterly Performance Review",
      "Email & Chat Support"
    ],
    featured: false,
  },
  {
    name: "Standard",
    desc: "Hands-on support to optimize your operations.",
    icon: <FaGem />,
    price: { monthly: 69, yearly: 690 },
    features: [
      "Dedicated Consultant & Team",
      "Monthly Strategy & Operations Workshops",
      "Advanced KPI Dashboard & Reporting",
      "Operational Efficiency Audit",
      "+140 Expert Consultants Network Access"
    ],
    featured: true,
  },
  {
    name: "Pro",
    desc: "Full-scale transformation and growth acceleration.",
    icon: <FaRocket />,
    price: { monthly: 129, yearly: 1290 },
    features: [
      "Executive Leadership Alignment Retreat",
      "End-to-End Implementation Support",
      "Customized Industry Solution Design (+50 Industries)",
      "Sustainable Growth Roadmap",
      "24/7 Premium Advisory & On-Demand Teams",
      "Dedicated Client Success Manager (978-client track record)"
    ],
    featured: false,
  },
];