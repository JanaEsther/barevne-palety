import React from 'react';
import SchemeColor from '../SchemeColor/SchemeColor';
import './Palette.css';


const Palette = ({ paletteData }) => {
  const { name, image, attribution, colors, direction, description } =
    paletteData;

  const SchemeClass = `palette-scheme palette-scheme--${direction}`;
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
       <a href={attribution.url} target="_blank" rel="noopener noreferrer">
    {attribution.name}
    </a>
   .
    </p>
      </div>
    </div>
  );
};

export default Palette;
