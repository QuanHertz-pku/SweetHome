import { MetaLine, MetaBasicContainer, MetaBlankContainer, MetaSVGIcon } from "../metaComponent"

const LeftBarComponent = (props) => {

    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <MetaBasicContainer sizeClassName='w-full h-full' layoutClassName='flex flex-row justify-start items-center'>
                <MetaBlankContainer sizeClassName='w-full h-full p-2' layoutClassName='flex flex-row justify-around items-center'>
                    <MetaSVGIcon sizeClassName="auto h-full hover:scale-105" src="home.svg"></MetaSVGIcon>
                    <MetaSVGIcon sizeClassName="auto h-full hover:scale-105" src="cloud-file.svg"></MetaSVGIcon>
                    <MetaSVGIcon sizeClassName="auto h-full hover:scale-105" src="user.svg"></MetaSVGIcon>
                    <MetaSVGIcon sizeClassName="auto h-full hover:scale-105" src="calendar.svg"></MetaSVGIcon>
                    <MetaSVGIcon sizeClassName="auto h-full hover:scale-105" src="academic-cap.svg"></MetaSVGIcon>
                </MetaBlankContainer>
            </MetaBasicContainer>
        </div>
    )
}

export default LeftBarComponent;