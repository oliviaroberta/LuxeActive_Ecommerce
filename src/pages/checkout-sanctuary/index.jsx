import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CheckoutProgress from './components/CheckoutProgress';
import CartSummary from './components/CartSummary';
import ShippingForm from './components/ShippingForm';
import PaymentForm from './components/PaymentForm';
import OrderConfirmation from './components/OrderConfirmation';

const CheckoutSanctuary = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [orderData, setOrderData] = useState(null);

  const steps = [
    { id: 'cart', title: 'Cart Review', description: 'Review your items' },
    { id: 'shipping', title: 'Shipping', description: 'Delivery details' },
    { id: 'payment', title: 'Payment', description: 'Secure checkout' },
    { id: 'confirmation', title: 'Confirmation', description: 'Order complete' }
  ];

  // Mock cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Serenity High-Waist Leggings",
      color: "Sage Green",
      size: "M",
      price: 88,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1506629905607-d5b4671b4b3a?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Cloud Nine Sports Bra",
      color: "Warm Beige",
      size: "M",
      price: 68,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Zen Cropped Jacket",
      color: "Muted Rose",
      size: "M",
      price: 128,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop"
    }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) return;
    setCartItems(items => 
      items?.map(item => 
        item?.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(items => items?.filter(item => item?.id !== itemId));
  };

  const handleFormChange = (newData) => {
    setFormData(newData);
  };

  const handleNext = () => {
    if (currentStep < steps?.length - 1) {
      if (currentStep === 2) {
        // Create order data when moving to confirmation
        const subtotal = cartItems?.reduce((sum, item) => sum + (item?.price * item?.quantity), 0);
        const shipping = subtotal > 150 ? 0 : 12;
        const total = subtotal + shipping;
        
        setOrderData({
          orderNumber: `LA${Date.now()?.toString()?.slice(-6)}`,
          total: total?.toFixed(2),
          shippingAddress: `${formData?.address}, ${formData?.city}, ${formData?.state} ${formData?.zipCode}`,
          shippingMethod: formData?.shippingMethod === 'standard' ? 'Standard Shipping' : 
                          formData?.shippingMethod === 'express' ? 'Express Shipping' : 'Overnight Shipping',
          estimatedDelivery: formData?.shippingMethod === 'overnight' ? 'Tomorrow' :
                            formData?.shippingMethod === 'express' ? 'Dec 15-16, 2025' : 'Dec 17-19, 2025'
        });
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg p-6 shadow-premium">
                <h2 className="text-xl font-medium text-foreground mb-6">Your Cart</h2>
                {cartItems?.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">Your cart is empty</p>
                    <button
                      onClick={() => window.location.href = '/performance-collection'}
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-premium"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cartItems?.map((item) => (
                        <div key={item?.id} className="flex items-start space-x-4 p-4 bg-background rounded-lg">
                          <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden">
                            <img 
                              src={item?.image} 
                              alt={item?.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-base font-medium text-foreground">{item?.name}</h4>
                            <p className="text-sm text-muted-foreground">{item?.color} • {item?.size}</p>
                            <p className="text-base font-medium text-foreground mt-2">${item?.price}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleUpdateQuantity(item?.id, item?.quantity - 1)}
                              disabled={item?.quantity <= 1}
                              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-premium disabled:opacity-50"
                            >
                              -
                            </button>
                            <span className="text-sm font-medium w-8 text-center">{item?.quantity}</span>
                            <button
                              onClick={() => handleUpdateQuantity(item?.id, item?.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-premium"
                            >
                              +
                            </button>
                            <button
                              onClick={() => handleRemoveItem(item?.id)}
                              className="text-error hover:text-error/80 transition-premium ml-4"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={handleNext}
                        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-premium"
                      >
                        Continue to Shipping
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="lg:col-span-1">
              <CartSummary 
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ShippingForm
                formData={formData}
                onFormChange={handleFormChange}
                onNext={handleNext}
                onBack={handleBack}
              />
            </div>
            <div className="lg:col-span-1">
              <CartSummary 
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PaymentForm
                formData={formData}
                onFormChange={handleFormChange}
                onNext={handleNext}
                onBack={handleBack}
              />
            </div>
            <div className="lg:col-span-1">
              <CartSummary 
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <OrderConfirmation 
            orderData={orderData}
            items={cartItems}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Checkout Sanctuary - LuxeActive</title>
        <meta name="description" content="Complete your LuxeActive purchase with our secure, premium checkout experience. Enjoy free shipping, easy returns, and sustainable packaging." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <CheckoutProgress currentStep={currentStep} steps={steps} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {renderStepContent()}
          </div>
        </main>

        {/* Trust Signals Footer */}
        <footer className="bg-card border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <span className="text-success-foreground text-xs">✓</span>
                </div>
                <span>SSL Encrypted Checkout</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <span className="text-success-foreground text-xs">✓</span>
                </div>
                <span>30-Day Return Policy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <span className="text-success-foreground text-xs">✓</span>
                </div>
                <span>Free Shipping Over $150</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <span className="text-success-foreground text-xs">✓</span>
                </div>
                <span>Carbon-Neutral Delivery</span>
              </div>
            </div>
            <div className="text-center mt-6 text-xs text-muted-foreground">
              <p>&copy; {new Date()?.getFullYear()} LuxeActive. All rights reserved. • Privacy Policy • Terms of Service</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CheckoutSanctuary;