import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wishlist, setWishlist] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Pieces', count: 24 },
    { id: 'sets', name: 'Lounge Sets', count: 8 },
    { id: 'joggers', name: 'Joggers', count: 6 },
    { id: 'tops', name: 'Tops', count: 10 }
  ];

  const products = [
    {
      id: 1,
      name: "Cloud Nine Lounge Set",
      price: 128,
      originalPrice: 160,
      category: 'sets',
      colors: ['#F5F1EB', '#2C2C2C', '#E8EDE7'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      image: "/assets/images/IMG-20250812-WA0010.jpg",
      badge: 'Bestseller',
      rating: 4.8,
      reviews: 234,
      isNew: false
    },
    {
      id: 2,
      name: "Butter Soft Joggers",
      price: 68,
      category: 'joggers',
      colors: ['#F5F1EB', '#2C2C2C', '#F0E6E1'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      image: "/assets/images/IMG-20250812-WA0024.jpg",
      badge: 'Sustainable',
      rating: 4.9,
      reviews: 189,
      isNew: true
    },
    {
      id: 3,
      name: "Cozy Cropped Hoodie",
      price: 78,
      category: 'tops',
      colors: ['#E8EDE7', '#F0E6E1', '#2C2C2C'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      image: "/assets/images/IMG-20250812-WA0018.jpg",
      rating: 4.7,
      reviews: 156,
      isNew: false
    },
    {
      id: 4,
      name: "Weekend Lounge Set",
      price: 98,
      originalPrice: 120,
      category: 'sets',
      colors: ['#F5F1EB', '#E8EDE7'],
      sizes: ['S', 'M', 'L', 'XL'],
      image: "/assets/images/IMG-20250812-WA0017.jpg",
      badge: 'Limited Edition',
      rating: 4.6,
      reviews: 98,
      isNew: true
    },
    {
      id: 5,
      name: "Relaxed Fit Tee",
      price: 48,
      category: 'tops',
      colors: ['#FEFCFA', '#F5F1EB', '#2C2C2C', '#E8EDE7'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      image: "/assets/images/IMG-20250812-WA0016.jpg",
      rating: 4.8,
      reviews: 267,
      isNew: false
    },
    {
      id: 6,
      name: "Comfort Wide Leg Pants",
      price: 88,
      category: 'joggers',
      colors: ['#2C2C2C', '#F0E6E1', '#E8EDE7'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      image: "/assets/images/IMG-20250812-WA0015.jpg",
      badge: 'Organic Cotton',
      rating: 4.9,
      reviews: 145,
      isNew: true
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products?.filter(product => product?.category === selectedCategory);

  const toggleWishlist = (productId) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist?.has(productId)) {
      newWishlist?.delete(productId);
    } else {
      newWishlist?.add(productId);
    }
    setWishlist(newWishlist);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-4">
            Lounge Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pieces designed for comfort without compromising on style. 
            From lazy mornings to casual outings.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-premium ${
                selectedCategory === category?.id
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
            >
              {category?.name} ({category?.count})
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts?.map((product) => (
            <div key={product?.id} className="group">
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-premium">
                {/* Product Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={product?.image}
                    alt={product?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-premium-slow"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product?.badge && (
                      <span className="bg-foreground text-background text-xs font-medium px-3 py-1 rounded-full">
                        {product?.badge}
                      </span>
                    )}
                    {product?.isNew && (
                      <span className="bg-accent text-foreground text-xs font-medium px-3 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product?.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-premium"
                  >
                    <Icon 
                      name="Heart" 
                      size={18} 
                      className={wishlist?.has(product?.id) ? 'text-error fill-current' : 'text-muted-foreground'} 
                    />
                  </button>

                  {/* Quick Actions */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-premium">
                    <div className="flex gap-2">
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        fullWidth
                        iconName="Eye"
                        iconPosition="left"
                      >
                        Quick View
                      </Button>
                      <Button 
                        variant="default" 
                        size="sm" 
                        fullWidth
                        iconName="ShoppingBag"
                        iconPosition="left"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-medium text-foreground text-lg mb-1">
                        {product?.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={14} className="text-warning fill-current" />
                          <span className="text-sm text-foreground">{product?.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({product?.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Colors */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Colors:</span>
                      <div className="flex gap-1">
                        {product?.colors?.map((color, index) => (
                          <div
                            key={index}
                            className="w-5 h-5 rounded-full border-2 border-border"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Sizes */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Sizes:</span>
                      <span className="text-sm text-foreground">
                        {product?.sizes?.join(', ')}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-xl font-medium text-foreground">
                        ${product?.price}
                      </span>
                      {product?.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${product?.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            iconName="Plus"
            iconPosition="left"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;