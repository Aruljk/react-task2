import {useState}from "react";

function Main(){
    const[name,setName]=useState("Arul");
    const[age,setage]=useState(25);
    const[favorite,setfavorite]=useState("cricket");
    return(
        <div>{name} {age} {favorite}
        <button onClick={()=>setName("jk")}>updatename</button>
        <button onClick={()=>setage(27)}>updateage</button>
        <button onClick={()=>setfavorite("volleyball")}>updategame</button>
        </div>
    )
}
export default Main