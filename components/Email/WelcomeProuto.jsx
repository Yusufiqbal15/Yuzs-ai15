import React from 'react'

const WelcomeProuto = () => {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Divyansh, Welcome to Prouto!
      </h1>
      <p className="text-gray-600 text-base">
        Your number is verified. Your next step is to complete the 7-step onboarding process.
      </p>
      <div className="mt-6">
        <a
          href="https://your-link-here.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          Link Here
        </a>
      </div>
      <footer className="mt-8 text-gray-400 text-sm">
        © 2025 Prouto. All rights reserved.
      </footer>
    </div>
  );
};

export default WelcomeProuto
