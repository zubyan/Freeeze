import React, { useState } from 'react';

const Suggestion = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  async function GiveSuggestion() {
    let data = { email, message };
    console.log(data);

    let response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then(console.log);
  }

  return (
    <section className="text-gray-600 body-font relative p-3">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.8745121294005!2d71.71531407609164!3d29.406897172642566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9134a85cdc97%3A0x7654885d8e2b376!2sCakes%20Valley%20-%20City%20Phase%201%2C%20Bahawalpur!5e0!3m2!1sen!2s!4v1718192005327!5m2!1sen!2s"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            GiveSuggestion();
          }}
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Suggestion
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Give your suggestion below.
          </p>
          <fieldset className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </fieldset>
          <button
            type="submit"
            className="text-black bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Suggestion;
