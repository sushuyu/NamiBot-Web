import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Documentation from './components/Documentation';
import Privacy from './components/Privacy';
import Home from './components/Home';
import Screenshots from './components/Screenshots';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="screenshots" element={<Screenshots />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;