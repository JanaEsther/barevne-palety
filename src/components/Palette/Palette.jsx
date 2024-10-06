import './Palette.css';

const Palette = ({ paletteData }) => {
  const { name, image, attribution, colors, direction, description } =
    paletteData;

  const SchemeClass = `palette-scheme palette-sceme--${direction}`;
  return (
    <div className="palette">
      <div className={SchemeClass}>
        <img className="scheme-image" src={image} alt={`Photo of ${name}`} />
        <div className="scheme-colors">
          {colors.map((color) => (
            <SchemeColor key={color} color={color} />
          ))}
        </div>
      </div>
      <div className="palette-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          Photo by{' '}
          <a href={attribution} target="_blank">
            {attribution}
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Palette;
