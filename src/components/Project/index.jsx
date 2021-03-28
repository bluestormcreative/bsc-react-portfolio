import React from 'react';

const Project = ({ project }) => {
  const {
    name,
    cat,
  } = project;

  return (
    <div className="project">
      <h2 className="project__name text-xl">{name}</h2>
      {cat}
    </div>
  );
};

export default Project;
