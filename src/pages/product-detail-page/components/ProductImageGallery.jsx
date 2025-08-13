import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProductImageGallery = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = [
    product?.mainImage,
    ...product?.galleryImages
  ];

  const handlePrevImage = () => {
    setSelectedImageIndex(prev => prev === 0 ? images?.length - 1 : prev - 1);
  };

  const handleNextImage = () => {
    setSelectedImageIndex(prev => prev === images?.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative bg-secondary rounded-lg overflow-hidden aspect-square">
        <Image
          src={images?.[selectedImageIndex]}
          alt={`${product?.name} - View ${selectedImageIndex + 1}`}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-premium shadow-premium"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        
        <button
          onClick={handleNextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-premium shadow-premium"
        >
          <Icon name="ChevronRight" size={20} />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
          {selectedImageIndex + 1} / {images?.length}
        </div>

        {/* Zoom Indicator */}
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
          <Icon name={isZoomed ? "ZoomOut" : "ZoomIn"} size={16} />
        </div>
      </div>
      {/* Thumbnail Gallery */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images?.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-premium ${
              selectedImageIndex === index
                ? 'border-accent' :'border-transparent hover:border-muted'
            }`}
          >
            <Image
              src={image}
              alt={`${product?.name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      {/* 360° View Button */}
      <button className="w-full py-3 border border-border rounded-lg hover:bg-muted transition-premium flex items-center justify-center space-x-2">
        <Icon name="RotateCcw" size={20} />
        <span className="font-medium">360° View</span>
      </button>
    </div>
  );
};

export default ProductImageGallery;