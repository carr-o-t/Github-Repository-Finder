import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Error from './components/Error';
import Result from './pages/Result';
import Search from './pages/Search';
import './styles/style.css'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:user" element={<Result />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
