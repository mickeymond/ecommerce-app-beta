// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <p className="text-center text-sm">Copyright © 2023 My Website. All rights reserved.</p>
        <nav className="flex justify-center mt-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
            </li>
          </ul>
        </nav>
        <ul className="flex justify-center mt-6 space-x-4">
          <li>
            <a href="https://www.facebook.com/mywebsite" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
              <i className="fab fa-facebook-f fa-lg" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/mywebsite" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
              <i className="fab fa-twitter fa-lg" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mywebsite" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
              <i className="fab fa-instagram fa-lg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;