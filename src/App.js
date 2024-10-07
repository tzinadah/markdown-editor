import MarkdownInput from "./MarkdownInput";
import MarkdownPreview from "./MarkdownPreview";
import { createContext, useState } from "react";

export const MarkdownContext = createContext();

function App() {

  const [text, useText] = useState("");

  return (
    <MarkdownContext.Provider value={[text,useText]}>
      <div className="App">
        <MarkdownInput />
        <MarkdownPreview />
      </div>
    </MarkdownContext.Provider>
  );
}

export default App;
