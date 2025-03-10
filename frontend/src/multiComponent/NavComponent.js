import { MetaLine, MetaBasicContainer, MetaBlankContainer, MetaSVGIcon } from "../metaComponent"

const NavComponent = (props) => {

    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <MetaBasicContainer sizeClassName='w-full h-full' layoutClassName='flex flex-row justify-start items-center'>
                <MetaBlankContainer sizeClassName='w-1/3 h-full' layoutClassName='flex flex-row justify-start items-center'>
                    <MetaLine sizeClassName='px-4' fontClassName="font-melon text-l">Home:\欢迎回家</MetaLine>
                </MetaBlankContainer>
                <MetaBlankContainer sizeClassName='w-1/3 h-full' layoutClassName='flex flex-row justify-between items-center'>
                    <MetaSVGIcon sizeClassName="h-full" src="line-vertical.svg"></MetaSVGIcon>
                    <MetaLine sizeClassName='p-1' fontClassName="font-easyLine text-xl font-semibold">欢 迎 回 家</MetaLine>
                    <MetaSVGIcon sizeClassName="h-full" src="line-vertical.svg"></MetaSVGIcon>
                </MetaBlankContainer>
                <MetaBlankContainer sizeClassName='w-1/3 h-full' layoutClassName='flex flex-row justify-center items-center'>
                    <MetaLine sizeClassName='p-1' fontClassName="font-melon text-l">{new Date().toLocaleDateString()}</MetaLine>
                </MetaBlankContainer>
            </MetaBasicContainer>
        </div>
    )
}

export default NavComponent;