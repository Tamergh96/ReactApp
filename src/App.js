import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("Hallo, das ist meine erste React-App");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{text}</h1>

      <button onClick={() => setText("Der Button funktioniert 🎉")}>
        Klick mich
      </button>
    </div>
  );
}
