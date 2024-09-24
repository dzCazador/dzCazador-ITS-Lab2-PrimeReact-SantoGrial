import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tables from './pages/Tables';
import SelectButton from './pages/SelectButton';
import CalendarExample from './pages/Calendar';



import './App.css';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <Header />
        </header>
        <aside className="left-sidebar">
          <LeftSidebar />
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/components/calendar" element={<CalendarExample />} /> 
            <Route path="/components/selectButton" element={<SelectButton />} /> 
            <Route path="/components/tables" element={<Tables />} /> 
          </Routes>
        </main>
        <aside className="right-sidebar">
          <RightSidebar />
        </aside>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
