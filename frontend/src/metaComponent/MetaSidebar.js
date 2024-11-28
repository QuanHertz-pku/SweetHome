import {MetaUserbar,MetaSearchbar, MetaButtonbar, MetaFilelist,MetaFlowlist, MetaLablist} from "./"

const MetaSidebar = (props) => {
    return (
        <div className="absolute left-0 h-full w-1/4 p-2">
            <div className="flex h-full w-full flex-col rounded-md border-2 border-slate-200 bg-slate-100">
                
                <MetaUserbar></MetaUserbar>
                <MetaSearchbar></MetaSearchbar>
                <MetaButtonbar/>

                <div className="w-full flex-grow flex-col">
                    <MetaFilelist {...props}></MetaFilelist>
                    <MetaFlowlist></MetaFlowlist>
                    <MetaLablist></MetaLablist>
                </div>
            </div>
        </div>
    );
}
export default MetaSidebar;
