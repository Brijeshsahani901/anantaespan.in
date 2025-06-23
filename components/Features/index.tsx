import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import { FaUserGraduate, FaGlobeAsia, FaBalanceScale } from "react-icons/fa"; // Icon
// components/Features/Features.tsx


// Updated features data
const featuresData = [
  {
    id: 1,
    icon: <FaUserGraduate size={30} />,
    title: "Leadership & Education",
    paragraph:
      "Values-based leadership programmes and fellowships designed to nurture ethical change-makers across schools, universities and professional spheres.",
  },
  {
    id: 2,
    icon: <FaGlobeAsia size={30} />,
    title: "International Relations",
    paragraph:
      "Track II dialogues, ambassador series, and strategic conversations to strengthen India’s global engagement and diplomatic footprint.",
  },
  {
    id: 3,
    icon: <FaBalanceScale size={30} />,
    title: "Public Policy & Dialogue",
    paragraph:
      "Policy round‑tables, conferences and research initiatives to develop actionable solutions for India’s development and security challenges.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Core Work Areas"
          paragraph="Ananta Aspen Centre focuses on three strategic domains that drive its mission and impact:"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
