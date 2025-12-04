import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 rounded-2xl overflow-hidden">
              <Image
                src="/snmarbles.jpeg"
                alt="S.N. Marbles Facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-2xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-amber-700 font-semibold mb-4 tracking-wide uppercase text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-6">
              About S.N. Marbles
            </h2>
            
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                Located in <strong className="text-stone-800">Kishangarh, Rajasthan</strong> — one of India&apos;s 
                largest and most renowned marble trading hubs — S.N. Marbles has established itself as a trusted 
                name in the natural stone industry. Our strategic location gives us direct access to the finest 
                marble varieties sourced from quarries across India and around the world.
              </p>
              
              <p>
                At S.N. Marbles, we are committed to delivering <strong className="text-stone-800">exceptional quality, 
                consistent finishing, and reliable service</strong>. Whether you&apos;re designing a luxury residence, 
                a corporate office, or a large-scale commercial project, we provide customized marble solutions 
                that meet your exact specifications.
              </p>
              
              <p>
                We are currently building a <strong className="text-stone-800">digital platform</strong> to make 
                our extensive marble catalog accessible online, allowing customers to explore our products, 
                request samples, and connect with us seamlessly. This website marks the first phase of our 
                digital transformation journey.
              </p>
            </div>

            {/* MVP Notice */}
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> This is an MVP version of our digital catalog platform. Additional features 
                such as admin dashboard, real-time inventory management, and customer portal are under development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
