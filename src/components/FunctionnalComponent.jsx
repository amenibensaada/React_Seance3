import { useState } from "react";

function FunctionnalComponent(props) {
   const [state1,setState1]= useState(0)
    return (
        <h1>Hello Functionnal Component {props.test}
        , the value of state is {state1}
        </h1>
    )
}


export default  FunctionnalComponent;