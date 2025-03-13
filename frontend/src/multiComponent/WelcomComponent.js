import { MetaLine, MetaBasicContainer, MetaBlankContainer, MetaSVGIcon,MetaColorContainer, MetaInput, MetaScrollableContainer, MetaDot } from "../metaComponent"

const WelcomeComponent = (props) => {

    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <MetaBasicContainer sizeClassName='w-full h-full' layoutClassName='flex flex-col justify-start items-center'>
                <MetaScrollableContainer>
                    <MetaColorContainer colorClassName="border-2 border-slate-700" sizeClassName="w-full p-2" layoutClassName='flex flex-row justify-around items-center'>
                        <MetaBlankContainer sizeClassName="w-full h-full" layoutClassName='flex flex-col justify-start items-center'>
                            <MetaBlankContainer sizeClassName="w-full h-12" layoutClassName='flex flex-row justify-start items-center'>
                                <MetaSVGIcon sizeClassName="p-2 h-12 w-auto" src="face-scan.svg"></MetaSVGIcon>
                                <MetaLine fontClassName="text-base font-bold text-slate-700">心情量表</MetaLine>
                            </MetaBlankContainer>
                            <MetaBlankContainer sizeClassName="w-full h-full p-1" layoutClassName='flex flex-row justify-start items-center'>
                                <MetaLine fontClassName="text-sm font-bold text-slate-700">1,今天的整体情绪如何?</MetaLine>
                                
                            </MetaBlankContainer>
                            <MetaBlankContainer sizeClassName="w-full h-full p-1" layoutClassName='flex flex-row justify-start items-center'>
                                <MetaLine fontClassName="text-sm font-bold text-slate-700">2,今天的能量状态更像什么?</MetaLine>
                                
                            </MetaBlankContainer>
                            <MetaBlankContainer sizeClassName="w-full h-full p-1" layoutClassName='flex flex-row justify-start items-center'>
                                <MetaLine fontClassName="text-sm font-bold text-slate-700">3,今天让你最在意的一件事是？</MetaLine>
                                
                            </MetaBlankContainer>
                        </MetaBlankContainer>
                    </MetaColorContainer>
                    <MetaBlankContainer sizeClassName="w-full p-1" layoutClassName='flex flex-row justify-around items-center'>
                        <MetaColorContainer colorClassName="border-2 border-slate-700" sizeClassName="w-1/2 h-full p-1">
                            <MetaBlankContainer layoutClassName='flex flex-row justify-start items-center'>
                                <MetaDot sizeClassName="h-4 w-5 pl-1" colorClassName="bg-pink-500"></MetaDot>
                                <MetaLine fontClassName="pl-1 text-base font-bold text-slate-700">甜在....</MetaLine>
                            </MetaBlankContainer>
                            <MetaBlankContainer layoutClassName='flex flex-row justify-start items-center'>
                                <MetaSVGIcon sizeClassName="h-4 w-10 pl-6" src="face-scan.svg"></MetaSVGIcon>
                                <MetaLine fontClassName="pl-1 text-base font-bold text-slate-700">读书 7:00-22:00</MetaLine>
                            </MetaBlankContainer>
                        </MetaColorContainer>
                        <MetaColorContainer colorClassName="border-2 border-slate-700" sizeClassName="w-1/2 h-full p-1">
                        <MetaBlankContainer layoutClassName='flex flex-row justify-start items-center'>
                                <MetaDot sizeClassName="h-4 w-5 pl-1" colorClassName="bg-indigo-600"></MetaDot>
                                <MetaLine fontClassName="pl-1 text-base font-bold text-slate-700">权在....</MetaLine>
                            </MetaBlankContainer>
                            <MetaBlankContainer layoutClassName='flex flex-row justify-start items-center'>
                                <MetaSVGIcon sizeClassName="h-4 w-10 pl-6" src="funny.svg"></MetaSVGIcon>
                                <MetaLine fontClassName="pl-1 text-base font-bold text-slate-700">发呆 16:00-17:00</MetaLine>
                            </MetaBlankContainer>
                        </MetaColorContainer>
                    </MetaBlankContainer>
                    <MetaBlankContainer sizeClassName="w-full h-3/5" layoutClassName='flex flex-row justify-around items-center'>
                    <MetaColorContainer colorClassName="border-2 border-slate-700" sizeClassName="w-1/2 h-full p-1">
                        <MetaBlankContainer layoutClassName='flex flex-row justify-start items-center'>
                                <MetaDot sizeClassName="h-4 w-5 pl-1" colorClassName="bg-pink-500"></MetaDot>
                                <MetaLine fontClassName="pl-1 text-base font-bold text-slate-700">甜的月度目标</MetaLine>
                            </MetaBlankContainer>
                            <MetaBlankContainer layoutClassName='flex flex-row justify-start items-center'>
                                <MetaSVGIcon sizeClassName="h-4 w-10 pl-6" src="funny.svg"></MetaSVGIcon>
                                <MetaLine fontClassName="pl-1 text-base font-bold text-slate-700">5KM PB破 20min！</MetaLine>
                            </MetaBlankContainer>
                        </MetaColorContainer>
                        <MetaColorContainer colorClassName="border-2 border-slate-700" sizeClassName="w-1/2 h-full p-1">
                        <MetaBlankContainer layoutClassName='flex flex-row justify-start items-center'>
                                <MetaDot sizeClassName="h-4 w-5 pl-1" colorClassName="bg-indigo-600"></MetaDot>
                                <MetaLine fontClassName="pl-1 text-base font-bold text-slate-700">权的月度目标</MetaLine>
                            </MetaBlankContainer>
                            <MetaBlankContainer layoutClassName='flex flex-row justify-start items-center'>
                                <MetaSVGIcon sizeClassName="h-4 w-10 pl-6" src="funny.svg"></MetaSVGIcon>
                                <MetaLine fontClassName="pl-1 text-base font-bold text-slate-700">10KM PB破40min！</MetaLine>
                            </MetaBlankContainer>
                        </MetaColorContainer>
                    </MetaBlankContainer>
                </MetaScrollableContainer>
            </MetaBasicContainer>
        </div>
    )
}

export default WelcomeComponent;