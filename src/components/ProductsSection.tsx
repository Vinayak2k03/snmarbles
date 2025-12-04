'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { products, categories, finishes, Product } from '@/data/products';

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            product.category === 'Premium' ? 'bg-amber-100 text-amber-800' :
            product.category === 'Designer' ? 'bg-purple-100 text-purple-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-stone-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-stone-500">Finish:</span>
            <span className="font-medium text-stone-700">{product.finish}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-stone-500">Size:</span>
            <span className="font-medium text-stone-700">{product.size}</span>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-4 w-full py-2.5 px-4 bg-stone-100 text-stone-700 font-medium rounded-lg hover:bg-amber-700 hover:text-white transition-colors duration-200">
          Request Quote
        </button>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFinish, setSelectedFinish] = useState<string>('All');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const finishMatch = selectedFinish === 'All' || product.finish === selectedFinish;
      return categoryMatch && finishMatch;
    });
  }, [selectedCategory, selectedFinish]);

  return (
    <section id="products" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-amber-700 font-semibold mb-4 tracking-wide uppercase text-sm">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            Our Marble Collections
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Explore our curated selection of premium marble slabs, sourced from the finest quarries 
            and processed to perfection.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-stone-600 font-medium self-center mr-2">Category:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-amber-700 text-white'
                    : 'bg-white text-stone-600 hover:bg-amber-100 hover:text-amber-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Finish Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-stone-600 font-medium self-center mr-2">Finish:</span>
            {finishes.map((finish) => (
              <button
                key={finish}
                onClick={() => setSelectedFinish(finish)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedFinish === finish
                    ? 'bg-amber-700 text-white'
                    : 'bg-white text-stone-600 hover:bg-amber-100 hover:text-amber-800'
                }`}
              >
                {finish}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-center text-stone-500 mb-8">
          Showing {filteredProducts.length} of {products.length} products
        </p>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-stone-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-stone-500 text-lg">No products match your filters.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSelectedFinish('All'); }}
              className="mt-4 text-amber-700 font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
