import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import InlineCode from '@editorjs/inline-code';
import CodeMirrorTool from './CodeMirrorTool';
import ImageTool from '@editorjs/image';
import Delimiter from '@editorjs/delimiter';
import Table from '@editorjs/table';
import Marker from '@editorjs/marker';
import Underline from '@editorjs/underline';
const EditorOrigin = ({ handleAutoSave, selectedFile }) => {
    return new EditorJS({
        holder: 'editorjs',
        tools: {
            header: Header,
            delimiter: Delimiter,
            marker: Marker,
            underline: Underline,
            table: {
                class: Table,
                inlineToolbar: true,
                config: {
                    rows: 2,
                    cols: 3,
                    stretched: false
                },
            },
            list: {
                class: List,
                inlineToolbar: true
            },
            checklist: {
                class: Checklist,
                inlineToolbar: true
            },
            code: {
                class: CodeMirrorTool,
            },
            inlineCode: InlineCode,
            image: {
                class: ImageTool,
                config: {
                    endpoints: {
                        byFile: process.env.API_URL + '/files/uploadFile', // Your backend file uploader endpoint
                    }
                }
            }
        },
        onChange: () => {
            handleAutoSave(selectedFile);
        },
        autofocus: true,
        i18n: {
            messages: {
                ui: {
                    "blockTunes": {
                        "toggler": {
                            "Click to tune": "调整块",
                            "Convert to": "类型转换"
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
                        },
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
                    "Delimiter": "分割线",
                    "Table": "表格",
                    "Marker": "标记",
                    "Underline": "下划线"
                },
                tools: {
                    "link": {
                        "Add a link": "输入链接"
                    },
                    "table": {
                        "With headings": "使用表头",
                        "Without headings": "不使用表头",
                        "Stretch": "拉伸",
                        "Add row above": "在上方添加行",
                        "Add row below": "在下方添加行",
                        "Delete row": "删除行",
                        "Add column to left": "在左侧添加列",
                        "Add column to right": "在右侧添加列",
                        "Delete column": "删除列",
                        "Delete table": "删除表格"
                    },
                    "image": {
                        "Caption": "图片说明",
                        "Select an Image": "选择图片",
                        "Stretch image": "拉伸图片",
                        "With background": "使用背景",
                        "With border": "使用边框"
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
                    },
                },
            }
        },
    });
}

export default EditorOrigin;