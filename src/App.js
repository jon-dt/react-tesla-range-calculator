//import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TeslaBattery from "./containers/TeslaBattery/TeslaBattery";

export default function App() {
  return (
    <div className="App">
      <Header />
      <TeslaBattery />
    </div>
  );
}
