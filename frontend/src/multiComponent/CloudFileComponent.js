import { MetaLine, MetaBasicContainer, MetaBlankContainer, MetaSVGIcon,MetaColorContainer, MetaInput, MetaScrollableContainer, MetaDot } from "../metaComponent"

const CouldFileComponent = (props) => {

    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <MetaBasicContainer sizeClassName='w-full h-full' layoutClassName='flex flex-col justify-start items-center'>
                <MetaScrollableContainer>
                    {/*<div className="w-full h-full grid grid-cols-12">
                        <div className="bg-red-200 w-10 h-10"></div>
                        <div className="bg-red-200 w-10 h-10"></div>
                    </div>*/}
                    <MetaBlankContainer layoutClassName="grid grid-cols-12">
                        {[1,2,3,4,5,6,7,8,7,7,7,7,3,3,3,].map(item => (
                            <MetaBlankContainer sizeClassName="w-fit h-fit" layoutClassName='flex flex-col items-center'>
                                <MetaColorContainer sizeClassName='w-fit h-fit p-2' colorClassName="border-2 border-slate-700" layoutClassName='flex flex-col'>
                                    <MetaSVGIcon sizeClassName='w-12 h-auto p-1' hoverClassName="hover:scale-105"  src="document.svg"></MetaSVGIcon>
                                </MetaColorContainer>
                                <MetaLine>文件1</MetaLine>
                            </MetaBlankContainer>
                        ))}
                    </MetaBlankContainer>
                </MetaScrollableContainer>
            </MetaBasicContainer>
        </div>
    )
}

export default CouldFileComponent;