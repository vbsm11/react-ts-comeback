import React, {useReducer} from 'react';
import {reducer} from './reducer';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

    const [state, dispatch] = useReducer(reducer, {collapsed: true})

    const collapsedFunc = () => {
      dispatch({type: 'TOGGLE-COLLAPSED'})
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={collapsedFunc}/>
            {!state.collapsed && <AccordionBody/>}
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