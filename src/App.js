// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import DetailsPage from './DetailsPage';
import OAuth2Callback from './OAuth2Callback';  // Import the new component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/oauth2/callback" element={<OAuth2Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
