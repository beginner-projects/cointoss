// components/TonConnect.tsx

import React, { useEffect } from 'react';

const TonConnect: React.FC = () => {
  useEffect(() => {
    // Dynamically load the external script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js';
    script.async = true;

    script.onload = () => {
      // Initialize TonConnectUI after the script is loaded
      const tonConnectUI = new (window as any).TON_CONNECT_UI.TonConnectUI({
        manifestUrl: 'https://raw.githubusercontent.com/markokhman/func-course-chapter-5-code/master/public/manifest.json',
        buttonRootId: 'ton-connect',
      });

      async function connectToWallet() {
        try {
          const connectedWallet = await tonConnectUI.connectWallet();
          console.log(connectedWallet);
        } catch (error) {
          console.error('Error connecting to wallet:', error);
        }
      }

      // Call the function to connect to the wallet
      connectToWallet();

      tonConnectUI.uiOptions = {
        twaReturnUrl: 'http://localhost:3000',
      };
    };

    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="ton-connect"></div>;
};

export default TonConnect;
