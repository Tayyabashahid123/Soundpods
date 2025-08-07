// import React from 'react';

export default function Pad(props) {
    // const [padMode,setpadMode]= React.useState(props.mode)
    const Btnstyle = { backgroundColor: props.color};

    // function handleClick(){
    //     setpadMode(prevMode => !prevMode)
    // }   
    return <button style={Btnstyle} className={props.mode? 'on': 'off'} onClick={()=> props.toggle(props.id)}> Button </button>
}


