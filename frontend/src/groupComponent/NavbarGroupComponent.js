import {
    NavbarMetaComponent,
    IconMetaComponent,
    LinkMetaComponent,
    LinkgroupMetaComponent
} from "@/metaComponent";

const NavbarGroupComponent = (props) => {

    return (
        <NavbarMetaComponent>
            <IconMetaComponent></IconMetaComponent>
            <LinkgroupMetaComponent>
                <LinkMetaComponent>Dashboard</LinkMetaComponent>
                <LinkMetaComponent>Docs</LinkMetaComponent>
                <LinkMetaComponent>Blog</LinkMetaComponent> 
            </LinkgroupMetaComponent>
        </NavbarMetaComponent>
    );
}

export default NavbarGroupComponent;