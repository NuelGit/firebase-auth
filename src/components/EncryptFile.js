import React, {useState} from 'react'
import CryptoJS from 'crypto-js'

const EncryptFile = () => {
    const [file, setFile] = useState(null);
    const [encryptedFile, setEncryptedFile] = useState('');
    const [dek, setDEK] = useState('');
    const [recipientPublicKey, setRecipientPublicKey] = useState(''); // Recipient's public key (for demonstration)
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleEncryptFile = async () => {
      if (!file || !dek || !recipientPublicKey) {
        alert('Please select a file, provide a DEK, and recipient\'s public key.');
        return;
      }
  
      // Read the file as an ArrayBuffer
      const reader = new FileReader();
      reader.onload = async (event) => {
        const fileData = event.target.result;
  
        // Encrypt the file data using AES with the DEK
        const encryptedFileData = CryptoJS.AES.encrypt(
          CryptoJS.lib.WordArray.create(fileData), dek,
          {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
          }
        ).toString();
  
        // Encrypt the DEK using the recipient's public key (asymmetric encryption)
        const encryptedDEK = CryptoJS.AES.encrypt(dek, recipientPublicKey).toString();
  
        // Handle the encrypted file data and DEK (e.g., upload them to a cloud storage)
        setEncryptedFile(encryptedFileData);
        console.log('Encrypted File data:', encryptedFileData);
        console.log('Encrypted DEK:', encryptedDEK);
  
        alert('File encrypted successfully.');
      };
  
      reader.readAsArrayBuffer(file);
    };
  
    return (
      <div>
        <h2>Encrypt File with AES and RSA</h2>
        <input type="file" onChange={handleFileChange} />
        <input
          type="text"
          placeholder="Enter DEK"
          value={dek}
          onChange={(e) => setDEK(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recipient's Public Key"
          value={recipientPublicKey}
          onChange={(e) => setRecipientPublicKey(e.target.value)}
        />
        <button onClick={handleEncryptFile}>Encrypt File</button>
        <div>
          <h3>Encrypted File:</h3>
          <textarea readOnly rows="5" value={encryptedFile}></textarea>
        </div>
      </div>
    );
  };
      


export default EncryptFile