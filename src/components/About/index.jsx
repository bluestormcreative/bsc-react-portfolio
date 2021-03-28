import React from 'react';

const About = () => (
  <section id="about">
    <header className="about-header grid grid-cols-12 grid-rows-1 gap-x-1 pb-4">
      <div className="header__text col-span-8">
        <h1 className="text-2xl">Hello!</h1>
        <h2 className="text-xl">Blue Storm Creative is a web and creative shop founded in 2008 by me, Max MacMillan.</h2>
      </div>
      <div className="header__image col-span-4">
        image here gross
      </div>
    </header>
    <p className="mb-2">
      What was once a hobby is now my career, and I am currently a full-time UX Developer with <a href="https://alley.co" target="blank">Alley</a>, where we craft custom digital experiences for publishers, nonprofit institutions, museums, and brands. Some of the clients I've worked with include Google, Microsoft, Campbell’s, News Corp, NBC, Fox, and Viacom, along with countless other businesses, entrepreneurs, and creators.
    </p>
    <p className="mb-2">
      Blue Storm Creative remains where I provide freelance websites and marketing strategies for smaller business ventures, artists, authors, and non-profits. To date I’ve developed hundreds of sites ranging from personal blogs to enterprise-level marketing sites, stores, online courses, membership hubs, and everything in between.
    </p>
  </section>
);

export default About;
