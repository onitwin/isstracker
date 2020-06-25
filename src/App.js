import React from 'react';
import './App.css';
import Issmap from './Containers/Issmap'
import Heading from './heading'
import Facts from './components/facts'


function App() {
  return (
    <div className="App">
    <Heading/>
    <Issmap/>
    <Heading/>
    <Facts/>
    </div>
  );
}

export default App;
