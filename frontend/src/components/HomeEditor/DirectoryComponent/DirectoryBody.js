import ScrollableContainer from "../../CustomContainer/ScrollableContainer";
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap'

import DirectoryBodyListItem from "./DirectoryBodyListItem";

function DirectoryBody(props) {
    return (
        <div style={{ width: '100%', height: '83vh' }}>
            <ScrollableContainer>
                <ListGroup>
                    {
                        props.files.map((item, index) => {
                            return (
                                <DirectoryBodyListItem 
                                    key={index}
                                    {...item}
                                    index={index}
                                    setselectedFile={props.setselectedFile}
                                >
                                    {item.filename}
                                </DirectoryBodyListItem>
                            )
                        })
                    }
                </ListGroup>
            </ScrollableContainer>
        </div>
    );
}
export default DirectoryBody;