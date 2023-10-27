import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import './Coffee.css';

const firebaseConfig = {
  apiKey: "AIzaSyA-YM4IfTuYH2Y7gUnBVxBgmdKuHwneyXQ",
  authDomain: "coffee-65476.firebaseapp.com",
  projectId: "coffee-65476",
  storageBucket: "coffee-65476.appspot.com",
  messagingSenderId: "587702153881",
  appId: "1:587702153881:web:ebd230ab03517a7c237e08",
  measurementId: "G-H3Y5ZV6L3F"
};

// Initialize Firebase with your configuration
firebase.initializeApp(firebaseConfig);

function Coffee({ documentId }) {
  const [imageURL, setImageURL] = useState('');
  const [text, setText] = useState('');
  const [info, setInfo] = useState('');
  useEffect(() => {
    const db = firebase.firestore();
    const coffeeRef = db.collection('coffee').doc(documentId);
  
    coffeeRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setImageURL(data.image);
        setText(data.text);
        setInfo(data.info);
        console.log(data);
        console.log(info); // Add this line
      } else {
        console.log('Document not found');
      }
    });
  }, [documentId]);
  
  return (
    <div className="Content">
      <div className="coffee-card">
        <img className="coffee-image" src={imageURL} alt="Coffee" />
        <p className="coffeeText">{text}</p>
        <p className="coffeeInfo">{info}</p>
      </div>
    </div>
  );
}

export default Coffee;

