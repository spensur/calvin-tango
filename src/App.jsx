import { useState } from "react";
import { Section1 } from "./sections/Section1";
import { Section2 } from "./sections/Section2";
import { RepeatingBackground } from "./components/RepeatingBackground";
import { Section3 } from "./sections/Section3";
import { Section4 } from "./sections/Section4";
import { AccessGate } from "./components/AccessGate";


function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      <AccessGate
        onUnlock={() => {
          window.scrollTo({ top: 0, behavior: "instant" });
          setUnlocked(true);
        }}
        visible={!unlocked}
      />
      <div className="invite-root relative overflow-hidden">
        <RepeatingBackground tileHeight="100vh" />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </>
  );
}

export default App;
