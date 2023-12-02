// import { useState } from 'react'

import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom';

import FileUpload from './FileUpload'
import Home from './Home';

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/FileUpload" element={<FileUpload />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
