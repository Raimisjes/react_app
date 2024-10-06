import { useParams } from "react-router-dom";
import BusinessList from "../../components/business/BusinessList/BusinessList";
import Header from '../../components/header/Header'
import VerticalCategoryList from "../../components/category/VerticalCategoryList/VerticalCategoryList";
import './CategorySearchPage.scss';

const CategorySearchPage = () => {
  const { category } = useParams();

  return (
    <>
      <Header />
      <main className='categories-search-holder'>
        <div>
          <VerticalCategoryList />
        </div>
        <div className="business-list-holder">
          <h2>{category}</h2>
          <BusinessList categoryName={category} />
        </div>
      </main>
    </>
  );
};

export default CategorySearchPage;