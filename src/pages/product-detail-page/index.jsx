import React from 'react';
import Header from '../../components/ui/Header';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import ProductTabs from './components/ProductTabs';
import CompleteTheLook from './components/CompleteTheLook';
import StyleItYourWay from './components/StyleItYourWay';
import RecentlyViewed from './components/RecentlyViewed';
import Icon from '../../components/AppIcon';

const ProductDetailPage = () => {
  // Mock product data
  const product = {
    id: 1,
    name: "Serenity Flow Leggings",
    category: "Performance Leggings",
    price: 128,
    originalPrice: 160,
    rating: 4.8,
    reviewCount: 247,
    stock: 15,
    isNew: true,
    mainImage: "https://images.unsplash.com/photo-1506629905607-d5b4671b4b4e?w=800&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506629905607-d5b4671b4b4e?w=800&h=800&fit=crop"
    ],
    colors: [
      { name: "Sage Green", hex: "#E8EDE7" },
      { name: "Charcoal", hex: "#2C2C2C" },
      { name: "Warm Beige", hex: "#F5F1EB" },
      { name: "Muted Rose", hex: "#F0E6E1" }
    ],
    sizes: [
      { value: "XS", available: true },
      { value: "S", available: true },
      { value: "M", available: true },
      { value: "L", available: true },
      { value: "XL", available: false }
    ],
    description: `The Serenity Flow Leggings embody the perfect fusion of performance and elegance. Crafted from our signature four-way stretch fabric, these leggings move with your body through every pose, sprint, and stretch. The high-waisted design provides gentle compression and support, while the buttery-soft texture feels like a second skin.\n\nDesigned for the woman who flows seamlessly from morning yoga to afternoon meetings, these leggings feature a timeless silhouette that pairs beautifully with our coordinating tops or your favorite oversized sweater.`,
    features: [
      "Four-way stretch fabric for unrestricted movement",
      "High-waisted design with gentle compression",
      "Moisture-wicking technology keeps you dry",
      "Flatlock seams prevent chafing",
      "Hidden waistband pocket for essentials",
      "Squat-proof fabric with opacity guarantee",
      "UPF 50+ sun protection",
      "Pill-resistant and fade-resistant"
    ],
    specifications: {
      fabric: "78% Recycled Polyester, 22% Elastane",
      weight: "240 GSM",
      inseam: "25 inches (Size M)",
      rise: "High-rise (10 inches)",
      compression: "Medium",
      opacity: "100% squat-proof",
      sustainability: "Made from 12 recycled plastic bottles"
    },
    careInstructions: [
      "Machine wash cold with like colors",
      "Use gentle cycle and mild detergent",
      "Do not use fabric softener or bleach",
      "Hang dry or tumble dry on low heat",
      "Do not iron or dry clean",
      "Store flat to maintain shape"
    ],
    sustainabilityFeatures: [
      {
        title: "Recycled Materials",
        description: "Made from 78% recycled polyester from plastic bottles"
      },
      {
        title: "Carbon Neutral Shipping",
        description: "All orders shipped with carbon-neutral delivery"
      },
      {
        title: "Ethical Manufacturing",
        description: "Produced in Fair Trade certified facilities"
      },
      {
        title: "Circular Design",
        description: "Designed for longevity with take-back program"
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        size: "Size M",
        bodyType: "Athletic",
        date: "2 weeks ago",
        comment: "These leggings are absolutely perfect! The fabric is so soft and stretchy, and they stay put during my entire workout. The high waist is flattering and doesn't roll down. Worth every penny!"
      },
      {
        id: 2,
        author: "Jessica L.",
        rating: 5,
        size: "Size S",
        bodyType: "Petite",
        date: "1 month ago",
        comment: "I've been searching for the perfect leggings for years, and these are it! They're comfortable enough for lounging but stylish enough for running errands. The sage green color is gorgeous."
      },
      {
        id: 3,
        author: "Amanda K.",
        rating: 4,
        size: "Size L",
        bodyType: "Curvy",
        date: "3 weeks ago",
        comment: "Love the quality and fit of these leggings. They\'re true to size and very flattering. The only reason I\'m giving 4 stars instead of 5 is that I wish they came in more colors!"
      }
    ]
  };

  // Mock recommendations data
  const recommendations = [
    {
      id: 2,
      name: "Flow State Sports Bra",
      price: 68,
      originalPrice: 85,
      rating: 4.7,
      reviewCount: 189,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Mindful Movement Tank",
      price: 58,
      rating: 4.6,
      reviewCount: 156,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Serenity Wrap Jacket",
      price: 148,
      originalPrice: 185,
      rating: 4.9,
      reviewCount: 203,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop"
    }
  ];

  // Mock customer photos data
  const customerPhotos = [
    {
      id: 1,
      author: "Emma R.",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
      likes: 24,
      comments: 3,
      date: "3 days ago",
      caption: "Perfect for my morning yoga session! Love how these move with me.",
      tags: ["yoga", "morning", "flexibility"]
    },
    {
      id: 2,
      author: "Sophia T.",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      likes: 31,
      comments: 7,
      date: "1 week ago",
      caption: "From gym to coffee date - these leggings do it all!",
      tags: ["versatile", "style", "comfort"]
    },
    {
      id: 3,
      author: "Maya P.",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
      likes: 18,
      comments: 2,
      date: "5 days ago",
      caption: "The sage green color is even more beautiful in person!",
      tags: ["color", "beautiful", "quality"]
    },
    {
      id: 4,
      author: "Ava L.",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1506629905607-d5b4671b4b4e?w=400&h=400&fit=crop",
      likes: 42,
      comments: 9,
      date: "2 weeks ago",
      caption: "These have become my go-to leggings for everything!",
      tags: ["favorite", "everyday", "comfort"]
    }
  ];

  // Mock recently viewed products
  const recentlyViewed = [
    {
      id: 5,
      name: "Harmony High-Waist Shorts",
      price: 78,
      originalPrice: 98,
      rating: 4.5,
      reviewCount: 134,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=300&fit=crop",
      isNew: false,
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Navy", hex: "#1a365d" },
        { name: "Sage", hex: "#E8EDE7" }
      ]
    },
    {
      id: 6,
      name: "Zen Cropped Hoodie",
      price: 118,
      rating: 4.8,
      reviewCount: 167,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      isNew: true,
      colors: [
        { name: "Cream", hex: "#FEFCFA" },
        { name: "Rose", hex: "#F0E6E1" }
      ]
    },
    {
      id: 7,
      name: "Balance Biker Shorts",
      price: 68,
      rating: 4.6,
      reviewCount: 98,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
      isNew: false,
      colors: [
        { name: "Charcoal", hex: "#2C2C2C" },
        { name: "Beige", hex: "#F5F1EB" },
        { name: "Sage", hex: "#E8EDE7" },
        { name: "Rose", hex: "#F0E6E1" }
      ]
    },
    {
      id: 8,
      name: "Flow State Tank",
      price: 58,
      originalPrice: 72,
      rating: 4.7,
      reviewCount: 145,
      image: "https://images.unsplash.com/photo-1506629905607-d5b4671b4b4e?w=300&h=300&fit=crop",
      isNew: false,
      colors: [
        { name: "White", hex: "#FFFFFF" },
        { name: "Sage", hex: "#E8EDE7" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Home</span>
            <Icon name="ChevronRight" size={16} />
            <span>Performance Collection</span>
            <Icon name="ChevronRight" size={16} />
            <span className="text-foreground">{product?.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <ProductImageGallery product={product} />
            </div>

            {/* Product Information */}
            <div>
              <ProductInfo product={product} />
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProductTabs product={product} />
        </div>

        {/* Complete the Look */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <CompleteTheLook recommendations={recommendations} />
        </div>

        {/* Style It Your Way */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <StyleItYourWay customerPhotos={customerPhotos} />
        </div>

        {/* Recently Viewed */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <RecentlyViewed products={recentlyViewed} />
        </div>

        {/* Footer */}
        <footer className="bg-card mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-accent font-medium text-lg">L</span>
                  </div>
                  <span className="font-accent font-medium text-xl">LuxeActive</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Elevating your everyday through thoughtfully designed activewear that celebrates the modern woman's journey.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-4">Shop</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-premium">Performance Collection</a></li>
                  <li><a href="#" className="hover:text-foreground transition-premium">Lounge Collection</a></li>
                  <li><a href="#" className="hover:text-foreground transition-premium">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-foreground transition-premium">Sale</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-premium">Size Guide</a></li>
                  <li><a href="#" className="hover:text-foreground transition-premium">Care Instructions</a></li>
                  <li><a href="#" className="hover:text-foreground transition-premium">Returns & Exchanges</a></li>
                  <li><a href="#" className="hover:text-foreground transition-premium">Contact Us</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4">Connect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-premium">Instagram</a></li>
                  <li><a href="#" className="hover:text-foreground transition-premium">Pinterest</a></li>
                  <li><a href="#" className="hover:text-foreground transition-premium">Newsletter</a></li>
                  <li><a href="#" className="hover:text-foreground transition-premium">Community</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} LuxeActive. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-premium">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-premium">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ProductDetailPage;