import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ShippingForm = ({ formData, onFormChange, onNext, onBack }) => {
  const [errors, setErrors] = useState({});

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' }
  ];

  const stateOptions = [
    { value: 'ca', label: 'California' },
    { value: 'ny', label: 'New York' },
    { value: 'tx', label: 'Texas' },
    { value: 'fl', label: 'Florida' }
  ];

  const shippingOptions = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      description: 'Carbon-neutral delivery in sustainable packaging',
      price: 0,
      duration: '5-7 business days',
      icon: 'Leaf'
    },
    {
      id: 'express',
      name: 'Express Shipping',
      description: 'Faster delivery with eco-friendly packaging',
      price: 15,
      duration: '2-3 business days',
      icon: 'Zap'
    },
    {
      id: 'overnight',
      name: 'Overnight Shipping',
      description: 'Next day delivery available in select areas',
      price: 25,
      duration: '1 business day',
      icon: 'Clock'
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData?.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    if (!formData?.address?.trim()) newErrors.address = 'Address is required';
    if (!formData?.city?.trim()) newErrors.city = 'City is required';
    if (!formData?.zipCode?.trim()) newErrors.zipCode = 'ZIP code is required';
    if (!formData?.country) newErrors.country = 'Country is required';
    if (!formData?.state) newErrors.state = 'State is required';
    if (!formData?.shippingMethod) newErrors.shippingMethod = 'Please select a shipping method';

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

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Information */}
        <div className="bg-card rounded-lg p-6 shadow-premium">
          <h3 className="text-lg font-medium text-foreground mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              type="text"
              value={formData?.firstName || ''}
              onChange={(e) => handleInputChange('firstName', e?.target?.value)}
              error={errors?.firstName}
              required
            />
            <Input
              label="Last Name"
              type="text"
              value={formData?.lastName || ''}
              onChange={(e) => handleInputChange('lastName', e?.target?.value)}
              error={errors?.lastName}
              required
            />
          </div>
          <Input
            label="Email Address"
            type="email"
            value={formData?.email || ''}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            description="We'll send order updates to this email"
            required
            className="mt-4"
          />
        </div>

        {/* Shipping Address */}
        <div className="bg-card rounded-lg p-6 shadow-premium">
          <h3 className="text-lg font-medium text-foreground mb-4">Shipping Address</h3>
          <div className="space-y-4">
            <Input
              label="Street Address"
              type="text"
              value={formData?.address || ''}
              onChange={(e) => handleInputChange('address', e?.target?.value)}
              error={errors?.address}
              required
            />
            <Input
              label="Apartment, suite, etc. (optional)"
              type="text"
              value={formData?.apartment || ''}
              onChange={(e) => handleInputChange('apartment', e?.target?.value)}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="City"
                type="text"
                value={formData?.city || ''}
                onChange={(e) => handleInputChange('city', e?.target?.value)}
                error={errors?.city}
                required
              />
              <Select
                label="State"
                options={stateOptions}
                value={formData?.state || ''}
                onChange={(value) => handleInputChange('state', value)}
                error={errors?.state}
                required
              />
              <Input
                label="ZIP Code"
                type="text"
                value={formData?.zipCode || ''}
                onChange={(e) => handleInputChange('zipCode', e?.target?.value)}
                error={errors?.zipCode}
                required
              />
            </div>
            <Select
              label="Country"
              options={countryOptions}
              value={formData?.country || ''}
              onChange={(value) => handleInputChange('country', value)}
              error={errors?.country}
              required
            />
          </div>
        </div>

        {/* Shipping Method */}
        <div className="bg-card rounded-lg p-6 shadow-premium">
          <h3 className="text-lg font-medium text-foreground mb-4">Shipping Method</h3>
          {errors?.shippingMethod && (
            <p className="text-sm text-error mb-4">{errors?.shippingMethod}</p>
          )}
          <div className="space-y-3">
            {shippingOptions?.map((option) => (
              <label
                key={option?.id}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-premium ${
                  formData?.shippingMethod === option?.id
                    ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                }`}
              >
                <input
                  type="radio"
                  name="shippingMethod"
                  value={option?.id}
                  checked={formData?.shippingMethod === option?.id}
                  onChange={(e) => handleInputChange('shippingMethod', e?.target?.value)}
                  className="sr-only"
                />
                <div className="flex items-center space-x-3 flex-1">
                  <Icon name={option?.icon} size={20} className="text-accent-foreground" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-foreground">{option?.name}</h4>
                      <span className="text-sm font-medium text-foreground">
                        {option?.price === 0 ? 'Free' : `$${option?.price}`}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{option?.description}</p>
                    <p className="text-xs text-muted-foreground">{option?.duration}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Save Information */}
        <div className="bg-card rounded-lg p-6 shadow-premium">
          <Checkbox
            label="Save this information for next time"
            checked={formData?.saveInfo || false}
            onChange={(e) => handleInputChange('saveInfo', e?.target?.checked)}
          />
          <Checkbox
            label="Send me styling tips and exclusive offers"
            description="Get personalized recommendations and early access to new collections"
            checked={formData?.emailUpdates || false}
            onChange={(e) => handleInputChange('emailUpdates', e?.target?.checked)}
            className="mt-3"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-premium"
          >
            <Icon name="ArrowLeft" size={16} />
            <span>Back to cart</span>
          </button>
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-premium"
          >
            Continue to payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;