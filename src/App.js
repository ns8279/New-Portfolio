import React from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <>
    <div>
      <Header></Header>
    </div>
    <div>
      <Footer className="px-5"></Footer>
    </div>
    </>
  );
}

export default App;
