import PropTypes from 'prop-types';
import './ServiceCard.scss';

const ServiceCard = ({service}) => {
  return (
    <div className='service-card'>
      <img src={service.imageUrls} />
      <div className='service-info'>
        <div className='categories'>
          <span>{service.category}</span>
        </div>
        <h6>{service.name}</h6>
        <p className='provider'>{service.contactPerson}</p>
        <p className='address'>{service.address}</p>
        <button className='btn-primary small'>Book now</button>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
