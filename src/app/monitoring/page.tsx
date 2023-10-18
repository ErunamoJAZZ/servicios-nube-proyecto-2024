'use client'
import { useState, useEffect } from 'react';

const IFramePage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const iframeUrl = process.env.LOAD_BALANCER_IFRAME_URL || '/api/test';

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div style={{
        textAlign: 'center',
        marginTop: '20px',
      }}>
        Última actualización: {lastUpdated.toLocaleTimeString()}
      </div>
      <iframe
        src={iframeUrl}
        key={lastUpdated.valueOf()}
        width="100%"
        height="500px"
        title="iframe"
      ></iframe>
    </div>
  );
};

export default IFramePage;
