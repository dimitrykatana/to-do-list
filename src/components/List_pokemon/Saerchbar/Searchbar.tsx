import { Link } from 'react-router-dom';
import { useSearchBar } from './useSearchBar';
import './Searchbar.css';

type Props = {
  onSearch: (inputValue: string) => void;
};

const SearchBar = ({ onSearch }: Props): JSX.Element => {
  const { inputValue, handleInputChange, handleSubmit } = useSearchBar(onSearch);

  return (
    <div className='center'>
      <Link className="link" to={'/Battle'}>
        TIME TO FIGHT
      </Link>
      <h1> Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <label>
        </label>
        <input
          type="text"
          placeholder="Arceus"
          className="input"
          value={inputValue}
          onChange={handleInputChange}
        />
        <input type="submit" value="Srch" className="button" />
      </form>
    </div>
  );
};

export default SearchBar;