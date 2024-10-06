import PropTypes from 'prop-types';
import './CategoryCard.scss';
import { useParams, useNavigate, generatePath } from "react-router-dom";

const CategoryCard = ({category}) => {
  const params = useParams();
  const { name } = category;
  const navigate = useNavigate();
  const categoryPath = generatePath('/search/:category', { category: name });
  const activeCategory = params.category;

  return (
    <div className={`category-item ${activeCategory == category.name ? 'active' : ''}`} onClick={() => navigate(categoryPath)}>
      <category.icon fontSize={48} color={category.color} />
      <p className={category.name}>{category.name}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object,
};

export default CategoryCard;
