import {MarkdownContext} from "./App"
import { useContext } from "react";

function MarkdownPreview(){
    const [text] = useContext(MarkdownContext);
    return <div id="preview">
        {text}
    </div>
}

export default MarkdownPreview