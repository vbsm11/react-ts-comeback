import React from 'react';

type HandPropsType = {
    value: number
    parentClass: string
    childClass: string
}

export const Hand: React.FC<HandPropsType> = ({value, parentClass, childClass}) => {
    return (
        <div className={parentClass}
             style={{transform: 'rotate(' + value + 'deg)'}}
        >
            <div className={childClass}></div>
        </div>
    )
}