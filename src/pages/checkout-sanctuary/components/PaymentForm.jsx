import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const PaymentForm = ({ formData, onFormChange, onNext, onBack }) => {
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('card');

  const monthOptions = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1)?.padStart(2, '0'),
    label: String(i + 1)?.padStart(2, '0')
  }));

  const yearOptions = Array.from({ length: 10 }, (_, i) => {
    const year = new Date()?.getFullYear() + i;
    return { value: String(year), label: String(year) };
  });

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit or Debit Card',
      description: 'Visa, Mastercard, American Express',
      icon: 'CreditCard'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Pay with your PayPal account',
      icon: 'Wallet'
    },
    {
      id: 'apple',
      name: 'Apple Pay',
      description: 'Touch ID or Face ID required',
      icon: 'Smartphone'
    },
    {
      id: 'google',
      name: 'Google Pay',
      description: 'Pay with Google',
      icon: 'Smartphone'
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (paymentMethod === 'card') {
      if (!formData?.cardNumber?.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData?.expiryMonth) newErrors.expiryMonth = 'Expiry month is required';
      if (!formData?.expiryYear) newErrors.expiryYear = 'Expiry year is required';
      if (!formData?.cvv?.trim()) newErrors.cvv = 'CVV is required';
      if (!formData?.cardName?.trim()) newErrors.cardName = 'Name on card is required';
    }

    if (!formData?.billingAddress?.trim()) newErrors.billingAddress = 'Billing address is required';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  const handleInputChange = (field, value) => {
    onFormChange({ ...formData, [field]: value });
    if (errors?.[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const formatCardNumber = (value) => {
    const v = value?.replace(/\s+/g, '')?.replace(/[^0-9]/gi, '');
    const matches = v?.match(/\d{4,16}/g);
    const match = matches && matches?.[0] || '';
    const parts = [];
    for (let i = 0, len = match?.length; i < len; i += 4) {
      parts?.push(match?.substring(i, i + 4));
    }
    if (parts?.length) {
      return parts?.join(' ');
    } else {
      return v;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Payment Method Selection */}
        <div className="bg-card rounded-lg p-6 shadow-premium">
          <h3 className="text-lg font-medium text-foreground mb-4">Payment Method</h3>
          <div className="space-y-3">
            {paymentMethods?.map((method) => (
              <label
                key={method?.id}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-premium ${
                  paymentMethod === method?.id
                    ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method?.id}
                  checked={paymentMethod === method?.id}
                  onChange={(e) => setPaymentMethod(e?.target?.value)}
                  className="sr-only"
                />
                <div className="flex items-center space-x-3 flex-1">
                  <Icon name={method?.icon} size={20} className="text-accent-foreground" />
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{method?.name}</h4>
                    <p className="text-xs text-muted-foreground">{method?.description}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Card Details */}
        {paymentMethod === 'card' && (
          <div className="bg-card rounded-lg p-6 shadow-premium">
            <h3 className="text-lg font-medium text-foreground mb-4">Card Details</h3>
            <div className="space-y-4">
              <Input
                label="Card Number"
                type="text"
                value={formData?.cardNumber || ''}
                onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e?.target?.value))}
                error={errors?.cardNumber}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
              />
              <div className="grid grid-cols-3 gap-4">
                <Select
                  label="Month"
                  options={monthOptions}
                  value={formData?.expiryMonth || ''}
                  onChange={(value) => handleInputChange('expiryMonth', value)}
                  error={errors?.expiryMonth}
                  placeholder="MM"
                  required
                />
                <Select
                  label="Year"
                  options={yearOptions}
                  value={formData?.expiryYear || ''}
                  onChange={(value) => handleInputChange('expiryYear', value)}
                  error={errors?.expiryYear}
                  placeholder="YYYY"
                  required
                />
                <Input
                  label="CVV"
                  type="text"
                  value={formData?.cvv || ''}
                  onChange={(e) => handleInputChange('cvv', e?.target?.value?.replace(/\D/g, ''))}
                  error={errors?.cvv}
                  placeholder="123"
                  maxLength={4}
                  required
                />
              </div>
              <Input
                label="Name on Card"
                type="text"
                value={formData?.cardName || ''}
                onChange={(e) => handleInputChange('cardName', e?.target?.value)}
                error={errors?.cardName}
                placeholder="John Doe"
                required
              />
            </div>
          </div>
        )}

        {/* Digital Wallet Options */}
        {(paymentMethod === 'paypal' || paymentMethod === 'apple' || paymentMethod === 'google') && (
          <div className="bg-card rounded-lg p-6 shadow-premium">
            <div className="text-center py-8">
              <Icon name={paymentMethods?.find(m => m?.id === paymentMethod)?.icon} size={48} className="text-accent-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                {paymentMethods?.find(m => m?.id === paymentMethod)?.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                You'll be redirected to complete your payment securely
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-success">
                <Icon name="Shield" size={16} />
                <span>Secure payment processing</span>
              </div>
            </div>
          </div>
        )}

        {/* Billing Address */}
        <div className="bg-card rounded-lg p-6 shadow-premium">
          <h3 className="text-lg font-medium text-foreground mb-4">Billing Address</h3>
          <Checkbox
            label="Same as shipping address"
            checked={formData?.sameAsShipping || false}
            onChange={(e) => handleInputChange('sameAsShipping', e?.target?.checked)}
            className="mb-4"
          />
          {!formData?.sameAsShipping && (
            <Input
              label="Billing Address"
              type="text"
              value={formData?.billingAddress || ''}
              onChange={(e) => handleInputChange('billingAddress', e?.target?.value)}
              error={errors?.billingAddress}
              placeholder="Enter billing address"
              required
            />
          )}
        </div>

        {/* Security & Trust Signals */}
        <div className="bg-accent/10 rounded-lg p-6">
          <div className="flex items-center justify-center space-x-6 text-sm text-accent-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>SSL Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={16} />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="RefreshCw" size={16} />
              <span>Easy Returns</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-premium"
          >
            <Icon name="ArrowLeft" size={16} />
            <span>Back to shipping</span>
          </button>
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-premium flex items-center space-x-2"
          >
            <Icon name="Lock" size={16} />
            <span>Complete Order</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;