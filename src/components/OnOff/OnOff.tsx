type OnOffPropsType = {
    on: boolean
}

export function OnOff(props: OnOffPropsType) {
    return (
        <div className={'onOff'}>
            <div className={props.on ? 'buttonOnOF on' : 'buttonOnOF' }>On</div>
            <div className={!props.on ?'buttonOnOF off' : 'buttonOnOF'}>Off</div>
            <div className={props.on? 'indicator on' : 'indicator off'}></div>
        </div>
    )
}