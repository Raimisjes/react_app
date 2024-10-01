
import './MainContent.scss';
import { FaScrewdriverWrench, FaTruck, FaBrush, FaBucket, FaLightbulb } from "react-icons/fa6";
import { PiPipeFill } from "react-icons/pi";
import SearchBlock from './Components/SearchBlock/SearchBlock' ;
import CategoryCard from '../category/CategoryCard/CategoryCard' ;
import BusinessCard from '../business/BusinessCard/BusinessCard' ;

const categories = [
  { name: "cleaning", icon: FaBucket, color: "#b12fde" },
  { name: "repair", icon: FaScrewdriverWrench, color: "#ecbb3a" },
  { name: "painting", icon: FaBrush, color: "#e23e40" },
  { name: "shifting", icon: FaTruck, color: "#059e96" },
  { name: "plumbing", icon: PiPipeFill, color: "#ea9319" },
  { name: "electric", icon: FaLightbulb, color: "#1f71c5" },
];

const businesses = [
  {
    "_id": "6659ad22f8aa007781ea2b0b",
    "name": "Išsivalyk pats",
    "about": "Privatūs objektai",
    "address": "Kauno g. 27, Vilnius",
    "category": "cleaning",
    "contactPerson": "Tadas Gedvilas",
    "email": "email@example.com",
    "imageUrls": [
        "https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
    ]
},
{
    "_id": "6659ad22f8aa007781ea2b0c",
    "name": "UAB Valymas",
    "about": "Top valymas visoje lietuvoje",
    "address": "Aukštaičių al. 27, Klaipėda",
    "category": "cleaning",
    "contactPerson": "Regina Kazlauskienė",
    "email": "email2@example.com",
    "imageUrls": [
        "https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners.jpg"
    ]
},
{
    "_id": "6659ad22f8aa007781ea2b0d",
    "name": "Moki veži",
    "about": "Greitai",
    "address": "Žemaičių al. 27, Klaipėda",
    "category": "shifting",
    "contactPerson": "Darius Standys",
    "email": "email2@example.com",
    "imageUrls": [
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/08/featured_image_what_size_moving_truck_do_you_need.jpeg.jpg"
    ]
},
{
    "_id": "6659ad22f8aa007781ea2b0e",
    "name": "Elektrikas į namus",
    "about": "24/7",
    "address": "Maisto g. 17, Vilnius",
    "category": "electric",
    "contactPerson": "Rokas Andreikėnas",
    "email": "food@gmail.com",
    "imageUrls": [
        "https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/know-how/hero/kh-qualified-vs-unqualified-electrical-workers_feat.jpg"
    ]
}
];

const MainContent = () => {
  return (
    <main>
      <h1>Find Home <span>Service/Repair</span><br/>Near You</h1>
      <p className="subtitle">Explore Best Home Service & Repair near you</p>
      <SearchBlock />
      <div className='categories-holder'>
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
      <h2 className='services-title'>Popular businesses</h2>
      <div className='services-list'>
        {businesses.map((business) => (
          <BusinessCard key={business.name} business={business} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
