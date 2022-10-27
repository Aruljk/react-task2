import {useState,useEffect}from "react";
function Name(){
    useEffect(()=>{
        // return(
        //     console.log("component will unmount")
        // )
        
    })
    return(
        <h1>arul jk</h1>
    )
}


function Main(){
    const[name,setName]=useState("Arul");
    const[age,setage]=useState(25);
    const[favorite,setfavorite]=useState("cricket");
    const [show,setShow] =useState(true)
    useEffect(()=>{
            console.log("component did update");
    },[name,age])

    return(
        <div>{name} {age} {favorite}
        <button onClick={()=>setName("jk")}>updatename</button>
        <button onClick={()=>setage(27)}>updateage</button>
        <button onClick={()=>setfavorite("volleyball")}>updategame</button>
         <button onClick={()=>setShow(!show)}>will unmount</button>
        {show ? <Name />: null}
        </div>
    )
}
export default Main