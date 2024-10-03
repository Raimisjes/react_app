import PropTypes from 'prop-types';
import './BusinessCard.scss';
import { GoHeart, GoHeartFill } from "react-icons/go";

const BusinessCard = ({business, isFavorite, toggleFavorite}) => {
  const Icon = () => {
    return isFavorite ? <GoHeartFill/> : <GoHeart/>;
  };

  return (
    <div className='service-card'>
      <img src={business.imageUrls} />
      <div className='service-info'>
        <div className='categories'>
          <span>{business.category}</span>
        </div>
        <h6>{business.name}</h6>
        <p className='provider'>{business.contactPerson}</p>
        <p className='address'>{business.address}</p>
        <div className='buttons-holder'>
          <button className='btn-primary small'>Book now</button>
          <a className='toggle-favorite' onClick={() => toggleFavorite(business._id)}>{Icon(business._id)}</a>
        </div>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  business: PropTypes.object,
  isFavorite: PropTypes.bool,
  toggleFavorite: PropTypes.func,
};

export default BusinessCard;
