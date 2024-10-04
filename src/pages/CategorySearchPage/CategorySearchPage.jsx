import { useParams } from "react-router-dom";
import BusinessList from "../../components/business/BusinessList/BusinessList";
import Header from '../../components/header/Header'
import VerticalCategoryList from "../../components/category/VerticalCategoryList/VerticalCategoryList";
import styles from './CategorySearchPage.module.scss';

const CategorySearchPage = () => {
  const { category } = useParams();

  return (
    <>
      <Header />
      <main className={styles.categoriesSearchHolder}>
        <div>
          <VerticalCategoryList />
        </div>
        <div className={styles.businessListHolder}>
          <h2>{category}</h2>
          <BusinessList categoryName={category} businessesInRow={3}/>
        </div>
      </main>
    </>
  );
};

export default CategorySearchPage;