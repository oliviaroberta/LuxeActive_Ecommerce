import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import { Link } from 'react-router-dom';

const RecentlyViewed = ({ products }) => {
  if (!products || products?.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-light">Recently Viewed</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products?.map((product) => (
          <Link
            key={product?.id}
            to="/product-detail-page"
            className="group block"
          >
            <div className="relative bg-secondary rounded-lg overflow-hidden aspect-square mb-3">
              <Image
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-premium">
                <Icon name="Heart" size={16} />
              </button>
              {product?.isNew && (
                <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                  New
                </div>
              )}
            </div>
            
            <div className="space-y-1">
              <h3 className="font-medium text-sm group-hover:text-accent transition-premium">
                {product?.name}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">${product?.price}</span>
                {product?.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    ${product?.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={12}
                    className={i < Math.floor(product?.rating) ? 'text-warning fill-current' : 'text-muted'}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">
                  ({product?.reviewCount})
                </span>
              </div>
              
              {/* Color Options */}
              <div className="flex space-x-1 mt-2">
                {product?.colors?.slice(0, 4)?.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-border"
                    style={{ backgroundColor: color?.hex }}
                    title={color?.name}
                  />
                ))}
                {product?.colors?.length > 4 && (
                  <div className="w-4 h-4 rounded-full border border-border bg-muted flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">+{product?.colors?.length - 4}</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;