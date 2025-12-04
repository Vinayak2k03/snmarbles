'use client';

import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    alt: 'Living room with white marble flooring',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  },
  {
    id: 2,
    alt: 'Modern kitchen with marble countertops',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 3,
    alt: 'Hotel lobby with beige marble walls',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 4,
    alt: 'Bathroom with premium marble tiles',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    id: 5,
    alt: 'Corporate office reception with marble accents',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  },
  {
    id: 6,
    alt: 'Outdoor patio with marble flooring',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-amber-700 font-semibold mb-4 tracking-wide uppercase text-sm">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            Project Highlights
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            See how our premium marble transforms spaces. From elegant homes to stunning commercial projects.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-amber-700 text-white text-xs font-medium rounded-full mb-2">
                    {item.category}
                  </span>
                  <p className="text-white text-lg font-medium">
                    {item.alt}
                  </p>
                </div>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-stone-600 mb-4">Want to see more of our work?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center text-amber-700 font-semibold hover:text-amber-800 transition-colors"
          >
            Contact us for a portfolio
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
