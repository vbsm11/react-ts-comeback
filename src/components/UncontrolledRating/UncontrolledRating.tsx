import React, {useState} from 'react';


export function UncontrolledRating() {
    console.log('UncontrolledRating rendering')

    type ValuesType = 0 | 1 | 2 | 3 | 4 | 5


    const [value, setValue] = useState<ValuesType>(0)

    const setValueFunc = (v:ValuesType) => {
        setValue(v)
    }

    return (
        <div>
            <button onClick={() => setValueFunc(0)}>0</button>
            <Star selected={value > 0}/><button onClick={() => setValueFunc(1)}>1</button>
            <Star selected={value > 1}/><button onClick={() => setValueFunc(2)}>2</button>
            <Star selected={value > 2}/><button onClick={() => setValueFunc(3)}>3</button>
            <Star selected={value > 3}/><button onClick={() => setValueFunc(4)}>4</button>
            <Star selected={value > 4}/><button onClick={() => setValueFunc(5)}>5</button>

        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    if (props.selected) {
        return (
            <span><b>star </b></span>
        )
    } else {
        return (
            <span>star </span>
        )
    }

}