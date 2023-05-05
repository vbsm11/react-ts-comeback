import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
}


type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
  return state
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const collapsedFunc = () => {
      setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={collapsedFunc}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.setCollapsed}>--{props.title}---</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}