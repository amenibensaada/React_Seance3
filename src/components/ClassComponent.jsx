import React from "react";
export class ClassComponent extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value1: "value1",
    //         obj: {
    //             valobj:10
    //         }
    //     }
    // }
    state = {
        value1: "value1",
        obj: {
            valobj:10
        }
    }

    render() {
        return (
        <>
                <h1>Hello Class Component {this.props.name} </h1>;
                <p>{this.state.value1} & { this.state.obj.valobj}</p>
        </>)
    }
}
 