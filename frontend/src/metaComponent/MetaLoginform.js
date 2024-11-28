import {useEffect, useRef} from 'react';

const MetaLoginform = (props) =>
{
    const UsernameRef = useRef(null);
    const PasswordRef = useRef(null);

    return (
        <div className="flex h-screen w-full items-center justify-center text-black">
            <div className="flex flex-col items-center justify-center h-1/2 w-1/3 rounded-3xl bg-slate-100 shadow-2xl p-3">
            
                <div className="font-mono font-bold text-3xl m-3">
                    <span>Login</span>
                </div>

                <div className="flex m-2 w-full justify-center">
                    <div className="font-mono">
                    Username
                    </div>
                    <input type="text" className="rounded-md ml-2 w-1/2 pl-1"
                        ref={UsernameRef}/>
                </div>

                <div className="flex m-2 w-full justify-center">
                    <div className="font-mono">
                    Password
                    </div>
                    <input type="password"
                        className="rounded-md ml-2 w-1/2 pl-1"
                        ref={PasswordRef}
                    />
                </div>

                <div className="flex justify-center items-center w-full h-1/4 ">
                    <button 
                    className="w-1/5 h-1/4 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-mono font-bold text-sm"
                    onClick={()=>{
                        props.handleSubmit(UsernameRef.current.value,PasswordRef.current.value);
                    }}
                    >
                    Login
                    </button>
                </div>
            </div>
        </div>
    );
}
export default MetaLoginform;