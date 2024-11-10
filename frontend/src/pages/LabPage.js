import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import {vscodeDark} from '@uiw/codemirror-theme-vscode'
import ScrollableContainer from "../components/CustomContainer/ScrollableContainer";
function LabPage() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
      <CodeMirror
        value="console.log('hello world!');"
        height="auto"
        theme={vscodeDark}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        basicSetup={{
            lineWrapping: true, // 启用自动换行，避免水平滚动
        }}
      />
  );
}

export default LabPage;