import { MetaBackgroundContainers,MetaBasicButton,MetaBasicContainer, MetaBlankContainer, MetaScecondButton, MetaScrollableContainer, MetaSVGIcon, MetaLine } from "../metaComponent";
import MetaInput from "../metaComponent/paragraphs/MetaInput";

function LabPage() {
  return (
    <MetaBackgroundContainers sizeClassName="w-screen h-screen" layoutClassName="relative" positionClassName="">
        <MetaBasicContainer sizeClassName="w-full h-30 p-1.5" layoutClassName="" positionClassName="absolute top-0">
          <MetaScrollableContainer>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <MetaBlankContainer layoutClassName='flex flex-col'>
              <MetaBlankContainer sizeClassName='p-1'>
                <MetaBasicButton sizeClassName='h-20 w-20'></MetaBasicButton>
              </MetaBlankContainer>
              <MetaBlankContainer sizeClassName='p-1'>
                <MetaScecondButton sizeClassName='h-20 w-20'></MetaScecondButton>
              </MetaBlankContainer>
              <MetaBlankContainer sizeClassName='w-10 h-10'>
                <MetaSVGIcon src="folder.svg"></MetaSVGIcon>
              </MetaBlankContainer>
              <MetaLine sizeClassName="w-20" fontClassName="text-lg">hhhhhhhhhhhhhhh  welcome!!!!</MetaLine>
              <MetaInput></MetaInput>
            </MetaBlankContainer>
          </MetaScrollableContainer>
        </MetaBasicContainer>
    </MetaBackgroundContainers>
  );
}

export default LabPage;
