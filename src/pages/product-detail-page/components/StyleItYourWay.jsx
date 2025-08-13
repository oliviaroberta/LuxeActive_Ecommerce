import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StyleItYourWay = ({ customerPhotos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-light">Style It Your Way</h2>
        <Button variant="outline" size="sm" iconName="Upload" iconPosition="left">
          Share Your Style
        </Button>
      </div>
      <p className="text-muted-foreground">
        See how our community styles this piece in their everyday lives. Get inspired and share your own looks!
      </p>
      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {customerPhotos?.map((photo) => (
          <div
            key={photo?.id}
            className="group cursor-pointer"
            onClick={() => openPhotoModal(photo)}
          >
            <div className="relative bg-secondary rounded-lg overflow-hidden aspect-square">
              <Image
                src={photo?.image}
                alt={`Style by ${photo?.author}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-premium" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-premium">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-2">
                  <div className="text-xs font-medium truncate">{photo?.author}</div>
                  <div className="text-xs text-muted-foreground">{photo?.location}</div>
                </div>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-premium">
                <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <Icon name="Heart" size={12} />
                  <span className="text-xs">{photo?.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More Button */}
      <div className="text-center">
        <Button variant="outline" iconName="Plus" iconPosition="left">
          Load More Styles
        </Button>
      </div>
      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">
                    {selectedPhoto?.author?.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-sm">{selectedPhoto?.author}</div>
                  <div className="text-xs text-muted-foreground">{selectedPhoto?.location}</div>
                </div>
              </div>
              <button
                onClick={closePhotoModal}
                className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-premium"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            
            <div className="aspect-square bg-secondary">
              <Image
                src={selectedPhoto?.image}
                alt={`Style by ${selectedPhoto?.author}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 hover:text-error transition-premium">
                    <Icon name="Heart" size={16} />
                    <span className="text-sm">{selectedPhoto?.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-accent transition-premium">
                    <Icon name="MessageCircle" size={16} />
                    <span className="text-sm">{selectedPhoto?.comments}</span>
                  </button>
                  <button className="hover:text-accent transition-premium">
                    <Icon name="Share2" size={16} />
                  </button>
                </div>
                <span className="text-xs text-muted-foreground">{selectedPhoto?.date}</span>
              </div>
              
              {selectedPhoto?.caption && (
                <p className="text-sm text-muted-foreground">{selectedPhoto?.caption}</p>
              )}
              
              {selectedPhoto?.tags && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedPhoto?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleItYourWay;