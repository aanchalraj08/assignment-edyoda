import React from 'react';
import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import DetailedInfo from "./Components/DetailedInfo/DetailedInfo";
import SubscriptionForm from "./Components/SubscriptionForm/SubscriptionForm";

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="Container">
        <DetailedInfo />
        <SubscriptionForm />
      </div>
    </div>
  );
}

export default App;