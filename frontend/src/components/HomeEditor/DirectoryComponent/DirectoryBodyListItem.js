import { 
    Dropdown,
    ListGroupItem,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "reactstrap";
import { useState, useRef } from "react";

import DeleteFileServer from "../../../servers/FileServer/DeleteFilrServer";
import RenameFileServer from "../../../servers/FileServer/RenameFileServer";

const DirectoryBodyListItem = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [modal, setModal] = useState(false);
    const toggle1 = () => setModal(!modal);
    const inputRef = useRef(null);

    return (
        <ListGroupItem 
            className="d-flex justify-content-between align-items-center" 
            tag="button"
            action
            onClick={() => {
                console.log(props.index);
                props.setselectedFile(props.index);
            }}
        >
            <div>{props.filename}</div>
            <div>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} direction='down'>
                    <DropdownToggle caret></DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => {
                            toggle1();
                        }}>重命名</DropdownItem>
                        <Modal isOpen={modal} toggle={toggle1}>
                            <ModalHeader toggle={toggle1}>重命名</ModalHeader>
                            <ModalBody>
                                <Input
                                    innerRef={inputRef} // 使用 innerRef 替代 ref
                                    placeholder={props.filename}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={async () => {
                                    try {
                                        const inputValue = inputRef.current.value;
                                        console.log(inputValue); // 输出输入框的值
                                        await RenameFileServer(props.id, inputValue);
                                        window.location.reload()
                                        toggle1();
                                    } catch (error) {
                                        console.error('Error:', error);
                                    }
                                }}>
                                    确认
                                </Button>
                            </ModalFooter>
                        </Modal>
                        <DropdownItem onClick={() => {
                            DeleteFileServer(props.id);
                            window.location.reload();
                        }}>删除</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </ListGroupItem>
    );
};

export default DirectoryBodyListItem;