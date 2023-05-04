import React from 'react';
import {ItemType} from '../../App';
import styles from './CustomSelect.module.css'


type SuperCustomSelectPropsType = {
    selected: ItemType
    collapsed: boolean
    onCollapse: () => void
    onItemClick: (item: ItemType) => void
    items: Array<ItemType>
}

export function SuperCustomSelect(props: SuperCustomSelectPropsType) {
    return (
        <div
            className={styles.customSelect}
            tabIndex={0}
            onBlur={props.onCollapse}
        >
            <SelectedItem title={props.selected.title} onClick={props.onCollapse}/>
            {!props.collapsed && <ItemsForSelect selected={props.selected} items={props.items} onItemClick={props.onItemClick} onCollapse={props.onCollapse}/>}
        </div>
    )
}

type SelectedItemPropsType = {
    title: string
    onClick: () => void
}

function SelectedItem(props: SelectedItemPropsType) {
    return (
        <div
        onClick={props.onClick}
        className={styles.selected}
    >
            {props.title + ` ->`}
        </div>
    )
}

type ItemsForSelectPropsType = {
    selected: ItemType
    items: ItemType[]
    onItemClick: (value: any) => void
    onCollapse: () => void
}

function ItemsForSelect(props: ItemsForSelectPropsType) {

    return (
        <div
            className={styles.items}
        >
            {props.items.map((i, index) => {

                const onclickHandler = () => {
                    props.onItemClick(i)
                    props.onCollapse()
                }

                const classes = props.selected.value === i.value? `${styles.item} ${styles.selectedItem}`: styles.item

                return (
                    <div
                        key={index}
                        className={classes}
                        onClick={onclickHandler}
                    >
                        {i.title}
                    </div>
                )})}
        </div>
    )
}