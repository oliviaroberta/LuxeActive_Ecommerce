import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CartSummary = ({ items, onUpdateQuantity, onRemoveItem }) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const subtotal = items?.reduce((sum, item) => sum + (item?.price * item?.quantity), 0);
  const shipping = subtotal > 150 ? 0 : 12;
  const discount = appliedPromo ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const handleApplyPromo = () => {
    if (promoCode?.toLowerCase() === 'luxe10') {
      setAppliedPromo({ code: 'LUXE10', discount: 10 });
    }
  };

  const stylingTips = [
    "Pair the Serenity Leggings with the Cloud Nine Bra for a coordinated look",
    "Layer the Zen Jacket over any sports bra for versatile styling",
    "Mix and match colors from the same collection for effortless coordination"
  ];

  return (
    <div className="bg-card rounded-lg p-6 shadow-premium">
      <h3 className="text-lg font-medium text-foreground mb-6">Order Summary</h3>
      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {items?.map((item) => (
          <div key={item?.id} className="flex items-start space-x-4 p-4 bg-background rounded-lg">
            <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden">
              <Image 
                src={item?.image} 
                alt={item?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-foreground truncate">{item?.name}</h4>
              <p className="text-xs text-muted-foreground">{item?.color} • {item?.size}</p>
              <p className="text-sm font-medium text-foreground mt-1">${item?.price}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="xs"
                iconName="Minus"
                onClick={() => onUpdateQuantity(item?.id, item?.quantity - 1)}
                disabled={item?.quantity <= 1}
              />
              <span className="text-sm font-medium w-8 text-center">{item?.quantity}</span>
              <Button
                variant="ghost"
                size="xs"
                iconName="Plus"
                onClick={() => onUpdateQuantity(item?.id, item?.quantity + 1)}
              />
            </div>
            <Button
              variant="ghost"
              size="xs"
              iconName="Trash2"
              onClick={() => onRemoveItem(item?.id)}
              className="text-error hover:text-error"
            />
          </div>
        ))}
      </div>
      {/* Styling Tips */}
      <div className="bg-accent/50 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Sparkles" size={16} className="text-accent-foreground" />
          <h4 className="text-sm font-medium text-accent-foreground">Styling Tip</h4>
        </div>
        <p className="text-xs text-accent-foreground">
          {stylingTips?.[Math.floor(Math.random() * stylingTips?.length)]}
        </p>
      </div>
      {/* Promo Code */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e?.target?.value)}
            className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={handleApplyPromo}
            disabled={!promoCode}
          >
            Apply
          </Button>
        </div>
        {appliedPromo && (
          <div className="flex items-center justify-between mt-2 text-sm text-success">
            <span>Promo code applied: {appliedPromo?.code}</span>
            <span>-{appliedPromo?.discount}%</span>
          </div>
        )}
      </div>
      {/* Order Totals */}
      <div className="space-y-2 pt-4 border-t border-border">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-foreground">${subtotal?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-foreground">
            {shipping === 0 ? 'Free' : `$${shipping?.toFixed(2)}`}
          </span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-sm text-success">
            <span>Discount</span>
            <span>-${discount?.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-base font-medium pt-2 border-t border-border">
          <span className="text-foreground">Total</span>
          <span className="text-foreground">${total?.toFixed(2)}</span>
        </div>
      </div>
      {/* Free Shipping Notice */}
      {subtotal < 150 && (
        <div className="mt-4 p-3 bg-warning/10 rounded-lg">
          <p className="text-xs text-warning-foreground">
            Add ${(150 - subtotal)?.toFixed(2)} more for free shipping
          </p>
        </div>
      )}
    </div>
  );
};

export default CartSummary;