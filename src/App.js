import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Footer/>
        </div>
    );
}

export default App;
