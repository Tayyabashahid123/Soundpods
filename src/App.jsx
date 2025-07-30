import React from "react"
import Pad from "./Pad"
import padsData from "./pads"
import "./index.css"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    function toggle(id) {
        console.log("clicked!");
        console.log("Before:", pads);

        const updatedPads = pads.map(pad => {
            if (pad.id === id) {
                return { ...pad, on: !pad.on };
            }
            return pad;
        });

        console.log("After:", updatedPads);
        setPads(updatedPads);
    }


    console.log(pads)
    return (
        <main>
            <div className="pad-container">
                {pads.map((pad) => (
                    <Pad key={pad.id} color={pad.color} mode={pad.on} toggle={toggle} id={pad.id}/>
                    ))}
            </div>
        </main>
    )
}

