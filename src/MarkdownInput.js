import { MarkdownContext } from "./App";
import {useContext} from "react";


function MarkdownInput(props){
    
    const [text, setText] = useContext(MarkdownContext);

    function handleInput(e){
        setText(e.target.value)
    }

    return <MarkdownContext.Provider value={[text, setText]}>
            <textarea id="editor" onChange={handleInput} value={text}></textarea>
        </MarkdownContext.Provider>
}

export default MarkdownInput