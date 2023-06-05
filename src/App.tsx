import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, ValuesType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledInput} from './components/Input/UncontrolledInput';
import {ControlledInput} from './components/Input/ControlledInput';
import {UncontrolledInputWithRef} from './components/Input/UncontrolledInputWithRef';
import {ControlledCheckbox} from './components/Input/ControlledCheckbox';
import {ControlledSelect} from './components/Input/ControlledSelect';
import {CustomSelect} from './components/Select/CustomSelect';
import {SuperCustomSelect} from './components/Select/SuperCustomSelect';
import {Example1} from './components/ReactMemo/ReactMemo';
import {UseMemoHW} from './components/UseMemo/UseMemoHW';
import {UseMemoWithReactMemo} from './components/UseMemo/UseMemoWithReactMemo';
import {UseMemoLikeUseCallback} from './components/UseMemo/UseMemoLikeUseCallBack';
import {UseState} from './components/UseState/UseState';
import {UseEffect} from './components/UseEffect/UseEffect';
import {UseEffectWithSetTimeOut} from './components/UseEffect/UseEffectWithSetTimeOut';

export type ItemType = {
    title: string
    value: any
}

// function declaration
function App() {
    // что-то полезное

    const [ratingValue, setRatingValue] = useState<ValuesType>(3)

    const [on, setOn] = useState<boolean>(false)

    const items: ItemType[] = [
        {title: 'Alex', value: 1},
        {title: 'Sam', value: 2},
        {title: 'Dima', value: 3},
        {title: 'Masha', value: 4},
        {title: 'Natasha', value: 5},
    ]

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const [selected, setSelected] = useState<ItemType>({title: 'Alex', value: 1})


    // обязана вернуть JSX
    return (
        <div className={'App'}>
            {/*<Accordion*/}
            {/*    titleValue={'Users'}*/}
            {/*    collapsed={collapsed}*/}
            {/*    onClick={() => setCollapsed(!accordionCollapsed)}*/}
            {/*    onItemClick={(v) => {alert(v.toString() + ' was clicked')}}*/}
            {/*    items={[*/}
            {/*        {title: 'Alex', value: 1},*/}
            {/*        {title: 'Sam', value: 2},*/}
            {/*        {title: 'Dima', value: 3}*/}
            {/*    ]}*/}
            {/*/>*/}

            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

            {/*<UncontrolledRating/>*/}

            {/*/!*<OnOff on={on} onClick={setOn}/>*!/*/}

            {/*<UncontrolledOnOff onChange={setOn}/> {on.toString()}*/}

            {/*<UncontrolledInput/>*/}
            {/*<UncontrolledInputWithRef/>*/}

            {/*<ControlledInput/>*/}
            {/*<ControlledCheckbox/>*/}
            {/*<ControlledSelect/>*/}

            {/*<CustomSelect*/}
            {/*    selected={selected}*/}
            {/*    collapsed={collapsed}*/}
            {/*    onCollapse={() => setCollapsed(!collapsed)}*/}
            {/*    onItemClick={setSelected}*/}
            {/*    items={items}*/}
            {/*/>*/}

            {/*<CustomSelectWithMemo*/}
            {/*    selected={selected}*/}
            {/*    collapsed={collapsed}*/}
            {/*    setCollapsed={setCollapsed}*/}
            {/*    onItemClick={setSelected}*/}
            {/*    items={items}*/}
            {/*/>*/}

            {/*<Example1/>*/}

            {/*<UseMemo/>*/}

            {/*<UseMemoWithReactMemo/>*/}

            {/*<UseMemoHW/>*/}

            {/*<UseMemoLikeUseCallback/>*/}

            {/*<UseState/>*/}

            {/*<UseEffect/>*/}

            <UseEffectWithSetTimeOut/>
        </div>
    );
}

// type PageTitlePropsType = {
//     title: string
// }

// function PageTitle(props: PageTitlePropsType) {
//     console.log('PageTitle rendering')
//     return <h1>{props.title}</h1>
// }

export default App;
