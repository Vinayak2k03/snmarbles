export interface Product {
  id: number;
  name: string;
  description: string;
  category: 'Premium' | 'Commercial' | 'Designer';
  finish: 'Polished' | 'Honed' | 'Matte';
  size: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Marble",
    description: "Timeless elegance with pure white base and subtle grey veining. Perfect for luxury interiors.",
    category: "Premium",
    finish: "Polished",
    size: "240 x 120 cm",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80"
  },
  {
    id: 2,
    name: "Italian Beige Marble",
    description: "Warm beige tones with natural patterns. Ideal for living spaces and commercial lobbies.",
    category: "Premium",
    finish: "Polished",
    size: "240 x 120 cm",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  {
    id: 3,
    name: "Rainforest Green Marble",
    description: "Distinctive green patterns inspired by nature. A statement piece for designer interiors.",
    category: "Designer",
    finish: "Polished",
    size: "200 x 100 cm",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80"
  },
  {
    id: 4,
    name: "Black Galaxy Granite",
    description: "Deep black with golden speckles. Durable and perfect for high-traffic commercial areas.",
    category: "Commercial",
    finish: "Polished",
    size: "240 x 120 cm",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
  },
  {
    id: 5,
    name: "Carrara White Marble",
    description: "Classic Italian-style marble with soft grey veining on white background.",
    category: "Premium",
    finish: "Honed",
    size: "240 x 120 cm",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
  },
  {
    id: 6,
    name: "Emperador Brown Marble",
    description: "Rich brown tones with intricate veining. Adds warmth to any space.",
    category: "Designer",
    finish: "Polished",
    size: "220 x 110 cm",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
  },
  {
    id: 7,
    name: "Makrana White Marble",
    description: "Premium quality Makrana marble, the same used in the Taj Mahal. Exceptionally durable.",
    category: "Premium",
    finish: "Polished",
    size: "240 x 120 cm",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  {
    id: 8,
    name: "Grey Onyx Marble",
    description: "Sophisticated grey with translucent properties. Perfect for backlit applications.",
    category: "Designer",
    finish: "Matte",
    size: "180 x 90 cm",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
  },
  {
    id: 9,
    name: "Ivory Cream Marble",
    description: "Soft ivory tones for a subtle, elegant look. Great for flooring and wall cladding.",
    category: "Commercial",
    finish: "Honed",
    size: "240 x 120 cm",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
  },
  {
    id: 10,
    name: "Statuario Marble",
    description: "Premium white marble with bold grey veining. The epitome of luxury.",
    category: "Premium",
    finish: "Polished",
    size: "240 x 120 cm",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80"
  },
  {
    id: 11,
    name: "Bottochino Marble",
    description: "Warm beige marble with fine veining. Popular for residential projects.",
    category: "Commercial",
    finish: "Matte",
    size: "200 x 100 cm",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80"
  },
  {
    id: 12,
    name: "Spider Green Marble",
    description: "Exotic green marble with web-like patterns. A unique designer choice.",
    category: "Designer",
    finish: "Polished",
    size: "200 x 100 cm",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
  }
];

export const categories = ['All', 'Premium', 'Designer', 'Commercial'] as const;
export const finishes = ['All', 'Polished', 'Honed', 'Matte'] as const;
