import { MetaLine, MetaBasicContainer, MetaBlankContainer, MetaSVGIcon } from "../metaComponent"

const LeftSideComponent = (props) => {

    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <MetaBasicContainer sizeClassName='w-full h-full' layoutClassName='flex flex-row justify-start items-center'>
                
            </MetaBasicContainer>
        </div>
    )
}

export default LeftSideComponent;