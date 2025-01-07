import {useState,useMemo} from "react";
var slowFunction=(number)=>{
    for (let i=0;i<10000000000;i++)
    {
        return number*2;
    }
}
var UseMemo=()=>{
    var[num,setNum]=useState(0);
    
    var[theme,setTheme]=useState("true");

    var darkLight={
        backgroundColor:(theme)?"black":"white",
        colr:(theme)?"white":"black",
    };

    var doublingANumber=useMemo(()=>{
        return slowFunction(num)
    },[num])
    return(
        <section>
            <h1>This is useMemo Example</h1>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>setTheme(theme = !theme)}>Toggle Theme</button>
            <h2 style={darkLight}>{doublingANumber}</h2>
        </section>  
    )
}
export default UseMemo;