import React, { useState } from 'react';
const forge = require('node-forge');

const GenerateKeyPair = () => {
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const handleGenerateKeyPair = () => {
    // Create an RSA key pair
    const rsa = forge.pki.rsa.generateKeyPair({ bits: 2048 }); // You can adjust the key length as needed

    // Convert keys to PEM format
    const publicKeyPem = forge.pki.publicKeyToPem(rsa.publicKey);
    const privateKeyPem = forge.pki.privateKeyToPem(rsa.privateKey);

    setPublicKey(publicKeyPem);
    setPrivateKey(privateKeyPem);
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

// Using node-forge library, first do npm install node-forge