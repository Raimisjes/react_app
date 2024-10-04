import PropTypes from 'prop-types';
import styles from './CategoryCard.module.scss';
import { useParams, useNavigate, generatePath } from "react-router-dom";

const CategoryCard = ({category, layout = "vertical"}) => {
  const params = useParams();
  const { name } = category;
  const navigate = useNavigate();
  const categoryPath = generatePath('/search/:category', { category: name });
  const activeCategory = params.category;

  return (
    <div
      className={`${styles.categoryItem} ${activeCategory == category.name ? styles.active : ''} ${styles[layout]}`}
      onClick={() => navigate(categoryPath)}>
        <category.icon fontSize={48} color={category.color} />
        <p className={category.name}>{category.name}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object,
  layout: PropTypes.string,
};

export default CategoryCard;
