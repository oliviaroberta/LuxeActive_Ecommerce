import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="sticky top-24 space-y-6">
      {/* Product Header */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm text-muted-foreground">{product?.category}</span>
          {product?.isNew && (
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
              New
            </span>
          )}
        </div>
        <h1 className="text-3xl font-light mb-2">{product?.name}</h1>
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-medium">${product?.price}</span>
          {product?.originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${product?.originalPrice}
            </span>
          )}
        </div>
      </div>
      {/* Rating */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          {[...Array(5)]?.map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={16}
              className={i < Math.floor(product?.rating) ? 'text-warning fill-current' : 'text-muted'}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {product?.rating} ({product?.reviewCount} reviews)
        </span>
      </div>
      {/* Color Selection */}
      <div>
        <h3 className="font-medium mb-3">Color: {selectedColor?.name}</h3>
        <div className="flex space-x-2">
          {product?.colors?.map((color) => (
            <button
              key={color?.name}
              onClick={() => setSelectedColor(color)}
              className={`w-12 h-12 rounded-lg border-2 transition-premium ${
                selectedColor?.name === color?.name
                  ? 'border-accent scale-110' :'border-transparent hover:border-muted'
              }`}
              style={{ backgroundColor: color?.hex }}
              title={color?.name}
            />
          ))}
        </div>
      </div>
      {/* Size Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">Size</h3>
          <button className="text-sm text-accent hover:underline">
            Size Guide
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product?.sizes?.map((size) => (
            <button
              key={size?.value}
              onClick={() => setSelectedSize(size?.value)}
              disabled={!size?.available}
              className={`py-3 px-4 border rounded-lg text-sm font-medium transition-premium ${
                selectedSize === size?.value
                  ? 'border-accent bg-accent text-accent-foreground'
                  : size?.available
                  ? 'border-border hover:border-accent' :'border-border bg-muted text-muted-foreground cursor-not-allowed'
              }`}
            >
              {size?.value}
            </button>
          ))}
        </div>
      </div>
      {/* Quantity */}
      <div>
        <h3 className="font-medium mb-3">Quantity</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="p-2 hover:bg-muted transition-premium"
              disabled={quantity <= 1}
            >
              <Icon name="Minus" size={16} />
            </button>
            <span className="px-4 py-2 font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="p-2 hover:bg-muted transition-premium"
              disabled={quantity >= 10}
            >
              <Icon name="Plus" size={16} />
            </button>
          </div>
          <span className="text-sm text-muted-foreground">
            {product?.stock > 10 ? '10+' : product?.stock} in stock
          </span>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          variant="default"
          fullWidth
          iconName="ShoppingBag"
          iconPosition="left"
          disabled={!selectedSize}
        >
          Add to Cart - ${(product?.price * quantity)?.toFixed(2)}
        </Button>
        
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" iconName="Heart" iconPosition="left">
            Wishlist
          </Button>
          <Button variant="outline" iconName="Share2" iconPosition="left">
            Share
          </Button>
        </div>
      </div>
      {/* Quick Info */}
      <div className="space-y-3 pt-4 border-t border-border">
        <div className="flex items-center space-x-3">
          <Icon name="Truck" size={16} className="text-muted-foreground" />
          <span className="text-sm">Free shipping on orders over $75</span>
        </div>
        <div className="flex items-center space-x-3">
          <Icon name="RotateCcw" size={16} className="text-muted-foreground" />
          <span className="text-sm">30-day returns</span>
        </div>
        <div className="flex items-center space-x-3">
          <Icon name="Shield" size={16} className="text-muted-foreground" />
          <span className="text-sm">2-year warranty</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;