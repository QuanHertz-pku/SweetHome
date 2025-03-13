import { MetaLine, MetaBasicContainer, MetaBlankContainer, MetaSVGIcon,MetaColorContainer, MetaInput, MetaScrollableContainer, MetaDot } from "../metaComponent"

const UserInfoComponent = (props) => {

    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <MetaBasicContainer sizeClassName='w-full h-full' layoutClassName='flex flex-col justify-start items-center'>
                <MetaScrollableContainer>
                    <MetaBlankContainer>
                        <MetaBlankContainer sizeClassName='w-full h-fit' layoutClassName='flex flex-row justify-start items-center'>
                            <MetaSVGIcon sizeClassName="h-20 w-20 pl-2 pt-2" src="bomb.svg"></MetaSVGIcon>
                            <MetaLine sizeClassName="pt-4" fontClassName='text-xl font-bold font-melon'>个人信息</MetaLine>
                        </MetaBlankContainer>
                        <MetaBlankContainer layoutClassName='flex flex-row justify-start items-center'>
                            <MetaBlankContainer sizeClassName='pl-2 w-1/2 h-fit' layoutClassName='flex flex-row justify-start items-center'>
                                <MetaLine sizeClassName="pt-1" fontClassName='text-xl font-bold font-melon'>UserName:</MetaLine>
                                <MetaLine sizeClassName="pt-1 pl-1" fontClassName='text-xl font-bold font-melon'>甜瓜</MetaLine>
                            </MetaBlankContainer>
                            <MetaBlankContainer sizeClassName='pl-2 w-1/2 h-fit' layoutClassName='flex flex-row justify-start items-center'>
                                <MetaLine sizeClassName="pt-1" fontClassName='text-xl font-bold font-melon'>FamilyName:</MetaLine>
                                <MetaLine sizeClassName="pt-1 pl-1" fontClassName='text-xl font-bold font-melon'>WramCoutry</MetaLine>
                            </MetaBlankContainer>
                        </MetaBlankContainer>
                        <MetaBlankContainer>
                            <MetaColorContainer sizeClassName="w-full h-40 p-1" colorClassName="border-2 border-slate-700"></MetaColorContainer>
                        </MetaBlankContainer>
                    </MetaBlankContainer>
                    <MetaBlankContainer>
                        <MetaBlankContainer sizeClassName='w-full h-fit' layoutClassName='flex flex-row justify-start items-center'>
                            <MetaSVGIcon sizeClassName="h-20 w-20 pl-2 pt-2" src="home.svg"></MetaSVGIcon>
                            <MetaLine sizeClassName="pt-4" fontClassName='text-xl font-bold font-melon'>家庭信息</MetaLine>
                        </MetaBlankContainer>
                        <MetaBlankContainer layoutClassName='flex flex-row justify-start items-center'>
                            <MetaBlankContainer sizeClassName='pl-2 w-1/2 h-fit' layoutClassName='flex flex-row justify-start items-center'>
                                <MetaLine sizeClassName="pt-1" fontClassName='text-xl font-bold font-melon'>FamilyName:</MetaLine>
                                <MetaLine sizeClassName="pt-1 pl-1" fontClassName='text-xl font-bold font-melon'>WramCoutry</MetaLine>
                            </MetaBlankContainer>
                            <MetaBlankContainer sizeClassName='pl-2 w-1/2 h-fit' layoutClassName='flex flex-row justify-start items-center'>
                                <MetaLine sizeClassName="pt-1" fontClassName='text-xl font-bold font-melon'>number:</MetaLine>
                                <MetaLine sizeClassName="pt-1 pl-1" fontClassName='text-xl font-bold font-melon'>2</MetaLine>
                            </MetaBlankContainer>
                            <MetaBlankContainer>
                                <MetaColorContainer sizeClassName="w-full h-40 p-1" colorClassName="border-2 border-slate-700"></MetaColorContainer>
                            </MetaBlankContainer>
                        </MetaBlankContainer>
                    </MetaBlankContainer>
                </MetaScrollableContainer>
            </MetaBasicContainer>
        </div>
    )
}

export default UserInfoComponent;