import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('details');

  const tabs = [
    { id: 'details', label: 'Details', icon: 'Info' },
    { id: 'reviews', label: 'Reviews', icon: 'MessageSquare' },
    { id: 'care', label: 'Care', icon: 'Heart' },
    { id: 'sustainability', label: 'Sustainability', icon: 'Leaf' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product?.description}
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-3">Features</h3>
              <ul className="space-y-2">
                {product?.features?.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product?.specifications)?.map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground capitalize">{key?.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Customer Reviews</h3>
              <button className="text-accent hover:underline text-sm">
                Write a Review
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">{product?.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < Math.floor(product?.rating) ? 'text-warning fill-current' : 'text-muted'}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Based on {product?.reviewCount} reviews
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-4">
                {product?.reviews?.map((review) => (
                  <div key={review?.id} className="border-b border-border pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium">{review?.author}</div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)]?.map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={12}
                                className={i < review?.rating ? 'text-warning fill-current' : 'text-muted'}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {review?.size} • {review?.bodyType}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{review?.date}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{review?.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'care':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Care Instructions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {product?.careInstructions?.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="Droplets" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{instruction}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-medium mb-2">Pro Tip</h4>
                  <p className="text-sm text-muted-foreground">
                    For best results, wash in cold water and air dry to maintain the fabric's performance properties and extend the life of your garment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'sustainability':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                LuxeActive is committed to creating beautiful activewear while minimizing our environmental impact. Every piece is designed with sustainability in mind.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product?.sustainabilityFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name="Leaf" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{feature?.title}</div>
                    <div className="text-sm text-muted-foreground">{feature?.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <nav className="flex space-x-8">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 py-4 border-b-2 transition-premium ${
                activeTab === tab?.id
                  ? 'border-accent text-accent' :'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span className="font-medium">{tab?.label}</span>
            </button>
          ))}
        </nav>
      </div>
      {/* Tab Content */}
      <div className="py-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProductTabs;