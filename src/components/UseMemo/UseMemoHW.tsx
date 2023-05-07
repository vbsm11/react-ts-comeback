import React, {useMemo, useState} from 'react';
import styles from './UseMemoHW.module.css'

type CitiesType = {
    title: string
    countryId: string
    citizens: number
}

type CustomSelectWithMemoPropsType = {
    items: Array<CitiesType>
}

export const UseMemoHW = () => {
    const [counter, setCounter] = useState(0)

    const [cities, setCities] = useState<CitiesType[]>( [
        {title: 'Moscow', countryId: 'rus', citizens: 1000},
        {title: 'London', countryId: 'eng', citizens: 950},
        {title: 'Paris', countryId: 'fr', citizens: 922},
        {title: 'Marsel', countryId: 'fr', citizens: 800},
        {title: 'Saint-P', countryId: 'rus', citizens: 910},
        {title: 'Liverpool', countryId: 'eng', citizens: 750}
    ])

    const arrayById = useMemo(() => {return cities.filter(c => c.countryId === 'rus')}, [cities])
    const arrayByFirstLetter = useMemo(() => {return cities.filter(c => c.title.startsWith('M'))}, [cities])
    const arrayByCitizensCount = useMemo(() => {return cities.filter(c => c.citizens > 900)}, [cities])

  return (
      <div>
      <button onClick={() => {setCounter(counter+1)}}>+</button>{counter}
      <CustomSelectWithMemo items={arrayById}/>
      <CustomSelectWithMemo items={arrayByFirstLetter}/>
      <CustomSelectWithMemo items={arrayByCitizensCount}/>
      </div>
  )
}


export function CustomSelect(props: CustomSelectWithMemoPropsType) {
    console.log('select')

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const [selected, setSelected] = useState<CitiesType>(props.items[0])

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    const setCollapsedTrue = () => {
        setCollapsed(true)
    }

    return (
        <div
            className={styles.customSelect}
            tabIndex={0}
            onBlur={setCollapsedTrue}
        >
            <SelectedItem title={selected.title} onClick={toggleCollapse}/>
            {!collapsed && <ItemsForSelect selected={selected} items={props.items} onItemClick={setSelected} onCollapse={toggleCollapse}/>}
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
    selected: CitiesType
    items: CitiesType[]
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

                const classes = props.selected.title === i.title? `${styles.item} ${styles.selectedItem}`: styles.item

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

const CustomSelectWithMemo = React.memo(CustomSelect)
