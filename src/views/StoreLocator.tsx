import React from 'react';

const StoreLocator: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        <iframe src="https://storage.googleapis.com/maps-solutions-gnq1sus2xy/locator-plus/ayug/locator-plus.html"
          width="100%" height="100%"
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

export default StoreLocator;
