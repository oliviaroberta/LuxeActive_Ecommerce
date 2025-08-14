import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Lounge Set', path: '/lounge-collection', icon: 'Home' },
    { name: 'Checkout', path: '/checkout-sanctuary', icon: 'ShoppingBag' },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 transition-premium hover:opacity-80"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-accent font-medium text-lg">L</span>
            </div>
            <span className="font-accent font-medium text-xl text-foreground">LuxeActive</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-premium ${
                  isActivePath(item?.path)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              iconName="Search"
              iconPosition="left"
              className="text-muted-foreground hover:text-foreground"
            >
              Search
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="Heart"
              iconPosition="left"
              className="text-muted-foreground hover:text-foreground"
            >
              Wishlist
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="ShoppingBag"
              iconPosition="left"
            >
              Cart (0)
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              iconName={isMobileMenuOpen ? "X" : "Menu"}
              onClick={toggleMobileMenu}
              className="text-foreground"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-premium ${
                    isActivePath(item?.path)
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-border space-y-2">
                <Button
                  variant="ghost"
                  fullWidth
                  iconName="Search"
                  iconPosition="left"
                  className="justify-start text-muted-foreground hover:text-foreground"
                >
                  Search
                </Button>
                <Button
                  variant="ghost"
                  fullWidth
                  iconName="Heart"
                  iconPosition="left"
                  className="justify-start text-muted-foreground hover:text-foreground"
                >
                  Wishlist
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="ShoppingBag"
                  iconPosition="left"
                  className="justify-start"
                >
                  Cart (0)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;