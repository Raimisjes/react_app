
import './SearchBlock.scss';
import { AiOutlineSearch } from "react-icons/ai";

const SearchBlock = () => {
  return (
    <div className='search-holder'>
      <form>
        <input type="text" name="search" placeholder="Search" />
        <button className="btn-primary search round"><AiOutlineSearch /></button>
      </form>
    </div>
  );
};

export default SearchBlock;
