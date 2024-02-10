import { Component } from "react"
// import React from "react"

class ClassComp extends Component{
    render(){

        this.state = {
            personName: "Mark Jones",
            arr: [1, 3, 50, 60],
            isActive: false,
        }

        return (
            <div className="pages">
                <h2>This is a Class Component</h2>
                <h1>{this.state.personName}</h1>
                <h3>{this.state.inactive}</h3>
                <p>{this.state.inactive === true ? "User is Active" : "User is Inactive"}</p>
                <ul>
                    <li>
                        {this.state.arr.map((myArr) => {
                            <li>{myArr}</li>
                        })}
                    </li>
                </ul>
            </div>
        )
    }
}

// class ClassComp extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h2>This is a Class Component</h2>
//             </div>
//         )
//     }
// }

export default ClassComp;