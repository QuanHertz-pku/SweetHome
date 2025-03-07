import { MetaBackground,MetaSidebar,MetaMaincontianer } from "../metaComponent";
import {useState} from "react"
import EditorComponent from "../metaComponent/EditorComponent/EditorComponent";
function LabPage() {
  const [EditorProps,setEditorProps] = useState({ files: [
    {
        "id": "67281fe31d2126fc3d0d8190",
        "filename": "欢迎回家"
    },
    {
        "id": "672822ab4c8379cfc6966d43",
        "filename": "18岁的最后一封情书"
    },
    {
        "id": "6728411e92cf8ecc1c8a3dda",
        "filename": "甜的日记"
    },
    {
        "id": "672841c092cf8ecc1c8a3dea",
        "filename": "驾考笔记"
    },
    {
        "id": "672842a892cf8ecc1c8a3dfa",
        "filename": "权的开发线路"
    },
    {
        "id": "672842ab92cf8ecc1c8a3dfe",
        "filename": "不知道是不是树洞的树洞"
    },
    {
        "id": "6728431692cf8ecc1c8a3e10",
        "filename": "整理我的生活"
    },
    {
        "id": "6728439392cf8ecc1c8a3e16",
        "filename": "《TailwindDocument》学习笔记"
    },
    {
        "id": "672f2b3c2e06cadec2c823f8",
        "filename": "书籍Reading:《意志力：关于专注，自控与效率的心理学》"
    },
    {
        "id": "673042092e06cadec2c82c97",
        "filename": "权的日记"
    },
    {
        "id": "6731552f2960fb9dd13485ea",
        "filename": "文献Reading：《Pleasure System in the brain》"
    },
    {
        "id": "674274a72eb4785e5ca5a44f",
        "filename": "形策论文+习概论文"
    },
    {
        "id": "6745a95759fbbfea748ca8ad",
        "filename": "臭美臭屁的相册"
    },
    {
        "id": "6749be3629ee3e720d43ed4b",
        "filename": "Reading：雪洞"
    },
    {
        "id": "6749c2d029ee3e720d43efaa",
        "filename": "阅读清单"
    },
    {
        "id": "6751319e29ee3e720d442ec9",
        "filename": "《JavaScript高级程序设计》学习笔记"
    },
    {
        "id": "67528e8a29ee3e720d443b58",
        "filename": "技术教学笔记"
    },
    {
        "id": "6756f5934e31c1d2f69991e7",
        "filename": "书籍Reading：《饮食大脑：食物如何影响心理健康》"
    },
    {
        "id": "675793cd31c1a941a0efb9dd",
        "filename": "文献Reading：《Nothing in Biology Makes Sense Except in the Light of Evolution》"
    },
    {
        "id": "675a7184e31a4721f82f5fab",
        "filename": "CET4备考笔记"
    },
    {
        "id": "675f85aff2542087ce22e9fa",
        "filename": "Temp"
    },
    {
        "id": "675f9660f2542087ce22ea4b",
        "filename": "高等数学B（上）复习-定理定义Collection"
    },
    {
        "id": "675f9a8df2542087ce22ecf1",
        "filename": "高等数学B（上）复习-题目Collection P1 一元函数"
    },
    {
        "id": "676023abf2542087ce22ff4e",
        "filename": "开源项目学习：Tesseract OCR"
    },
    {
        "id": "6760e8b8f2542087ce230574",
        "filename": "习近平新时代中国特色社会主义思想概论 复习"
    },
    {
        "id": "6760f88cf2542087ce230866",
        "filename": "开源项目学习 pdftoppm Poppler"
    },
    {
        "id": "67619e90f2542087ce2312cd",
        "filename": "习概往年题目"
    },
    {
        "id": "676288a5f2542087ce2321ba",
        "filename": "计算概论-计算机科学导论 复习"
    },
    {
        "id": "6762a7a1f2542087ce232617",
        "filename": "高等数学B（上）复习-题目Collection P2 多元函数"
    },
    {
        "id": "676381e4f2542087ce233a3a",
        "filename": "军事理论 复习"
    },
    {
        "id": "676381f6f2542087ce233a48",
        "filename": "普通生物学-细胞"
    },
    {
        "id": "6763821bf2542087ce233a57",
        "filename": "普化 体系化再整理"
    },
    {
        "id": "67638266f2542087ce233a6d",
        "filename": "计算概论-C语言语法 复习"
    },
    {
        "id": "67638277f2542087ce233a7b",
        "filename": "计算概论-数据结构与算法 复习"
    },
    {
        "id": "6768ccb1f2542087ce23592f",
        "filename": "高等数学 往年题与佳例"
    },
    {
        "id": "6768d972f2542087ce2359d6",
        "filename": "军事理论考题整理"
    },
    {
        "id": "6779081696918d34754db1ff",
        "filename": "普通生物学-演化"
    },
    {
        "id": "677a7f4996918d34754db2fa",
        "filename": "2025-元旦-北京"
    }
] });

  return (
    <MetaBackground>
      <MetaSidebar {...EditorProps} ></MetaSidebar>
      <MetaMaincontianer></MetaMaincontianer>
    </MetaBackground>
  );
}

export default LabPage;
