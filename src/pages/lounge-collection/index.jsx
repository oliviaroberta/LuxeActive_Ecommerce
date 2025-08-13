import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';

const LoungeCollection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductGrid />
      </main>

      {/* Footer */}
        <footer className="bg-card mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-accent font-medium text-lg">L</span>
                  </div>
                  <span className="font-accent font-medium text-xl">LuxeActive</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Elevating your everyday through thoughtfully designed activewear that celebrates the modern woman's journey.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-4">Shop</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-premium">Lounge Collection</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4">Connect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-premium">Instagram</a></li>
                  <li><a href="#" className="hover:text-foreground transition-premium">Pinterest</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} LuxeActive. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-premium">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-premium">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default LoungeCollection;