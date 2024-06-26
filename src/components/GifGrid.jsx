import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <p>Loading...</p>}
      <div className="card-grid" key={category}>
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
