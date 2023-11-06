// components/CalendlyWidget.js
"use client"
import React from 'react';

const CalendlyWidget = () => {
  const calendlyUrl = "https://calendly.com/nizabizaher";

  // Function to dynamically load the Calendly script
  const loadCalendlyScript = () => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  };

  React.useEffect(() => {
    loadCalendlyScript();
  }, []);

  return (
    <div>
              <style>
        {`
          .calendly-inline-widget * {
            font: blue !important;
          }
        `}
      </style>
    <div
        className="calendly-inline-widget"
      data-url={calendlyUrl}
      style={{
        minWidth: '320px', // Minimum width of the container
        height: '630px', // Adjust height accordingly
        width: '100%',
         // Container takes full width of the parent
      }}
      
    />
    </div>
  );
};

export default CalendlyWidget;
