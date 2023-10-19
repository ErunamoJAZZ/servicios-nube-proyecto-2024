'use client'
import { useState, useEffect } from 'react';

const IFramePage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section>
      <div
        style={{
          textAlign: 'center',
          marginTop: '20px',
        }}
        suppressHydrationWarning
      >
        Última actualización: {lastUpdated.toLocaleTimeString()}
      </div>
      <iframe
        src="/proxy"
        key={lastUpdated.valueOf()}
        width="100%"
        height="500px"
        title="iframe"
        suppressHydrationWarning
      ></iframe>
    </section>
  );
};

export default IFramePage;
