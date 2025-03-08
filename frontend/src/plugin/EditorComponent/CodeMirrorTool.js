import CodeMirror from "@uiw/react-codemirror";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { javascript } from "@codemirror/lang-javascript";
import {vscodeDark} from '@uiw/codemirror-theme-vscode'

const CodeMirrorComponent = ({ value, onChange}) => {
  return (
      <CodeMirror
        value={value}
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

class CodeMirrorTool {
  static get toolbox() {
    return {
      title: "Code",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16"><path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/></svg>`, // 替换为自定义图标
    };
  }

  constructor({ data, api }) {
    this.api = api;
    this.data = data || { code: "// 输入你的代码" };
    this.wrapper = null;
  }

  render() {
    this.wrapper = document.createElement("div");

    // 使用 React 18 的 createRoot API 来渲染 React 组件
    const root = ReactDOM.createRoot(this.wrapper);
    root.render(
      <CodeMirrorComponent
        value={this.data.code}
        onChange={(value) => {
          this.data.code = value;
        }}
      />
    );

    // 添加事件监听器，拦截 Enter 按键
    this.wrapper.addEventListener("keydown", (event) => {
      event.stopPropagation();
    });

    // 拦截粘贴事件
    this.wrapper.addEventListener('paste', (event) => {
      event.stopPropagation();  // 阻止粘贴事件向上冒泡到 Editor.js
    });

    return this.wrapper;
  }

  save() {
    return {
      code: this.data.code,
    };
  }
}

export default CodeMirrorTool;
