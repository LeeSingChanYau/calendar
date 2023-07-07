import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    console.log(currentDate);
  }, [currentDate]);

  return (
    <div className="App">
      <Pagination date={currentDate} setCurrentDate={setCurrentDate} />
    </div>
  );
}

export default App;
