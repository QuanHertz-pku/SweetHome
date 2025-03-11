import { MetaLine, MetaBasicContainer, MetaBlankContainer, MetaSVGIcon,MetaColorContainer, MetaInput } from "../metaComponent"

const WelcomeComponent = (props) => {

    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <MetaBasicContainer sizeClassName='w-full h-full' layoutClassName='flex flex-col justify-start items-center'>
                <MetaColorContainer colorClassName="border-2 border-slate-700" sizeClassName="w-full h-1/5 p-2" layoutClassName='flex flex-row justify-around items-center'>
                    <MetaBlankContainer sizeClassName="w-full h-full" layoutClassName='flex flex-col justify-start items-center'>
                        <MetaBlankContainer sizeClassName="w-full h-12" layoutClassName='flex flex-row justify-start items-center'>
                            <MetaSVGIcon sizeClassName="p-2 h-12 w-auto" src="face-scan.svg"></MetaSVGIcon>
                            <MetaLine fontClassName="text-l font-bold text-slate-700">心情量表</MetaLine>
                        </MetaBlankContainer>
                        <MetaBlankContainer sizeClassName="w-full h-full p-1" layoutClassName='flex flex-row justify-start items-center'>
                            <MetaLine fontClassName="text-l font-bold text-slate-700">1,今天的整体情绪如何?</MetaLine>
                            
                        </MetaBlankContainer>
                        <MetaBlankContainer sizeClassName="w-full h-full p-1" layoutClassName='flex flex-row justify-start items-center'>
                            <MetaLine fontClassName="text-l font-bold text-slate-700">2,今天的能量状态更像什么?</MetaLine>
                            
                        </MetaBlankContainer>
                        <MetaBlankContainer sizeClassName="w-full h-full p-1" layoutClassName='flex flex-row justify-start items-center'>
                            <MetaLine fontClassName="text-l font-bold text-slate-700">3,今天让你最在意的一件事是？</MetaLine>
                            
                        </MetaBlankContainer>
                    </MetaBlankContainer>
                </MetaColorContainer>
                <MetaBlankContainer sizeClassName="w-full h-1/5 p-1" layoutClassName='flex flex-row justify-around items-center'>
                    <MetaColorContainer colorClassName="border border-slate-400" sizeClassName="w-1/2 h-full p-1">
                    111
                    </MetaColorContainer>
                    <MetaColorContainer colorClassName="border border-slate-400" sizeClassName="w-1/2 h-full p-1">
                    222
                    </MetaColorContainer>
                </MetaBlankContainer>
                <MetaBlankContainer sizeClassName="w-full h-3/5" layoutClassName='flex flex-row justify-around items-center'>
                    <MetaBlankContainer sizeClassName="w-1/2 h-full">
                        
                    </MetaBlankContainer>
                    <MetaBlankContainer sizeClassName="w-1/2 h-full">
                    222 
                    </MetaBlankContainer>
                </MetaBlankContainer>
            </MetaBasicContainer>
        </div>
    )
}

export default WelcomeComponent;