import React from 'react';
import { Button } from "./ui/Button";
import Image from 'next/image';

interface HeroProps {
  className?: string;
}

const HeroComponent: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section className={`bg-[#FFF] py-10 px-6 md:px-12 lg:px-20 ${className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D1B4E] leading-tight tracking-tight">
            ARULA for Autism
          </h1>

          {/* Subheading */}
          <h2 className="text-xl m-auto md:text-2xl font-semibold text-[#2D1B4E]">
            <span className='bg-[#e5dbfe]'>
            The Ultimate Therapy Solution for Autism
            </span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-700 max-w-xl">
            A Completely Home-Based Treatment to ensure Promising Results in All Areas of Development
          </p>

          {/* Star Rating */}
          <div className="flex gap-1 my-2">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 fill-yellow-400"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <svg
              className="w-6 h-6 fill-yellow-400"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="half-star">
                  <stop offset="50%" stopColor="#FBBF24" />
                  <stop offset="50%" stopColor="#E5E7EB" />
                </linearGradient>
              </defs>
              <path
                fill="url(#half-star)"
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              />
            </svg>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"
                />
              ))}
            </div>
            <p className="text-base md:text-lg italic text-gray-700">
              Trusted by 200+ families worldwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary">
              Talk to an ARULA Guide
            </Button>
            <Button variant="outline">
              Take our Questionnaire
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/hero1.png"
              alt="Hero illustration"
              fill
              className="object-contain p-8"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
