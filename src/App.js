import { useContext } from "react";
import MarkdownInput from "./MarkdownInput";
import MarkdownPreview from "./MarkdownPreview";


function App() {
  return (
    <div className="App">
      <MarkdownInput />
      <MarkdownPreview />
    </div>
  );
}

export default App;
