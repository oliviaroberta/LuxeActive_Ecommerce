import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-secondary via-primary to-accent overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground leading-tight">
                Comfort
                <span className="block font-accent italic text-muted-foreground">
                  Without Compromise
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Discover our Lounge collection where buttery-soft fabrics meet 
                effortless elegance. From Netflix nights to coffee dates, 
                these pieces move with your lifestyle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                Shop Lounge Collection
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">Organic Cotton Blend</h3>
                <p className="text-sm text-muted-foreground">Sustainably sourced, incredibly soft</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">Versatile Styling</h3>
                <p className="text-sm text-muted-foreground">Home to street seamlessly</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-premium">
              <Image
                src="/assets/images/IMG-20250812-WA0010.jpg"
                alt="Woman in comfortable lounge wear sitting by window with coffee"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;