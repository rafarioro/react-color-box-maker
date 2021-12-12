import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';


const BoxList = () => {
    


    const [ boxes, setBoxes ] = useState([{ id: 1, dims: 100, color: 'blue'}]);

    //pass down this function so that it can be used in NewBoxForm
    const addBox = (dims, color) => {
        setBoxes(items => [...items, { dims, color }])
    }

    return(
        <div>
            <div>Form </div>
            <NewBoxForm addBox={addBox} />
            <h1>Color Boxes</h1>
            {/* <p> Boxes {boxes[0].color} </p> */}
            <div>
                {boxes.map( ({dims, color}) => <Box dims={dims} color={color} />)}
            </div>

            
            
        </div>
    )

}


export default BoxList;