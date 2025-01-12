import React from "react";

function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center px-4 sm:px-6 lg:px-16 py-8 gap-10">
      {/* Form Section */}
      <form className="p-6 bg-white shadow rounded w-full max-w-md md:max-w-lg lg:max-w-xl border border-gray-300">
        <div className="flex items-center mb-6">
          <img
            src="/images/purepng.com-mail-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596075clftr.png"
            alt="Email Icon"
            className="w-12 h-10 mr-3"
          />
          <h1 className="text-xl md:text-2xl font-bold">Get in touch</h1>
        </div>

        {/* Name */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1 text-sm md:text-base">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 md:p-3 focus:outline-none focus:border-blue-500"
            placeholder="Name"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1 text-sm md:text-base">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded p-2 md:p-3 focus:outline-none focus:border-blue-500"
            placeholder="Email"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1 text-sm md:text-base">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 md:p-3 focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder="Message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-purple-500 text-white py-2 md:py-3 rounded hover:bg-purple-600 transition">
          Submit
        </button>
      </form>

      {/* Social Media Section */}
      <div className="flex flex-col justify-start w-full max-w-md">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          You can contact me through these social media channels.
        </h2>
        {/* Facebook */}
        <a
          href="https://www.facebook.com/titiwat.chuyoung.2024/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-3 hover:text-blue-500 transition"
        >
          <img
            src="/images/Facebook_Logo_(2019).png"
            alt="Facebook"
            className="w-8 h-8 mr-2"
          />
          <p className="text-sm md:text-base">Titiwat Chuyoung</p>
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/Titiwat-Chuyoung"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-3 hover:text-gray-700 transition"
        >
          <img
            src="/images/25231.png"
            alt="GitHub"
            className="w-8 h-8 mr-2"
          />
          <p className="text-sm md:text-base">Titiwat-Chuyoung</p>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/aun_titiwat/profilecard/?igsh=MWFvbndpdzJrMGlrdA=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-pink-500 transition"
        >
          <img
            src="/images/Instagram_icon.png"
            alt="Instagram"
            className="w-8 h-8 mr-2"
          />
          <p className="text-sm md:text-base">aun_titiwat</p>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
