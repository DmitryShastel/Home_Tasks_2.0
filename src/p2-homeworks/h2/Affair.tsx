import React from 'react'
import {AffairType} from "./HW2";

export type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}

    return (
        <div>
            //some text 111111

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
