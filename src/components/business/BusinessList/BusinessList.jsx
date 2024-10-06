import PropTypes from 'prop-types';
import BusinessCard from "../BusinessCard/BusinessCard";
import styles from "./BusinessList.module.scss";
import useLocalStorage from '../../../hooks/useLocalStorage';

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

const BusinessList = ({ categoryName, businessesInRow = 4 }) => {
  const { localStorageValue, setLocalStorage } = useLocalStorage('favoriteBusinesses');

  const toggleFavorite = (businessId) => {
    setLocalStorage((prevFavoriteIds) => {
      if (prevFavoriteIds.includes(businessId)) {
        return prevFavoriteIds.filter((id) => id !== businessId);
      } else {
        return [...prevFavoriteIds, businessId];
      }
     });
  };

  const filteredBusiness = categoryName
    ? businesses.filter((business) => business.category === categoryName)
    : businesses;

  return (
    <div className={`${styles.businessList} col-${businessesInRow}`}>
      {filteredBusiness.map((business) => (
        <BusinessCard
          key={business._id}
          business={business}
          isFavorite={localStorageValue.includes(business._id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

BusinessList.propTypes = {
  categoryName: PropTypes.string,
  businessesInRow: PropTypes.number,
};

export default BusinessList;