
import styles from './SearchBlock.module.scss';
import { AiOutlineSearch } from "react-icons/ai";

const SearchBlock = () => {
  return (
    <div className={styles.searchHolder}>
      <form>
        <input type="text" name="search" placeholder="Search" />
        <button className={`btn-primary round ${styles.search}`}><AiOutlineSearch /></button>
      </form>
    </div>
  );
};

export default SearchBlock;
