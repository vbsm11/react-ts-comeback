import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, ValuesType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledInput} from './Input/UncontrolledInput';
import {ControlledInput} from './Input/ControlledInput';
import {UncontrolledInputWithRef} from './Input/UncontrolledInputWithRef';
import {ControlledCheckbox} from './Input/ControlledCheckbox';
import {ControlledSelect} from './Input/ControlledSelect';


// function declaration
function App() {
    // что-то полезное
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<ValuesType>(3)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const [on, setOn] = useState<boolean>(false)


    // обязана вернуть JSX
    return (
        <div className={'App'}>
            <Accordion
                titleValue={'Users'}
                collapsed={accordionCollapsed}
                onClick={() => setAccordionCollapsed(!accordionCollapsed)}
                onItemClick={(v) => {alert(v.toString() + ' was clicked')}}
                items={[
                    {title: 'Alex', value: 1},
                    {title: 'Sam', value: 2},
                    {title: 'Dima', value: 3}
                ]}
            />

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
