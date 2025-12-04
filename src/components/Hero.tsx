'use client';

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
    >
      {/* Background with marble texture effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="marble-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q25 30 50 50 T100 50" stroke="#a8a29e" strokeWidth="0.5" fill="none" opacity="0.5"/>
                <path d="M0 70 Q30 50 60 70 T100 60" stroke="#78716c" strokeWidth="0.3" fill="none" opacity="0.3"/>
                <path d="M20 0 Q40 30 20 60 T30 100" stroke="#d6d3d1" strokeWidth="0.4" fill="none" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#marble-pattern)"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
            Kishangarh&apos;s Leading Stone Hub
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 mb-6 leading-tight">
            Premium Marble Slabs
            <span className="block text-amber-700">from Kishangarh</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl text-stone-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            S.N. Marbles sources, processes, and delivers high-quality marble slabs across India, 
            with customized solutions for homes, offices, and large commercial projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleScroll('#products')}
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-800 font-semibold rounded-lg border-2 border-stone-300 hover:border-amber-700 hover:text-amber-700 transition-colors duration-200"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '50+', label: 'Marble Varieties' },
              { value: 'Pan-India', label: 'Delivery Network' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-700">{stat.value}</div>
                <div className="text-sm md:text-base text-stone-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
