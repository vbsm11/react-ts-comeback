type OnOffPropsType = {
    on: boolean
    onClick: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onOffStyle = {
        margin: '10px'
    }

    const onStyle = {
        display: 'inline-block',
        height: '20px',
        width: '30px',
        padding: '5px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white'
    }

    const offStyle = {
        display: 'inline-block',
        height: '20px',
        width: '30px',
        padding: '5px',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red'
    }

    const indicatorStyle = {
        display: 'inline-block',
        marginLeft: '5px',
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div style={onOffStyle}>
            <div style={onStyle} onClick={() => props.onClick(true)}>On</div>
            <div style={offStyle} onClick={() => props.onClick(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}