import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import ListUsers from './pages/ListUsers/ListUsers';

const App: React.FunctionComponent = () => {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-list/:username" element={<ListUsers />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;

