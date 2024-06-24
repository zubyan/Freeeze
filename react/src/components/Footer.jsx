import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../icons/facebook.png';
import gmail from '../icons/gmail2.png';
import instagram from '../icons/instagram.png';
import twitter from '../icons/twitter.png';
import whatsapp from '../icons/whatsapp.png';

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full">
      <div className="card p-3 bg-gray-200 text-gray-800">
        <div className="flex justify-evenly">
          <Link to="#">
            <img src={facebook} alt="Facebook" className="h-8 w-auto" />
          </Link>
          <Link to="#">
            <img src={gmail} alt="Gmail" className="h-8 w-auto" />
          </Link>
          <Link to="#">
            <img src={instagram} alt="Instagram" className="h-8 w-auto" />
          </Link>
          <Link to="#">
            <img src={twitter} alt="Twitter" className="h-9 w-auto" />
          </Link>
          <Link to="#">
            <img src={whatsapp} alt="WhatsApp" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="p-3 flex justify-center">
          <h6>© 2024 Freeeze. All Rights Reserved.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
