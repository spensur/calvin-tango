import "./App.css";
import { useState } from "react";
import { Section1 } from "./sections/Section1";
import { Section2 } from "./sections/Section2";


function App() {

  return (
    <div className="invite-root overflow-hidden bg-white">
      <Section1/>
      <Section2/>
    </div>
  );
}

export default App;
