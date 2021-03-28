import React from 'react';

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
          <span className="project__cat">{cat}</span>
        ))}
      </div>
      <h2 className="project__name text-xl">{name}</h2>
      <p className="project__desc">{desc}</p>
      <img src={allImages[`${image}`].default} alt={`${name} project screenshot`} />
    </div>
  );
};

export default Project;
