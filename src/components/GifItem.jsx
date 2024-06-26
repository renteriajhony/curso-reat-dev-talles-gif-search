import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img key={url} src={url} alt={title} width={150} height={300} />
      <p key={title}>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
