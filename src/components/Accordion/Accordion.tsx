import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
    onItemClick: (value: any) => void
    items: Array<ItemType>
}

export function Accordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.onClick}>--{props.title}---</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onItemClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')


    return (
        <ul>
            {props.items.map((i, index) => {

                const onclickHandler = () => {
                    props.onItemClick(i.value)
                }

                return (
                    <li
                        key={index}
                        onClick={onclickHandler}
                    >
                        {i.title}
                    </li>
                )})}
        </ul>
    )
}