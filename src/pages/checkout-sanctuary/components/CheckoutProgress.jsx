import React from 'react';
import Icon from '../../../components/AppIcon';

const CheckoutProgress = ({ currentStep, steps }) => {
  return (
    <div className="w-full bg-background py-6 border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {steps?.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            const isLast = index === steps?.length - 1;

            return (
              <React.Fragment key={step?.id}>
                <div className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-premium ${
                    isCompleted 
                      ? 'bg-success border-success text-success-foreground' 
                      : isActive 
                        ? 'bg-accent border-accent text-accent-foreground' 
                        : 'bg-background border-border text-muted-foreground'
                  }`}>
                    {isCompleted ? (
                      <Icon name="Check" size={16} />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className={`text-sm font-medium ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step?.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{step?.description}</p>
                  </div>
                </div>
                {!isLast && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    isCompleted ? 'bg-success' : 'bg-border'
                  }`} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CheckoutProgress;