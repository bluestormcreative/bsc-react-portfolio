import React from 'react';

// Components.
import Button from '../Button';

const Project = ({ project }) => {
  const {
    name,
    cat,
    desc,
    image,
    link,
  } = project;

  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const allImages = importAll(require.context('../../assets/project-images', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="project">
      <div className="project__cats text-xs">
        {cat && cat.map((cat) => (
          <span className="project__cat inline-block px-2 py-1 mr-2">{cat}</span>
        ))}
      </div>
      <h2 className="project__name text-xl py-4">{name}</h2>
      <p className="project__desc pb-4">{desc}</p>
      <img className="project__image"src={allImages[`${image}`].default} alt={`${name} project screenshot`} />
      <Button 
        classNames="project__link"
        isLink={true}
        newTab={true}
        text="View Live Project"
        link={link}
      />
    </div>
  );
};

export default Project;
