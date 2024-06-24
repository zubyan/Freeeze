import React from 'react';
import { Link } from 'react-router-dom';
import newchills from '../images/new-chills.png';
import berries from '../images/berries.png';

const Blog = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden p-3">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              Roof party normcore before they sold out, cornhole vape
            </h2>
            <p className="leading-relaxed mb-8">
              Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
              portland. VHS man braid palo santo hoodie brunch trust fund.
              Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie
              chambray 90's, slow-carb etsy tumeric. Cray pug you probably
              haven't heard of them hexagon kickstarter craft beer pork chic.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
              </a>
            </div>
            <Link className="inline-flex items-center">
              <img
                alt="blog"
                src={newchills}
                className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
              />
            </Link>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              Pinterest DIY dreamcatcher gentrify single-origin coffee
            </h2>
            <p className="leading-relaxed mb-8">
              Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
              portland. VHS man braid palo santo hoodie brunch trust fund.
              Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie
              chambray 90's, slow-carb etsy tumeric.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
              </a>
            </div>
            <Link className="inline-flex items-center">
              <img
                alt="blog"
                src={berries}
                className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
