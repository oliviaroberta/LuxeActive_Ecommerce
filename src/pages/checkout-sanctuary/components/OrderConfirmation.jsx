import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const OrderConfirmation = ({ orderData, items }) => {
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = () => {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };

  const careInstructions = [
    "Machine wash cold with like colors",
    "Use gentle cycle and mild detergent",
    "Hang dry or tumble dry low",
    "Avoid fabric softeners and bleach",
    "Store flat to maintain shape"
  ];

  const stylingTips = [
    "Layer pieces for versatile looks",
    "Mix textures for visual interest",
    "Coordinate colors within the same collection",
    "Transition from gym to street effortlessly"
  ];

  return (
    <div className="max-w-2xl mx-auto text-center">
      {/* Success Header */}
      <div className="bg-success/10 rounded-lg p-8 mb-8">
        <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Check" size={24} className="text-success-foreground" />
        </div>
        <h2 className="text-2xl font-accent font-medium text-foreground mb-2">
          Order Confirmed!
        </h2>
        <p className="text-muted-foreground mb-4">
          Thank you for choosing LuxeActive. Your order has been received and is being processed.
        </p>
        <div className="bg-background rounded-lg p-4 inline-block">
          <p className="text-sm text-muted-foreground">Order Number</p>
          <p className="text-lg font-medium text-foreground">#{orderData?.orderNumber}</p>
        </div>
      </div>
      {/* Order Details */}
      <div className="bg-card rounded-lg p-6 shadow-premium mb-6 text-left">
        <h3 className="text-lg font-medium text-foreground mb-4">Order Details</h3>
        <div className="space-y-4">
          {items?.map((item) => (
            <div key={item?.id} className="flex items-center space-x-4 p-4 bg-background rounded-lg">
              <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden">
                <Image 
                  src={item?.image} 
                  alt={item?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-foreground">{item?.name}</h4>
                <p className="text-xs text-muted-foreground">{item?.color} • {item?.size} • Qty: {item?.quantity}</p>
                <p className="text-sm font-medium text-foreground">${(item?.price * item?.quantity)?.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-4 mt-4">
          <div className="flex justify-between text-base font-medium">
            <span className="text-foreground">Total</span>
            <span className="text-foreground">${orderData?.total}</span>
          </div>
        </div>
      </div>
      {/* Shipping & Delivery */}
      <div className="bg-card rounded-lg p-6 shadow-premium mb-6 text-left">
        <h3 className="text-lg font-medium text-foreground mb-4">Shipping & Delivery</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Icon name="MapPin" size={16} className="text-accent-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">Shipping Address</p>
              <p className="text-xs text-muted-foreground">
                {orderData?.shippingAddress}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Truck" size={16} className="text-accent-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">Delivery Method</p>
              <p className="text-xs text-muted-foreground">
                {orderData?.shippingMethod} • Estimated delivery: {orderData?.estimatedDelivery}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Package" size={16} className="text-accent-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">Tracking</p>
              <p className="text-xs text-muted-foreground">
                You'll receive tracking information via email once your order ships
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Care Instructions */}
      <div className="bg-card rounded-lg p-6 shadow-premium mb-6 text-left">
        <h3 className="text-lg font-medium text-foreground mb-4 flex items-center space-x-2">
          <Icon name="Heart" size={16} className="text-accent-foreground" />
          <span>Care Instructions</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Washing & Care</h4>
            <ul className="space-y-1">
              {careInstructions?.map((instruction, index) => (
                <li key={index} className="text-xs text-muted-foreground flex items-start space-x-2">
                  <Icon name="Check" size={12} className="text-success mt-0.5 flex-shrink-0" />
                  <span>{instruction}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Styling Tips</h4>
            <ul className="space-y-1">
              {stylingTips?.map((tip, index) => (
                <li key={index} className="text-xs text-muted-foreground flex items-start space-x-2">
                  <Icon name="Sparkles" size={12} className="text-accent-foreground mt-0.5 flex-shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Actions */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            fullWidth
            iconName="Download"
            iconPosition="left"
            onClick={handleSendEmail}
            disabled={emailSent}
          >
            {emailSent ? 'Email Sent!' : 'Email Receipt'}
          </Button>
          <Button
            variant="outline"
            fullWidth
            iconName="Package"
            iconPosition="left"
          >
            Track Order
          </Button>
        </div>
        
        <Button
          variant="default"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => window.location.href = '/homepage'}
        >
          Continue Shopping
        </Button>
      </div>
      {/* Social Sharing */}
      <div className="mt-8 p-6 bg-accent/10 rounded-lg">
        <h4 className="text-sm font-medium text-accent-foreground mb-3">Share Your Style</h4>
        <p className="text-xs text-accent-foreground mb-4">
          Show off your new LuxeActive pieces and inspire others
        </p>
        <div className="flex justify-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            iconName="Instagram"
            className="text-accent-foreground hover:text-foreground"
          >
            Instagram
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Twitter"
            className="text-accent-foreground hover:text-foreground"
          >
            Twitter
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Facebook"
            className="text-accent-foreground hover:text-foreground"
          >
            Facebook
          </Button>
        </div>
      </div>
      {/* Return Policy */}
      <div className="mt-6 p-4 bg-background rounded-lg border border-border">
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Icon name="RefreshCw" size={16} />
          <span>30-day return policy • Size exchange guarantee • Free return shipping</span>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;