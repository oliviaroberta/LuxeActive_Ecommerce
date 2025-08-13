import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CompleteTheLook = ({ recommendations }) => {
  const totalBundlePrice = recommendations?.reduce((sum, item) => sum + item?.price, 0);
  const bundleDiscount = 0.15; // 15% bundle discount
  const discountedPrice = totalBundlePrice * (1 - bundleDiscount);

  return (
    <div className="bg-card rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-light">Complete the Look</h2>
        <div className="text-sm text-muted-foreground">
          Save 15% when you buy the bundle
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {recommendations?.map((item, index) => (
          <div key={item?.id} className="group">
            <div className="relative bg-secondary rounded-lg overflow-hidden aspect-square mb-3">
              <Image
                src={item?.image}
                alt={item?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-premium">
                <Icon name="Heart" size={16} />
              </button>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-medium text-sm">{item?.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">${item?.price}</span>
                {item?.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    ${item?.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={12}
                    className={i < Math.floor(item?.rating) ? 'text-warning fill-current' : 'text-muted'}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">
                  ({item?.reviewCount})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Bundle Pricing */}
      <div className="bg-accent/50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Individual prices:</span>
          <span className="text-sm line-through">${totalBundlePrice?.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Bundle price:</span>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-medium text-success">
              ${discountedPrice?.toFixed(2)}
            </span>
            <span className="bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium">
              Save ${(totalBundlePrice - discountedPrice)?.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Button variant="default" iconName="ShoppingBag" iconPosition="left">
          Add Bundle to Cart
        </Button>
        <Button variant="outline" iconName="Eye" iconPosition="left">
          View Individual Items
        </Button>
      </div>
    </div>
  );
};

export default CompleteTheLook;