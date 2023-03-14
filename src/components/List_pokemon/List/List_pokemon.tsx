import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './List_pokemon.css';
import { Lien_image } from '../../API_CO/api';

type Props = {
  filtrage: string;
};

const Liste = (props: Props): JSX.Element => {
  const [list, setList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [opacity, setOpacity] = useState(0);
  const animationDelay = 0.1; // in seconds

  const filteredList = useCallback(() => {
    return list.filter((item) =>
      item.toLowerCase().includes(props.filtrage.toLowerCase())
    );
  }, [list, props.filtrage]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((res) => {
        setList(res.data.results.map((pokemonz: { name: string }) => pokemonz.name));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
    <ul className="Liste__Pokemons">
      {filteredList().map((item) => (
        <li
          className="Liste__Pokemons__Card"
          key={item}
          onLoad={() => setOpacity(1)}
          style={{
            opacity: opacity,
            transition: `opacity 1s ease-in ${list.indexOf(item) * animationDelay}s`,
          }}
        >
          <p className="HeadCard Nom">{item}</p>
          <img className="image" src={Lien_image(list.indexOf(item))} alt={`${item}`} />
          <p className="Numero">No. {list.indexOf(item) + 1}</p>
        </li>
      ))}
    </ul>
    </main>
  );
};

export default Liste;