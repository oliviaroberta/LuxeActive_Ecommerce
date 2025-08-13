import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: "assets/images/IMG-20250812-WA0009.jpg",
      title: "Life Isn't Perfect, But Your Activewear Can Be",
      subtitle: "Effortless elevation for the modern woman",
      cta: "Discover Collections",
      collection: "performance"
    },
    {
      id: 2,
      image: "assets/images/IMG-20250812-WA0022.jpg",
      title: "Fit, Comfort, and Style",
      subtitle: "Pieces that transition with your lifestyle",
      cta: "Shop Lounge",
      collection: "lounge"
    },
    {
      id: 3,
      image: "assets/images/IMG-20250812-WA0015.jpg",
      title: "Put on Your activewear, go out there, and wing it",
      subtitle: "Premium activewear that celebrates every body",
      cta: "Find Your Fit",
      collection: "fit"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const getCollectionLink = (collection) => {
    switch (collection) {
      case 'performance':
        return '/performance-collection';
      case 'lounge':
        return '/lounge-collection';
      case 'fit':
        return '/size-fit-studio';
      default:
        return '/performance-collection';
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-background">
      {/* Hero Slides */}
      <div className="relative h-full">
        {heroSlides?.map((slide, index) => (
          <div
            key={slide?.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full overflow-hidden">
              <Image
                src={slide?.image}
                alt={slide?.title}
                className="w-full h-full object-cover md:object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20" />
            </div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="font-accent text-4xl sm:text-5xl lg:text-6xl font-medium text-blackmb-6 leading-tight">
                  {slide?.title}
                </h1>
                <p className="text-lg sm:text-xl text-black/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide?.subtitle}
                </p>
                <Link to={getCollectionLink(slide?.collection)}>
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-white text-charcoal hover:bg-white/90 transition-premium"
                  >
                    {slide?.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides?.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-premium ${
              index === currentSlide
                ? 'bg-white' :'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2 rotate-90 origin-center">Scroll</span>
          <div className="w-px h-12 bg-white/40" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;