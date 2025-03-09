import { MetaBackgroundContainers,MetaBasicButton,MetaBasicContainer, MetaBlankContainer, MetaScecondButton, MetaScrollableContainer, MetaSVGIcon, MetaLine } from "../metaComponent";
import { IndexWordComponent, ThemeComponent } from "../multiComponent";
import LeftBarComponent from "../multiComponent/LeftBarComponent";
import LeftSideComponent from "../multiComponent/LeftSideComponent";
import NavComponent from "../multiComponent/NavComponent";
import RightSideComponent from "../multiComponent/RightSideComponent";
import WelcomeComponent from "../multiComponent/WelcomComponent";

function LabPage() {
  return (
    <MetaBackgroundContainers sizeClassName="w-screen h-screen" layoutClassName="relative">
      <MetaBlankContainer sizeClassName="absolute z-10 w-full h-full" layoutClassName="flex flex-row">
        <MetaBlankContainer sizeClassName="w-1/6 h-full p-1" layoutClassName="flex flex-col">
          <LeftBarComponent sizeClassName="h-16 w-full p-1"></LeftBarComponent>
          <LeftSideComponent sizeClassName="h-full w-full p-1"></LeftSideComponent>
        </MetaBlankContainer>
        <MetaBlankContainer sizeClassName="w-2/3 h-full py-1" layoutClassName="flex flex-col">
          <NavComponent sizeClassName="h-16 w-full py-1"></NavComponent>
          <WelcomeComponent sizeClassName="h-full w-full py-1"></WelcomeComponent>
        </MetaBlankContainer>
        <MetaBlankContainer sizeClassName="w-1/6 h-full p-1" layoutClassName="flex flex-col">
          <RightSideComponent sizeClassName="h-full w-full p-1"></RightSideComponent>
        </MetaBlankContainer>
      </MetaBlankContainer>
    </MetaBackgroundContainers>
  );
}

export default LabPage;
