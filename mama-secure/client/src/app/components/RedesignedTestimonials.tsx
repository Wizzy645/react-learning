'use client';

import React from 'react';

let testimonials = [
  {
    id: 1,
    name: "Samuel",
    location: "Lagos",
    quote: "MamaSecure helped me avoid a fake loan scam. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Amina",
    location: "Abuja",
    quote: "I feel much safer knowing MamaSecure is watching out for scams.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Chinedu",
    location: "Port Harcourt",
    quote: "The real-time scam alerts are a game changer for me.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

export default function RedesignedTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-tr from-[#0b1221] via-[#121a2a] to-[#0b1221]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-green-400 mb-12 tracking-wide drop-shadow-lg">
          Trusted by Nigerians
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map(({ id, name, location, quote, avatar }) => (
            <div
              key={id}
              className="bg-[#1f2a47] rounded-2xl p-8 shadow-lg hover:shadow-green-500/70 transition-shadow duration-400 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={id * 200}
              role="group"
              tabIndex={0}
              aria-label={`Testimonial from ${name} in ${location}`}
            >
              <div className="flex items-center justify-center mb-6">
                <img
                  src={avatar}
                  alt={`Avatar of ${name}`}
                  className="w-20 h-20 rounded-full border-4 border-green-400 shadow-md object-cover"
                />
              </div>
              <blockquote className="text-gray-300 italic text-lg leading-relaxed mb-6">
                “{quote}”
              </blockquote>
              <p className="text-green-400 font-semibold text-xl">
                {name}
                <span className="text-gray-400 text-sm block mt-1">{location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
