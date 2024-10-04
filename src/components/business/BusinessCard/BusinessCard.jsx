import PropTypes from 'prop-types';
import styles from './BusinessCard.module.scss';
import { GoHeart, GoHeartFill } from "react-icons/go";

const BusinessCard = ({business, isFavorite, toggleFavorite}) => {
  const Icon = () => {
    return isFavorite ? <GoHeartFill/> : <GoHeart/>;
  };

  return (
    <div className={styles.serviceCard}>
      <img src={business.imageUrls} />
      <div className={styles.serviceInfo}>
        <div className={styles.categories}>
          <span>{business.category}</span>
        </div>
        <h6>{business.name}</h6>
        <p className={styles.provider}>{business.contactPerson}</p>
        <p className={styles.address}>{business.address}</p>
        <div className={styles.buttonsHolder}>
          <button className='btn-primary small'>Book now</button>
          <a className={styles.toggleFavorite} onClick={() => toggleFavorite(business._id)}>{Icon(business._id)}</a>
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
