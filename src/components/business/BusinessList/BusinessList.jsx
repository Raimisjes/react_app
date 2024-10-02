import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import BusinessCard from "../BusinessCard/BusinessCard";
import "./BusinessList.scss";

const BusinessList = ({ categoryName }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteBusinesses');
    if (storedFavorites) {
      setFavoriteIds(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    if (favoriteIds.length > 0) {
      localStorage.setItem('favoriteBusinesses', JSON.stringify(favoriteIds));
    } else {
      localStorage.removeItem('favoriteBusinesses');
    }
  }, [favoriteIds]);

  const toggleFavorite = (businessId) => {
    setFavoriteIds((prevFavoriteIds) => {
      if (prevFavoriteIds.includes(businessId)) {
        return prevFavoriteIds.filter((id) => id !== businessId);
      } else {
        return [...prevFavoriteIds, businessId];
      }
     });
  };

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

  const filteredBusiness = categoryName
    ? businesses.filter((business) => business.category === categoryName)
    : businesses;

  return (
    <div className="business-list">
      {filteredBusiness.map((business) => (
        <BusinessCard
          key={business._id}
          business={business}
          isFavorite={favoriteIds.includes(business._id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

BusinessList.propTypes = {
  categoryName: PropTypes.string,
};

export default BusinessList;