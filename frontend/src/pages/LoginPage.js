import {useEffect,useRef} from "react";
import { useNavigate } from 'react-router-dom';

import AuthLoginSender from '@/servers/AuthServer/AuthLoginSender'


import {MetaBackground,MetaLoginform,MetaNavbar,MetaReminder} from "@/metaComponent";
function LoginPage({}){
    const scaleRef = useRef(null);
    const navigate = useNavigate ();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home'); // 有 token，跳转到 Home 页面
        }
    }, []);

    const handleSubmit = (Username, Password) => {
        const formData = {
            name: Username,
            pwd: Password
        };
        AuthLoginSender(formData).then(res=>{
            console.log(res);
            if(res.message === '登录成功'){
                localStorage.setItem('token', res.token)
                window.location.reload();
            }
        }).catch((res)=>{
            console.log(res.message)
            scaleRef.current.classList.remove('scale-0');
            scaleRef.current.classList.add('scale-100','duration-200');
        });
    }

    return(
        <MetaBackground>
            <MetaReminder scaleRef={scaleRef}/>
            <MetaNavbar/>
            <MetaLoginform handleSubmit={handleSubmit}></MetaLoginform>
        </MetaBackground>
    )
}

export default LoginPage