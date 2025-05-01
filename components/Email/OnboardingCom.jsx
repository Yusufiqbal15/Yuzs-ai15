'use client';

import React, { useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

const OnboardingCom = () => {
  const [mounted, setMounted] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    setMounted(true); // ensure we're on client
    setIsExploding(true);
  }, []);

  if (!mounted) return null; // avoid SSR issues

  return (
    <div className="relative max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md text-center overflow-hidden">
      {isExploding && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50">
          <ConfettiExplosion
            force={0.8}
            duration={3000}
            particleCount={200}
            width={400}
          />
        </div>
      )}

      <h1 className="text-2xl font-bold text-green-600 mb-4">
        🎉 Congratulations!
      </h1>
      <p className="text-gray-600 text-base">
        Your onboarding process is complete.
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

export default OnboardingCom;
