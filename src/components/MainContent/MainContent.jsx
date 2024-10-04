
import styles from './MainContent.module.scss';
import { FaScrewdriverWrench, FaTruck, FaBrush, FaBucket, FaLightbulb } from "react-icons/fa6";
import { PiPipeFill } from "react-icons/pi";
import SearchBlock from './Components/SearchBlock/SearchBlock' ;
import CategoryCard from '../category/CategoryCard/CategoryCard' ;
import BusinessList from "../business/BusinessList/BusinessList";

const categories = [
  { name: "cleaning", icon: FaBucket, color: "#b12fde" },
  { name: "repair", icon: FaScrewdriverWrench, color: "#ecbb3a" },
  { name: "painting", icon: FaBrush, color: "#e23e40" },
  { name: "shifting", icon: FaTruck, color: "#059e96" },
  { name: "plumbing", icon: PiPipeFill, color: "#ea9319" },
  { name: "electric", icon: FaLightbulb, color: "#1f71c5" },
];


const MainContent = () => {
  return (
    <main>
      <h1>Find Home <span>Service/Repair</span><br/>Near You</h1>
      <p className={styles.subtitle}>Explore Best Home Service & Repair near you</p>
      <SearchBlock />
      <div className={styles.categoriesHolder}>
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
      <h2 className={styles.servicesTitle}>Popular businesses</h2>
      <div className='index-business-list-holder'>
       <BusinessList />
      </div>
    </main>
  );
};

export default MainContent;
