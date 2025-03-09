import { MetaShadowLine,MetaBlankContainer, MetaMiddleButton, MetaLine} from "../metaComponent"

const ThemeComponent = (props) => {

    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <MetaBlankContainer sizeClassName="w-full h-full" layoutClassName="flex flex-row justify-center">
                <MetaBlankContainer sizeClassName="h-full" layoutClassName="flex flex-col justify-center">
                    <MetaBlankContainer layoutClassName="flex flex-col items-center">  
                        <MetaShadowLine fontClassName="py-2 text-6xl font-bold text-white">Sweet · Home</MetaShadowLine>
                        <MetaBlankContainer layoutClassName="py-2 flex flex-row items-center">
                            <MetaShadowLine fontClassName="text-2xl font-bold text-white">这里是</MetaShadowLine>
                            <MetaShadowLine sizeClassName="px-2" fontClassName="text-4xl font-bold text-white">甜</MetaShadowLine>
                            <MetaShadowLine fontClassName="text-2xl font-bold text-white">和</MetaShadowLine>
                            <MetaShadowLine sizeClassName="px-2" fontClassName="text-4xl font-bold text-white">权</MetaShadowLine>
                            <MetaShadowLine fontClassName="text-2xl font-bold text-white">的小窝</MetaShadowLine>
                        </MetaBlankContainer>
                        <MetaMiddleButton sizeClassName="w-32 h-16 p-2">
                            <MetaLine sizeClassName="w-full h-full" layoutClassName="flex flex-row justify-center items-center" fontClassName="text-xl text-white">回家</MetaLine>
                        </MetaMiddleButton>
                    </MetaBlankContainer>
                </MetaBlankContainer>
            </MetaBlankContainer>
        </div>
    )
}

export default ThemeComponent;