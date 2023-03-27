import {useState} from 'react';


type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {
    console.log('UncontrolledOnOff rendering')
    const [on, setOn] = useState<boolean>(false)

    const onOffFunc = () => {
        setOn(!on)
        props.onChange(!on)
    }

    const onOffStyle = {
        margin: '10px'
    }

    const onStyle = {
        display: 'inline-block',
        height: '20px',
        width: '30px',
        padding: '5px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white'
    }

    const offStyle = {
        display: 'inline-block',
        height: '20px',
        width: '30px',
        padding: '5px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red'
    }

    const indicatorStyle = {
        display: 'inline-block',
        marginLeft: '5px',
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div style={onOffStyle}>
            <div onClick={onOffFunc} style={onStyle}>On</div>
            <div onClick={onOffFunc} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}