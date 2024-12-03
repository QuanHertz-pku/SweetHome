import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import InlineCode from '@editorjs/inline-code';
import CodeMirrorTool from './CodeMirrorTool';
import ImageTool from '@editorjs/image';

const EditorOrigin = ({handleAutoSave})=>{
    return new EditorJS({
        holder: 'editorjs',
            tools: {
                header: Header,
                list: {
                    class: List,
                    inlineToolbar: true
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true
                },
                code:{
                    class: CodeMirrorTool,
                },
                inlineCode: InlineCode,
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            byFile: process.env.API_URL+'/files/uploadFile', // Your backend file uploader endpoint
                        }
                    }
                }
            },
            onChange: handleAutoSave,
            autofocus: true,
            i18n: {
            messages: {
                ui: {
                "blockTunes": {
                    "toggler": {
                    "Click to tune": "调整块"
                    },
                },
                "inlineToolbar": {
                    "converter": {
                    "Convert to": "类型转换"
                    }
                },
                "toolbar": {
                    "toolbox": {
                    "Add": "添加块"
                    }
                }
                },
                toolNames: {
                "Text": "段落",
                "Heading": "标题",
                "List": "列表",
                "Checklist": "待办",
                "Code": "代码",
                "Link": "超链接",
                "Image": "图片",
                "Bold": "粗体",
                "Italic": "斜体",
                "InlineCode": "行内代码",
                },
                tools: {
                "link": {
                    "Add a link": "输入链接"
                },
                "stub": {
                    'The block can not be displayed correctly.': '这个块似乎被玩坏了'
                }
                },
                blockTunes: {
                "delete": {
                    "Delete": "删除块"
                },
                "moveUp": {
                    "Move up": "上移一格"
                },
                "moveDown": {
                    "Move down": "下移一格"
                }
                },
            }
            },
    });
}

export default EditorOrigin;