import React, { useState } from 'react';

const Box = (props) => {

    const divStyle = {
        color: props.color,
        height: `${props.dims}px`,
        width: `${props.dims}px`,
        border: `1px solid ${props.color}`,
    }

    return (
        <div style={divStyle}>
            box
        </div>
    )

}

export default Box;