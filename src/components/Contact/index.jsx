import React, { useState } from 'react';
import { capitalizeFirstLetter, validateEmail } from '../../utils/helpers';

// Components.
import Button from '../Button';

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const {
    name,
    email,
    message,
  } = formState;
  const [errorMessages, setErrorMessages] = useState({
    'email': '',
    'name': '',
    'message': '',
  });
  const {
    email: emailErr,
    name: nameErr,
    message: msgErr,
  } = errorMessages;

  const handleInputBlur = (event) => {
    if (event.target.name === 'email') {
      const emailValid = validateEmail(event.target.value);

      if (!emailValid) {
        setErrorMessages({...errorMessages, 'email': 'Your email is invalid.'});
      } else {
        setErrorMessages({...errorMessages, 'email': ''});
      }
    }

    if (event.target.name === 'name' || event.target.name === 'message') {
      if (!event.target.value.length) {
        setErrorMessages({...errorMessages, [event.target.name]: `${capitalizeFirstLetter(event.target.name)} is required.`});
      } else {
        setErrorMessages({...errorMessages, [event.target.name]: ''});
      }
    }

    const weHaveErrors = emailErr|| nameErr || msgErr;

    if (!weHaveErrors) {
      setFormState({...formState, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (! formState.email) {
      console.log('No email, no contact!'); // eslint-disable-line no-console
    } else {
      console.log(formState); // eslint-disable-line no-console
    }
  };

  return (
    <section className="contact">
      <h1 className="contact__heading text-2xl mb-4">Contact Me</h1>
      <p className="contact__description mb-4">Front-end form for demonstration only!</p>
      <form
        id="contact-form"
        className="w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <div className="input__container md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Name:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full p-2"
              type="text"
              name="name"
              defaultValue={name}
              onBlur={(value) => handleInputBlur(value)}
            />
            {nameErr && (
              <p className="error-text text-red-600 text-sm">{nameErr}</p>
            )}
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
          <div className="md:w-2/3">
            <input
              className="w-full p-2"
              type="email"
              name="email"
              defaultValue={email}
              onBlur={(value) => handleInputBlur(value)}
            />
            {emailErr && (
              <p className="error-text text-red-600 text-sm">{emailErr}</p>
            )}
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
          <div className="md:w-2/3">
            <textarea
              className="w-full p-2"
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={(value) => handleInputBlur(value)}
            />
            {msgErr && (
              <p className="error-text text-red-600 text-sm">{msgErr}</p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <Button type="submit" text="Submit" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
