import React,{useState} from 'react'

function  Hlo(){
    const [name,setName]=useState("sakthi")
    const [lname,setLname]=useState("muthuselvan")
  return (
    <div>
         {name}
    </div>
   
  )
}

export default Hlo;