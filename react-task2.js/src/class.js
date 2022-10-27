import React, { Component } from 'react'

// export class class extends Component {
//   render() {
//     return (
//       <div>class</div>
//     )
//   }
// }

// export default class




class Name extends Component{
    constructor(){
        super()
        this.state={
            name:"arul",
            lastName:"jk",
            age:23,
            show:true
        }
        console.log("constractors")
    }


shouldComponentUpdate(){
    console.log("should update")
    // return false;
}

componentDidUpdate(){
    console.log("compondnt didupdate")
}


    componentDidMount(){
        console.log("component didMount")
    }



    text1(){
      return(
        this.setState({
            name:"sakthi"
        })
      )  
   
    }
    render(){
        console.log("render");
        return(
            <div>
                {this.state.name}
                <h1>class compondent</h1>
                <button onClick={()=>{this.text1()}}>click</button>
                
            
            </div>
        )
    }
}
export default Name;