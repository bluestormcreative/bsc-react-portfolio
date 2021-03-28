import React from 'react';

// Components.
import Button from '../Button';

const ContactForm = () => {
  const handleClick = () => {
    console.log('submit clicked');
  };

  return (
    <section className="contact">
      <h1 className="contact__heading text-2xl">Contact Me</h1>
      <form id="contact-form" className="w-full max-w-sm">
        <div className="input__container md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Name:
            </label>
          </div>
          <div class="md:w-2/3">
            <input className="w-full p-2" type="text" name="name" />
          </div>
        </div>
        <div className="input__container md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="email"
              >
                Email:
            </label>
          </div>
          <div class="md:w-2/3">
            <input className="w-full p-2" type="email" name="email" />
          </div>
        </div>
        <div className="input__container md:flex md:items-center mb-6">
        <div className="md:w-1/3">
            <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="message"
              >
                Message:
            </label>
          </div>
          <div class="md:w-2/3">
            <textarea className="w-full p-2" name="message" rows="5"  />
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <Button type="submit" onClick={handleClick} text="Submit" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
