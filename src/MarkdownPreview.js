import {MarkdownContext} from "./App"
import { useContext } from "react";
import { marked } from "marked";

function MarkdownPreview(){
    
    const [text] = useContext(MarkdownContext);

    return <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(text)}}>
    </div>

}

export default MarkdownPreview