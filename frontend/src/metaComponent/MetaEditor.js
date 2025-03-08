import EditorComponent from "../plugin/EditorComponent/EditorComponent"
import {MetaScrollable} from "."

const MetaEditor = (props) =>
{
    return(
        <MetaScrollable>
            <EditorComponent {...props}></EditorComponent>
        </MetaScrollable>
    )
}
export default MetaEditor