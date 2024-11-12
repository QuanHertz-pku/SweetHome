import { ListGroupItem } from "reactstrap";

const DirectoryBodyListItem = (props) => {

    return (
        <ListGroupItem 
            className="d-flex justify-content-between align-items-center" 
            tag="button"
            action
            onClick={
                ()=>{
                    console.log(props.index)
                    props.setselectedFile(props.index)
                }
            }
        >
            {props.children}
        </ListGroupItem>
    );

};

export default DirectoryBodyListItem;