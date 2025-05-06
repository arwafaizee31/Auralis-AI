// App.js

import React, { useMemo, useState } from 'react';


import { Routes, Route } from 'react-router-dom';


import GenerateMusic from './Pages/GenerateMusic';




function App() {
  

  return (
   
      <Routes>
        <Route path="/gen-music" element={<GenerateMusic />} />
      
       
     
      </Routes>
  
  );
}

export default App;
