import CategoryCard from "../CategoryCard/CategoryCard";
import { FaScrewdriverWrench, FaTruck, FaBrush, FaBucket, FaLightbulb } from "react-icons/fa6";
import { PiPipeFill } from "react-icons/pi";
import './VerticalCategoryList.scss';

const VerticalCategoryList = () => {
  const categories = [
    { name: "cleaning", icon: FaBucket, color: "#b12fde" },
    { name: "repair", icon: FaScrewdriverWrench, color: "#ecbb3a" },
    { name: "painting", icon: FaBrush, color: "#e23e40" },
    { name: "shifting", icon: FaTruck, color: "#059e96" },
    { name: "plumbing", icon: PiPipeFill, color: "#ea9319" },
    { name: "electric", icon: FaLightbulb, color: "#1f71c5" },
  ];

  return (
    <div className="vertical-category-list">
      <h2>Categories</h2>
      <div>
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default VerticalCategoryList;