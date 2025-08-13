import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedCollections = () => {
  const collections = [
    {
      id: 'performance',
      name: 'Gym Set',
      tagline: 'Power Through Every Rep',
      description: 'High-performance pieces engineered for your most intense workouts. Moisture-wicking, four-way stretch, and built to move with you.',
      image: "assets/images/IMG-20250812-WA0023.jpg",
      features: ['Moisture-Wicking', 'Four-Way Stretch', 'Anti-Odor Technology'],
      link: '/performance-collection',
      color: 'bg-gradient-to-br from-rose-100 to-rose-200'
    },
    {
      id: 'lounge',
      name: 'Lounge Collection',
      tagline: 'Comfort Meets Elegance',
      description: 'Luxuriously soft pieces that transition effortlessly from home to street. Comfort that never compromises on style.',
      image: "assets/images/IMG-20250812-WA0018.jpg",
      features: ['Ultra-Soft Fabrics', 'Relaxed Fit', 'Versatile Styling'],
      link: '/lounge-collection',
      color: 'bg-gradient-to-br from-sage-100 to-sage-200'
    }
  ];

  const newArrivals = [
    {
      id: 1,
      name: 'Sculpt Leggings',
      price: 128,
      image: "assets/images/IMG-20250812-WA0024.jpg",
      colors: ['Black', 'Sage', 'Rose'],
      isNew: true
    },
    {
      id: 2,
      name: 'Flow Sports Bra',
      price: 68,
      image: "assets/images/IMG-20250812-WA0025.jpg",
      colors: ['White', 'Black', 'Sage'],
      isNew: true
    },
    {
      id: 3,
      name: 'Comfort Cardigan',
      price: 148,
      image: "assets/images/IMG-20250812-WA0022.jpg",
      colors: ['Cream', 'Rose', 'Charcoal'],
      isNew: true
    },
    {
      id: 4,
      name: 'Essential Tank',
      price: 58,
      image: "assets/images/WhatsApp Image 2025-08-13 at 00.40.35_d7f361b3.jpg",
      colors: ['White', 'Black', 'Sage', 'Rose'],
      isNew: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Collections */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-accent text-3xl lg:text-4xl font-medium text-foreground mb-4">
              Signature Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two distinct collections designed for every aspect of your active lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collections?.map((collection) => (
              <div
                key={collection?.id}
                className="group relative overflow-hidden rounded-2xl bg-background shadow-premium hover:shadow-premium-hover transition-premium"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={collection?.image}
                    alt={collection?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-premium-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-accent text-xl lg:text-2xl font-medium mb-2">
                    {collection?.name}
                  </h3>
                  <p className="text-sm font-medium mb-3 text-white/90">
                    {collection?.tagline}
                  </p>
                  <p className="text-sm text-white/80 mb-4 leading-relaxed">
                    {collection?.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {collection?.features?.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <Link to={collection?.link}>
                    <Button
                      variant="default"
                      size="sm"
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="bg-white text-charcoal hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-premium"
                    >
                      Shop Collection
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-accent text-2xl lg:text-3xl font-medium text-foreground mb-2">
                New Arrivals
              </h2>
              <p className="text-muted-foreground">
                Fresh pieces to elevate your wardrobe
              </p>
            </div>
            <Link to="/performance-collection">
              <Button
                variant="outline"
                iconName="ArrowRight"
                iconPosition="right"
              >
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals?.map((product) => (
              <Link
                key={product?.id}
                to="/product-detail-page"
                className="group bg-background rounded-xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-premium"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <Image
                    src={product?.image}
                    alt={product?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-premium-slow"
                  />
                  {product?.isNew && (
                    <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
                      New
                    </div>
                  )}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-premium">
                    <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-premium">
                      <Icon name="Heart" size={16} className="text-charcoal" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-foreground mb-1">{product?.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    ${product?.price}
                  </p>
                  <div className="flex space-x-1">
                    {product?.colors?.slice(0, 3)?.map((color, index) => (
                      <div
                        key={color}
                        className="w-4 h-4 rounded-full border border-border"
                        style={{
                          backgroundColor: color?.toLowerCase() === 'black' ? '#2C2C2C' :
                                         color?.toLowerCase() === 'white' ? '#FEFCFA' :
                                         color?.toLowerCase() === 'sage' ? '#E8EDE7' :
                                         color?.toLowerCase() === 'rose' ? '#F0E6E1' :
                                         color?.toLowerCase() === 'cream' ? '#F5F1EB' :
                                         color?.toLowerCase() === 'charcoal' ? '#2C2C2C' : '#E5E5E5'
                        }}
                        title={color}
                      />
                    ))}
                    {product?.colors?.length > 3 && (
                      <span className="text-xs text-muted-foreground ml-1">
                        +{product?.colors?.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;