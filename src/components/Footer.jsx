import React from 'react';
/* eslint-disable */
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10  absolute w-100 bottom-0 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">

        {/* About Section */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">عن خصوصي</h4>
          <p className="text-sm">
            خصوصي هي أكاديمية تعليمية أونلاين فى مختلف المراحل و المجالات.
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">تواصل معنا</h4>
          <ul className="text-sm space-y-2">
            <li>
              <i className="fas fa-map-marker-alt"></i> القاهرة, مصر
            </li>
            <li>
              <i className="fas fa-phone-alt"></i> 01008264260
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@khososy.net
            </li>
          </ul>
        </div>

        {/* Teachers Service */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">خدمة المدرسين</h4>
          <ul className="text-sm space-y-2">
            <li>شروط الاستخدام</li>
            <li>شروط الاستخدام المعلمين و الشركاء</li>
          </ul>
        </div>

        {/* Students Service */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">خدمة الطلاب</h4>
          <p className="text-sm">01008264260</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="bg-black py-4 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Copyright Text */}
          <p className="text-sm">
            © 2023 جميع الحقوق محفوظة لدى خصوصي أكاديمي
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaFacebookF className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
