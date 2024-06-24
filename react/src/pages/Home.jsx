import React from 'react';
import bghome from '../images/bg-home.jpg';

const Home = () => {
  return (
    <div>
      <div>
        <img src={bghome} alt="" width="100%" height="auto" />
      </div>
      <div className="p-5 bg-secondary-subtle">
        <h3 className="text-xl">NEW PRODUCT</h3>
        <h2 className="text-red-600 text-3xl">The Twist of Healthy Yogurt</h2>
        <p className="text-lg">
          This website template has been designed by <br />
          Website Templates
          <br />
          for you, for free. You can replace all this text with your own text.
        </p>
      </div>
    </div>
  );
};

export default Home;
