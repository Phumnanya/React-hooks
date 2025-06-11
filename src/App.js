import React from 'react';
import './App.css';
import State from './Hook components/State';
import Ref from './Hook components/Ref';
import Effect from './Hook components/Effect';
import CustomHookUsage from './Hook components/Custom-hook-usage';

function App() {
  return (
     <>
        <State />
        <Ref />
        <Effect />
        <CustomHookUsage />
     </>
  );
}

export default App;