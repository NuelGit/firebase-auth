import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const GenerateKeyPair = () => {
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const handleGenerateKeyPair = () => {
    // Generate a random key pair using crypto-js
    const keyPair = CryptoJS.lib.WordArray.random(512 / 8); // 512 bits for demonstration

    // Extract public and private keys as hexadecimal strings
    const publicKeyHex = keyPair.toString(CryptoJS.enc.Hex);
    const privateKeyHex = keyPair.toString(CryptoJS.enc.Hex);

    setPublicKey(publicKeyHex);
    setPrivateKey(privateKeyHex);
  };

  return (
    <div>
      <h2>Generate Key Pair</h2>
      <button onClick={handleGenerateKeyPair}>Generate Key Pair</button>
      {publicKey && (
        <div>
          <h3>Public Key:</h3>
          <textarea readOnly rows="5" value={publicKey}></textarea>
        </div>
      )}
      {privateKey && (
        <div>
          <h3>Private Key:</h3>
          <textarea readOnly rows="5" value={privateKey}></textarea>
        </div>
      )}
    </div>
  );
};

export default GenerateKeyPair;