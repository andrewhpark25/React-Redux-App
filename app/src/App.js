import React from 'react';
import './App.css';
import DogPage from './components/DogPage';
import DogPicture from './components/DogPicture';

export default function App() {
  return (
    <div className="App">
      <DogPage />
      <DogPicture />
    </div>
  );
}
