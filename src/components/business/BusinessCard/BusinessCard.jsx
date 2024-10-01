import PropTypes from 'prop-types';
import './BusinessCard.scss';

const BusinessCard = ({business}) => {
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
        <button className='btn-primary small'>Book now</button>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  business: PropTypes.object,
};

export default BusinessCard;
