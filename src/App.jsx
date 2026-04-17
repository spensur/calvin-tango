import { useState } from "react";
import { Section1 } from "./sections/Section1";
import { Section2 } from "./sections/Section2";
import { RepeatingBackground } from "./components/RepeatingBackground";
import { Section3 } from "./sections/Section3";
import { Section4 } from "./sections/Section4";
import { AccessGate } from "./components/AccessGate";


function App() {
  const [unlocked, setUnlocked] = useState(false);

  function handleUnlock() {
    setUnlocked(true);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

  return (
    <>
      <AccessGate onUnlock={handleUnlock} visible={!unlocked} />
      <div className="invite-root relative overflow-hidden">
        <RepeatingBackground tileHeight="100vh" />
        <Section1 unlocked={unlocked} />
        <Section2 unlocked={unlocked} />
        <Section3 unlocked={unlocked} />
        <Section4 unlocked={unlocked} />
      </div>
    </>
  );
}

export default App;
