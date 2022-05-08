import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

function Querys(props) {
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const value=searchParams.get(props.query);

    //console.log(value);
    
    useEffect(()=>{
        let el = document.getElementById(value);
        if(el !== null){
            el.scrollIntoView({behavior:'smooth',block:'center'});
        }
        //console.log(el);
    });
    
    return (<div/>);
}

export default Querys;