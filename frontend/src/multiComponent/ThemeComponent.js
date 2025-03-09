import { MetaLine, MetaBasicContainer, MetaBlankContainer, MetaSVGIcon } from "../metaComponent"

const ThemeComponent = (props) => {

    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <MetaBasicContainer sizeClassName='w-full h-full' layoutClassName='flex flex-row justify-start items-center'>
                <MetaBlankContainer sizeClassName="pl-2" layoutClassName='flex flex-row justify-center items-center'>
                    <MetaSVGIcon src="logo.png" sizeClassName='w-12 h-13 p-2'></MetaSVGIcon>
                    <MetaLine fontClassName="text-xl font-bold text-pink-400">SweetHome</MetaLine>
                </MetaBlankContainer>
                <MetaBlankContainer sizeClassName="w-full h-full" layoutClassName='flex flex-row justify-around items-center'>
                    <MetaBlankContainer layoutClassName='flex flex-row justify-center items-center'>
                        <MetaSVGIcon src="rocket.svg" sizeClassName='w-10 h-10 p-1'></MetaSVGIcon>
                        <MetaLine fontClassName="text-l font-bold text-slate-700">登录</MetaLine>
                    </MetaBlankContainer>
                    <MetaBlankContainer layoutClassName='flex flex-row justify-center items-center'>
                        <MetaSVGIcon src="document.svg" sizeClassName='w-10 h-10 p-1'></MetaSVGIcon>
                        <MetaLine fontClassName="text-l font-bold text-slate-700">技术文档</MetaLine>
                    </MetaBlankContainer>
                    <MetaBlankContainer layoutClassName='flex flex-row justify-center items-center'>
                        <MetaSVGIcon src="funny.svg" sizeClassName='w-10 h-10 p-1'></MetaSVGIcon>
                        <MetaLine fontClassName="text-l font-bold text-slate-700">交个朋友</MetaLine>
                    </MetaBlankContainer>
                </MetaBlankContainer>
            </MetaBasicContainer>
        </div>
    )
}

export default ThemeComponent;