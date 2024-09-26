import PropTypes from 'prop-types';
import './CategoryCard.scss';

const CategoryCard = ({category}) => {
  return (
    <div className='category-item'>
      <category.icon fontSize={48} color={category.color} />
      <p className={category.name}>{category.name}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object,
};

export default CategoryCard;
