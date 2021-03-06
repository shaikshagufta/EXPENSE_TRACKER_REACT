import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import CreateStudentComponent from './components/CreateStudentComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<ListStudentComponent />} />
              <Route path="/student" element={<ListStudentComponent />} />
              {<Route path="/add-student" element={<CreateStudentComponent />} />}
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
