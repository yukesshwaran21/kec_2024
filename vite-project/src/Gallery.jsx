import {useState} from "react";
var Gallery = () => {
    var [count,setcount]= useState(0);

    return(
        <div>
            <h1>This is gallery page {count}</h1>
            <button onClick={()=>{setcount(count+1)}}>Increment</button>
            <button onClick={()=>{setcount(count-1)}}>Decrement</button>
            <button onClick={()=>{setcount(0)}}>Refresh</button>
        </div>
    )
}

export default Gallery;