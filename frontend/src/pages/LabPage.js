import { MetaBackgroundContainers,MetaBasicContainer } from "../metaComponent";

function LabPage() {
  return (
    <MetaBackgroundContainers sizeClassName="w-screen h-screen" layoutClassName="relative" positionClassName="">
        <MetaBasicContainer sizeClassName="w-full h-16 p-1.5" layoutClassName="" positionClassName="absolute top-0">
        </MetaBasicContainer>
    </MetaBackgroundContainers>
  );
}

export default LabPage;
